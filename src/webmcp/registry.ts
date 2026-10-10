/**
 * Agent-operable UI — the registry.
 *
 * Every modern browser agent (Chrome's WebMCP early preview, Edge, and the
 * computer-use models that drive a page through its accessibility tree) has
 * the same problem a screen reader had twenty years ago: it has to *guess*
 * what a widget does. This module removes the guessing. A component, or the
 * app that composes components, declares a tool — a name, a description, a
 * JSON Schema for its input and a handler — and the registry publishes it to
 * whichever discovery surface the host browser offers:
 *
 *   1. `navigator.modelContext.registerTool()` when the WebMCP API exists.
 *   2. `window.__tekivex_agent_tools__` — a frozen, always-present snapshot an
 *      in-page agent or test harness can read without any browser support.
 *   3. `<script type="application/tekivex-agent-tools+json">` — a DOM manifest
 *      that accessibility-tree-driven agents can see, so a model that only
 *      has a DOM dump still learns the tool catalog.
 *
 * Security is not optional here. A page tool is an attack surface that any
 * agent — including a prompt-injected one — can invoke, so every call goes
 * through the same kernel the rest of the library uses:
 *
 *   - string inputs are run through `sanitizeString` (XSS, bidi, zero-width)
 *   - inputs are validated against the declared schema; unknown keys rejected
 *   - a token-bucket rate limiter per tool (default 30 calls / minute)
 *   - `requiresConfirmation` tools are gated by a consumer-supplied prompt
 *   - every invocation lands in the SHA-256 hash-chained audit trail
 *
 * Zero runtime dependencies, same as the rest of the package.
 */
import {
  audit,
  createRateLimiter,
  emitSecurityEvent,
  escapeHTML,
  sanitizeString,
  sanitizeUnicode,
} from '../engine/security';
import type { RateLimiter } from '../engine/security';

// ── Public types ─────────────────────────────────────────────────────────────

/** The subset of JSON Schema we validate. Anything else passes through. */
export interface AgentToolSchemaProperty {
  type?: 'string' | 'number' | 'integer' | 'boolean' | 'array' | 'object';
  description?: string;
  enum?: readonly (string | number)[];
  minimum?: number;
  maximum?: number;
  minLength?: number;
  maxLength?: number;
  pattern?: string;
  items?: AgentToolSchemaProperty;
  properties?: Record<string, AgentToolSchemaProperty>;
  required?: readonly string[];
}

export interface AgentToolSchema {
  type: 'object';
  properties?: Record<string, AgentToolSchemaProperty>;
  required?: readonly string[];
  /** Defaults to false: unknown keys are rejected rather than silently kept. */
  additionalProperties?: boolean;
}

export interface AgentToolContext {
  /** Which discovery surface delivered the call. */
  via: 'webmcp' | 'direct';
  /** Monotonic call counter for this tool, useful for idempotency keys. */
  callId: number;
}

export interface AgentToolResult {
  /** Plain-language outcome the agent can read back to the user. */
  summary: string;
  /** Optional structured payload. Must be JSON-serialisable. */
  data?: unknown;
}

export interface AgentToolDefinition<TInput extends Record<string, unknown> = Record<string, unknown>> {
  /** `namespace.verb_noun`, e.g. `checkout.apply_coupon`. [a-z0-9_.-], 3–64 chars. */
  name: string;
  /** One or two sentences. What the tool does, what it must not be used for. */
  description: string;
  inputSchema: AgentToolSchema;
  handler: (input: TInput, ctx: AgentToolContext) => AgentToolResult | Promise<AgentToolResult>;
  /**
   * Mark side-effecting tools (payment, delete, send). The registry will not
   * run the handler until the confirm hook resolves true. Without a confirm
   * hook, confirmation-required tools are refused — fail closed.
   */
  requiresConfirmation?: boolean;
  /** Override the default 30 calls / 60 s token bucket. */
  rateLimit?: { calls: number; perMs: number };
  /** Free-form tags an agent can filter on (`'read-only'`, `'navigation'`…). */
  tags?: readonly string[];
}

export interface AgentToolManifestEntry {
  name: string;
  description: string;
  inputSchema: AgentToolSchema;
  requiresConfirmation: boolean;
  tags: readonly string[];
}

export interface AgentToolManifest {
  /** Manifest format version — bump on breaking shape changes. */
  version: 1;
  generator: 'tekivex-ui/webmcp';
  tools: readonly AgentToolManifestEntry[];
}

export type ConfirmHook = (
  tool: AgentToolManifestEntry,
  input: Record<string, unknown>,
) => boolean | Promise<boolean>;

export type AgentToolErrorCode =
  | 'not_found'
  | 'invalid_input'
  | 'rate_limited'
  | 'confirmation_required'
  | 'confirmation_denied'
  | 'handler_failed';

export interface AgentToolCallOutcome {
  ok: boolean;
  result?: AgentToolResult;
  /** Stable machine-readable code when `ok` is false. */
  error?: AgentToolErrorCode;
  /** Human-readable detail, safe to show to a user or feed back to a model. */
  message?: string;
}

// ── WebMCP host surface (typed loosely: the spec is still moving) ────────────

interface WebMcpToolDescriptor {
  name: string;
  description: string;
  inputSchema: AgentToolSchema;
  execute: (input: Record<string, unknown>) => Promise<unknown>;
}

interface ModelContextLike {
  registerTool?: (tool: WebMcpToolDescriptor) => unknown;
  unregisterTool?: (name: string) => unknown;
  provideContext?: (ctx: { tools: WebMcpToolDescriptor[] }) => unknown;
}

function hostModelContext(): ModelContextLike | null {
  const nav = (globalThis as { navigator?: { modelContext?: ModelContextLike } }).navigator;
  const mc = nav?.modelContext;
  return mc && typeof mc === 'object' ? mc : null;
}

// ── Validation ───────────────────────────────────────────────────────────────

const NAME_RE = /^[a-z][a-z0-9_.-]{2,63}$/;

/** Deep-sanitise every string in an input object. Returns a new object. */
function sanitizeDeep(value: unknown, depth = 0): unknown {
  if (depth > 8) return undefined; // refuse pathological nesting
  // Control characters, then bidi overrides / zero-width / homoglyph tricks
  // (Trojan Source). Markup is deliberately left alone: React escapes text,
  // and handlers that write to a real HTML sink must use escapeHTML there.
  if (typeof value === 'string') return sanitizeUnicode(sanitizeString(value));
  if (Array.isArray(value)) return value.map((v) => sanitizeDeep(v, depth + 1));
  if (value && typeof value === 'object') {
    const out: Record<string, unknown> = {};
    for (const [k, v] of Object.entries(value as Record<string, unknown>)) {
      // Prototype-pollution guard — same rule as sanitizeJSON.
      if (k === '__proto__' || k === 'constructor' || k === 'prototype') continue;
      out[k] = sanitizeDeep(v, depth + 1);
    }
    return out;
  }
  return value;
}

function validateValue(
  value: unknown,
  schema: AgentToolSchemaProperty,
  path: string,
  errors: string[],
): void {
  if (schema.enum && !schema.enum.includes(value as string | number)) {
    errors.push(`${path}: must be one of ${schema.enum.join(', ')}`);
    return;
  }
  switch (schema.type) {
    case 'string': {
      if (typeof value !== 'string') {
        errors.push(`${path}: expected string`);
        return;
      }
      if (schema.minLength !== undefined && value.length < schema.minLength) {
        errors.push(`${path}: shorter than ${schema.minLength}`);
      }
      if (schema.maxLength !== undefined && value.length > schema.maxLength) {
        errors.push(`${path}: longer than ${schema.maxLength}`);
      }
      if (schema.pattern) {
        // A declared pattern is author-controlled, but cap input length so a
        // slow regex cannot be weaponised by an agent-supplied payload.
        if (value.length > 4096) errors.push(`${path}: too long to pattern-match`);
        else if (!new RegExp(schema.pattern, 'u').test(value)) errors.push(`${path}: does not match pattern`);
      }
      return;
    }
    case 'number':
    case 'integer': {
      if (typeof value !== 'number' || !Number.isFinite(value)) {
        errors.push(`${path}: expected ${schema.type}`);
        return;
      }
      if (schema.type === 'integer' && !Number.isInteger(value)) errors.push(`${path}: expected integer`);
      if (schema.minimum !== undefined && value < schema.minimum) errors.push(`${path}: below ${schema.minimum}`);
      if (schema.maximum !== undefined && value > schema.maximum) errors.push(`${path}: above ${schema.maximum}`);
      return;
    }
    case 'boolean':
      if (typeof value !== 'boolean') errors.push(`${path}: expected boolean`);
      return;
    case 'array': {
      if (!Array.isArray(value)) {
        errors.push(`${path}: expected array`);
        return;
      }
      const items = schema.items;
      if (items) value.forEach((v, i) => validateValue(v, items, `${path}[${i}]`, errors));
      return;
    }
    case 'object': {
      if (!value || typeof value !== 'object' || Array.isArray(value)) {
        errors.push(`${path}: expected object`);
        return;
      }
      validateObject(value as Record<string, unknown>, schema, path, errors, true);
      return;
    }
    default:
      return;
  }
}

function validateObject(
  input: Record<string, unknown>,
  schema: AgentToolSchemaProperty | AgentToolSchema,
  path: string,
  errors: string[],
  allowUnknown: boolean,
): void {
  const props = schema.properties ?? {};
  const prefix = path ? path + '.' : '';
  for (const req of schema.required ?? []) {
    if (!(req in input) || input[req] === undefined) errors.push(`${prefix}${req}: required`);
  }
  for (const [key, value] of Object.entries(input)) {
    const sub = props[key];
    if (!sub) {
      if (!allowUnknown) errors.push(`${prefix}${key}: unknown property`);
      continue;
    }
    if (value === undefined) continue;
    validateValue(value, sub, `${prefix}${key}`, errors);
  }
}

/** Validate + sanitise. Exported so consumers can unit-test their schemas. */
export function validateAgentInput(
  raw: unknown,
  schema: AgentToolSchema,
): { ok: true; value: Record<string, unknown> } | { ok: false; errors: string[] } {
  if (!raw || typeof raw !== 'object' || Array.isArray(raw)) {
    return { ok: false, errors: ['input: expected an object'] };
  }
  const value = sanitizeDeep(raw) as Record<string, unknown>;
  const errors: string[] = [];
  validateObject(value, schema, '', errors, schema.additionalProperties === true);
  return errors.length ? { ok: false, errors } : { ok: true, value };
}

// ── Registry ─────────────────────────────────────────────────────────────────

interface Registered {
  def: AgentToolDefinition;
  limiter: RateLimiter;
  calls: number;
  publishedToHost: boolean;
}

const MANIFEST_MIME = 'application/tekivex-agent-tools+json';
const GLOBAL_KEY = '__tekivex_agent_tools__';

const tools = new Map<string, Registered>();
let confirmHook: ConfirmHook | null = null;
const listeners = new Set<(manifest: AgentToolManifest) => void>();

function toManifestEntry(def: AgentToolDefinition): AgentToolManifestEntry {
  return Object.freeze({
    name: def.name,
    description: def.description,
    inputSchema: def.inputSchema,
    requiresConfirmation: def.requiresConfirmation === true,
    tags: Object.freeze([...(def.tags ?? [])]),
  });
}

/** Snapshot of everything currently registered. Safe to serialise. */
export function getAgentToolManifest(): AgentToolManifest {
  return Object.freeze({
    version: 1 as const,
    generator: 'tekivex-ui/webmcp' as const,
    tools: Object.freeze([...tools.values()].map((r) => toManifestEntry(r.def))),
  });
}

/** Subscribe to manifest changes (registration / removal). Returns unsubscribe. */
export function onAgentToolsChange(listener: (manifest: AgentToolManifest) => void): () => void {
  listeners.add(listener);
  return () => {
    listeners.delete(listener);
  };
}

function publishSnapshot(): void {
  const manifest = getAgentToolManifest();
  const g = globalThis as Record<string, unknown>;
  try {
    Object.defineProperty(g, GLOBAL_KEY, {
      value: manifest,
      configurable: true,
      enumerable: false,
      writable: false,
    });
  } catch {
    /* frozen global — nothing to do */
  }
  const doc = (globalThis as { document?: Document }).document;
  if (doc?.head) {
    let el = doc.head.querySelector<HTMLScriptElement>(`script[type="${MANIFEST_MIME}"]`);
    if (!el) {
      el = doc.createElement('script');
      el.type = MANIFEST_MIME;
      el.setAttribute('data-tekivex-agent-manifest', '');
      doc.head.appendChild(el);
    }
    // A <script> with a non-JS type is inert, and textContent (not innerHTML)
    // means nothing here is ever parsed as markup.
    el.textContent = JSON.stringify(manifest);
  }
  for (const l of listeners) l(manifest);
}

/**
 * Supply the UI that asks a human before a `requiresConfirmation` tool runs.
 * Typically wired to TkxModal. Without it, those tools refuse to execute.
 */
export function setAgentConfirmHook(hook: ConfirmHook | null): void {
  confirmHook = hook;
}

/** Call a registered tool. This is what the host-browser bridge calls too. */
export async function callAgentTool(
  name: string,
  rawInput: unknown,
  via: AgentToolContext['via'] = 'direct',
): Promise<AgentToolCallOutcome> {
  const reg = tools.get(name);
  if (!reg) {
    const tail = name.split('.').pop() ?? '';
    const suggestions = [...tools.keys()].filter((k) => tail && k.includes(tail)).slice(0, 3);
    return {
      ok: false,
      error: 'not_found',
      message: suggestions.length ? `Unknown tool. Did you mean: ${suggestions.join(', ')}?` : 'Unknown tool.',
    };
  }
  if (!reg.limiter.check()) {
    audit('agent_tool_rate_limited', 'webmcp', { tool: name, via });
    return { ok: false, error: 'rate_limited', message: 'Too many calls to this tool; retry later.' };
  }
  const validated = validateAgentInput(rawInput, reg.def.inputSchema);
  if (!validated.ok) {
    audit('agent_tool_invalid_input', 'webmcp', { tool: name, via, errors: validated.errors });
    return { ok: false, error: 'invalid_input', message: validated.errors.join('; ') };
  }
  const entry = toManifestEntry(reg.def);
  if (reg.def.requiresConfirmation) {
    if (!confirmHook) {
      emitSecurityEvent(
        'audit',
        `Refused agent tool "${name}": confirmation required but no confirm hook installed`,
        'warning',
        { tool: name, via },
      );
      return {
        ok: false,
        error: 'confirmation_required',
        message: 'This action needs human confirmation and the page has not enabled it.',
      };
    }
    let approved = false;
    try {
      approved = await confirmHook(entry, validated.value);
    } catch {
      approved = false;
    }
    if (!approved) {
      audit('agent_tool_denied', 'webmcp', { tool: name, via });
      return { ok: false, error: 'confirmation_denied', message: 'The user declined this action.' };
    }
  }
  reg.calls += 1;
  const ctx: AgentToolContext = { via, callId: reg.calls };
  try {
    const result = await reg.def.handler(validated.value, ctx);
    audit('agent_tool_called', 'webmcp', {
      tool: name,
      via,
      callId: ctx.callId,
      inputKeys: Object.keys(validated.value),
    });
    return { ok: true, result };
  } catch (err) {
    audit('agent_tool_failed', 'webmcp', { tool: name, via, callId: ctx.callId });
    return {
      ok: false,
      error: 'handler_failed',
      // The message is relayed to a model and often echoed into a chat
      // surface we do not control, so escape it for an HTML sink.
      message: err instanceof Error ? escapeHTML(err.message) : 'Tool handler threw.',
    };
  }
}

/**
 * Register a tool. Returns an unregister function. Re-registering the same
 * name replaces the previous definition (React StrictMode double-mounts rely
 * on this being idempotent).
 */
export function registerAgentTool<TInput extends Record<string, unknown>>(
  def: AgentToolDefinition<TInput>,
): () => void {
  if (!NAME_RE.test(def.name)) {
    throw new Error(
      `[tekivex-ui/webmcp] Invalid tool name "${def.name}". Use lowercase letters, digits, "_", "." or "-", ` +
        `3–64 chars, starting with a letter (e.g. "cart.apply_coupon").`,
    );
  }
  if (!def.description || def.description.trim().length < 20) {
    throw new Error(
      `[tekivex-ui/webmcp] Tool "${def.name}" needs a description of at least 20 characters — ` +
        `agents choose tools by reading it.`,
    );
  }
  if (!def.inputSchema || def.inputSchema.type !== 'object') {
    throw new Error(`[tekivex-ui/webmcp] Tool "${def.name}" inputSchema must be { type: 'object', ... }.`);
  }
  const limit = def.rateLimit ?? { calls: 30, perMs: 60_000 };
  const reg: Registered = {
    def: def as unknown as AgentToolDefinition,
    limiter: createRateLimiter(limit.calls, Math.max(1, Math.floor(limit.perMs / limit.calls))),
    calls: 0,
    publishedToHost: false,
  };
  const previous = tools.get(def.name);
  tools.set(def.name, reg);

  const host = hostModelContext();
  if (host?.registerTool) {
    try {
      if (previous?.publishedToHost && host.unregisterTool) host.unregisterTool(def.name);
      host.registerTool({
        name: def.name,
        description: def.description,
        inputSchema: def.inputSchema,
        execute: async (input) => {
          const outcome = await callAgentTool(def.name, input, 'webmcp');
          // WebMCP expects a thrown error for failure so the agent sees it.
          if (!outcome.ok) throw new Error(`${outcome.error}: ${outcome.message ?? ''}`.trim());
          return outcome.result;
        },
      });
      reg.publishedToHost = true;
    } catch (err) {
      emitSecurityEvent('audit', 'navigator.modelContext.registerTool threw', 'warning', {
        tool: def.name,
        error: err instanceof Error ? err.message : String(err),
      });
    }
  }
  audit('agent_tool_registered', 'webmcp', {
    tool: def.name,
    requiresConfirmation: def.requiresConfirmation === true,
  });
  publishSnapshot();

  return () => {
    const current = tools.get(def.name);
    if (current !== reg) return; // already replaced — leave the newer one alone
    tools.delete(def.name);
    if (reg.publishedToHost) {
      try {
        hostModelContext()?.unregisterTool?.(def.name);
      } catch {
        /* host already dropped it */
      }
    }
    audit('agent_tool_unregistered', 'webmcp', { tool: def.name });
    publishSnapshot();
  };
}

/** True when the host browser exposes the WebMCP API. */
export function isWebMcpSupported(): boolean {
  return typeof hostModelContext()?.registerTool === 'function';
}

/** Names currently registered — handy for tests and devtools. */
export function listAgentTools(): readonly string[] {
  return Object.freeze([...tools.keys()]);
}

/** Test/devtools helper: drop every tool, the confirm hook and the DOM manifest. */
export function resetAgentTools(): void {
  for (const name of [...tools.keys()]) {
    const reg = tools.get(name);
    tools.delete(name);
    if (reg?.publishedToHost) {
      try {
        hostModelContext()?.unregisterTool?.(name);
      } catch {
        /* ignore */
      }
    }
  }
  confirmHook = null;
  publishSnapshot();
}

export const AGENT_MANIFEST_MIME = MANIFEST_MIME;
export const AGENT_MANIFEST_GLOBAL = GLOBAL_KEY;
