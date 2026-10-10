'use client';

/**
 * React bindings for the agent-tool registry.
 *
 *   useAgentTool(def)            — register for the lifetime of a component
 *   useFormAgentTool(form, opts) — expose a TkxForm as fill / validate / submit tools
 *   <TkxAgentConfirm />          — human-in-the-loop gate rendered with TkxModal
 *   useAgentToolManifest()       — live manifest for devtools / status badges
 */
import { useEffect, useRef, useState, useCallback, type ReactNode } from 'react';
import { TkxModal } from '../components/TkxModal';
import { TkxButton } from '../components/TkxButton';
import type { FormInstance } from '../components/TkxForm';
import {
  registerAgentTool,
  setAgentConfirmHook,
  getAgentToolManifest,
  onAgentToolsChange,
  type AgentToolDefinition,
  type AgentToolManifest,
  type AgentToolManifestEntry,
  type AgentToolSchemaProperty,
} from './registry';

// ── useAgentTool ─────────────────────────────────────────────────────────────

/**
 * Register a tool while the component is mounted. The latest `handler` is
 * always used (stored in a ref), so callers do not need to memoise it; the
 * tool is re-registered only when its *shape* (name, description, schema,
 * confirmation flag) changes.
 */
export function useAgentTool<TInput extends Record<string, unknown>>(
  def: AgentToolDefinition<TInput>,
  enabled = true,
): void {
  const handlerRef = useRef(def.handler);
  handlerRef.current = def.handler;
  const shapeKey = JSON.stringify([
    def.name,
    def.description,
    def.inputSchema,
    def.requiresConfirmation ?? false,
    def.rateLimit ?? null,
    def.tags ?? [],
  ]);

  useEffect(() => {
    if (!enabled) return;
    const unregister = registerAgentTool<TInput>({
      ...def,
      handler: (input, ctx) => handlerRef.current(input, ctx),
    });
    return unregister;
    // `def` is intentionally represented by shapeKey — the handler is read
    // through the ref so identity churn on every render does not re-register.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [shapeKey, enabled]);
}

// ── useFormAgentTool ─────────────────────────────────────────────────────────

export interface AgentFormField {
  /** Field name as passed to <TkxFormField name="…"> */
  name: string;
  /** What the field means, in words an agent can match to user intent. */
  description: string;
  type?: 'string' | 'number' | 'integer' | 'boolean';
  enum?: readonly (string | number)[];
  required?: boolean;
  pattern?: string;
  minLength?: number;
  maxLength?: number;
  minimum?: number;
  maximum?: number;
}

export interface FormAgentToolOptions {
  /** Namespace for the generated tools, e.g. `checkout` → `checkout.fill`, `checkout.submit`. */
  namespace: string;
  /** What this form is for. Prefixed to every generated description. */
  purpose: string;
  fields: readonly AgentFormField[];
  /**
   * Called by the `submit` tool after validation passes. Return a summary the
   * agent can relay. Omit to make the form fill-only (no submit tool).
   */
  onSubmit?: (values: Record<string, unknown>) => void | string | Promise<void | string>;
  /** Submit is side-effecting, so it asks for confirmation by default. */
  confirmSubmit?: boolean;
  enabled?: boolean;
}

const nextTick = () => new Promise<void>((r) => setTimeout(r, 0));

function fieldSchema(f: AgentFormField): AgentToolSchemaProperty {
  const s: AgentToolSchemaProperty = { type: f.type ?? 'string', description: f.description };
  if (f.enum) s.enum = f.enum;
  if (f.pattern) s.pattern = f.pattern;
  if (f.minLength !== undefined) s.minLength = f.minLength;
  if (f.maxLength !== undefined) s.maxLength = f.maxLength;
  if (f.minimum !== undefined) s.minimum = f.minimum;
  if (f.maximum !== undefined) s.maximum = f.maximum;
  return s;
}

/**
 * Expose a TkxForm to agents as three tools:
 *
 *   `<ns>.describe` — read-only: current values + validation errors
 *   `<ns>.fill`     — set one or more fields (partial updates allowed)
 *   `<ns>.submit`   — validate, then run `onSubmit` (confirmation-gated)
 *
 * The form's own `rules` still run — the agent cannot bypass validation.
 */
export function useFormAgentTool(form: FormInstance, opts: FormAgentToolOptions): void {
  const { namespace, purpose, fields, onSubmit, confirmSubmit = true, enabled = true } = opts;
  const formRef = useRef(form);
  formRef.current = form;
  const onSubmitRef = useRef(onSubmit);
  onSubmitRef.current = onSubmit;

  const properties: Record<string, AgentToolSchemaProperty> = {};
  for (const f of fields) properties[f.name] = fieldSchema(f);
  const requiredNames = fields.filter((f) => f.required).map((f) => f.name);
  const fieldNames = fields.map((f) => f.name);

  useAgentTool(
    {
      name: `${namespace}.describe`,
      description: `${purpose} Read-only: returns the form's current field values and any validation errors. Call this before filling to see what is already entered.`,
      inputSchema: { type: 'object', properties: {} },
      tags: ['read-only', 'form'],
      handler: () => {
        const f = formRef.current;
        const values = f.getFieldsValue();
        const errors: Record<string, string> = {};
        for (const name of fieldNames) {
          const e = f.getFieldError(name);
          if (e) errors[name] = e;
        }
        return {
          summary: `${Object.keys(values).length} field(s) have values; ${Object.keys(errors).length} error(s).`,
          data: { values, errors, required: requiredNames },
        };
      },
    },
    enabled,
  );

  useAgentTool(
    {
      name: `${namespace}.fill`,
      description: `${purpose} Sets one or more fields. Partial updates are fine; omitted fields keep their current value. Does not submit.`,
      inputSchema: { type: 'object', properties },
      tags: ['form'],
      handler: async (input) => {
        const f = formRef.current;
        f.setFieldsValue(input);
        // TkxForm stores values in React state; give React a tick to commit
        // before validating, otherwise rules see the previous values.
        await nextTick();
        const failed: string[] = [];
        for (const name of Object.keys(input)) {
          if (!fieldNames.includes(name)) continue;
          const ok = await f.validateField(name);
          if (!ok) failed.push(`${name}: ${f.getFieldError(name) ?? 'invalid'}`);
        }
        return {
          summary: failed.length
            ? `Filled ${Object.keys(input).length} field(s); ${failed.length} failed validation.`
            : `Filled ${Object.keys(input).length} field(s); all valid.`,
          data: { errors: failed },
        };
      },
    },
    enabled,
  );

  useAgentTool(
    {
      name: `${namespace}.submit`,
      description: `${purpose} Validates every field and submits the form. Side-effecting — ask the user before calling unless they explicitly requested submission.`,
      inputSchema: { type: 'object', properties: {} },
      requiresConfirmation: confirmSubmit,
      tags: ['form', 'side-effect'],
      handler: async () => {
        const f = formRef.current;
        let values: Record<string, unknown>;
        try {
          values = await f.validateFields();
        } catch {
          const errors: Record<string, string> = {};
          for (const name of fieldNames) {
            const e = f.getFieldError(name);
            if (e) errors[name] = e;
          }
          return { summary: 'Validation failed; the form was not submitted.', data: { errors } };
        }
        const out = await onSubmitRef.current?.(values);
        return { summary: typeof out === 'string' ? out : 'Form submitted.' };
      },
    },
    enabled && typeof onSubmit === 'function',
  );
}

// ── useAgentToolManifest ─────────────────────────────────────────────────────

/** Live view of the registered tools — re-renders on every change. */
export function useAgentToolManifest(): AgentToolManifest {
  const [manifest, setManifest] = useState<AgentToolManifest>(() => getAgentToolManifest());
  useEffect(() => onAgentToolsChange(setManifest), []);
  return manifest;
}

// ── TkxAgentConfirm ──────────────────────────────────────────────────────────

export interface TkxAgentConfirmProps {
  /** Dialog title. Default: "An AI agent wants to act on this page". */
  title?: string;
  /** Render the body. Default lists the tool name, description and input. */
  renderDetails?: (tool: AgentToolManifestEntry, input: Record<string, unknown>) => ReactNode;
  approveLabel?: string;
  denyLabel?: string;
}

interface PendingConfirm {
  tool: AgentToolManifestEntry;
  input: Record<string, unknown>;
  resolve: (approved: boolean) => void;
}

/**
 * Mount once near the root. Installs the registry's confirm hook and renders
 * a TkxModal whenever a `requiresConfirmation` tool is invoked. The user sees
 * exactly what the agent is about to do — tool, description, and the
 * sanitised input — and chooses. Unmounting removes the hook, which makes
 * confirmation-gated tools fail closed again.
 */
export function TkxAgentConfirm({
  title = 'An AI agent wants to act on this page',
  renderDetails,
  approveLabel = 'Allow',
  denyLabel = 'Deny',
}: TkxAgentConfirmProps) {
  const [pending, setPending] = useState<PendingConfirm | null>(null);
  const pendingRef = useRef<PendingConfirm | null>(null);
  pendingRef.current = pending;
  const queue = useRef<PendingConfirm[]>([]);

  const next = useCallback(() => {
    setPending(queue.current.shift() ?? null);
  }, []);

  useEffect(() => {
    setAgentConfirmHook(
      (tool, input) =>
        new Promise<boolean>((resolve) => {
          const item: PendingConfirm = { tool, input, resolve };
          queue.current.push(item);
          setPending((cur) => cur ?? queue.current.shift() ?? null);
        }),
    );
    return () => {
      setAgentConfirmHook(null);
      // Anything still waiting — shown or queued — is denied. Never leave an
      // agent hanging on a promise nobody can answer.
      pendingRef.current?.resolve(false);
      for (const p of queue.current) p.resolve(false);
      queue.current = [];
    };
  }, []);

  const decide = (approved: boolean) => {
    pending?.resolve(approved);
    next();
  };

  return (
    <TkxModal
      isOpen={pending !== null}
      onClose={() => decide(false)}
      title={title}
      size="sm"
      footer={
        <div style={{ display: 'flex', gap: 8, justifyContent: 'flex-end' }}>
          <TkxButton variant="outline" colorScheme="secondary" onClick={() => decide(false)} data-testid="tkx-agent-deny">
            {denyLabel}
          </TkxButton>
          <TkxButton onClick={() => decide(true)} data-testid="tkx-agent-approve">
            {approveLabel}
          </TkxButton>
        </div>
      }
    >
      {pending &&
        (renderDetails ? (
          renderDetails(pending.tool, pending.input)
        ) : (
          <div style={{ display: 'grid', gap: 10, fontSize: 14, lineHeight: 1.5 }}>
            <div>
              <strong>Action:</strong> <code>{pending.tool.name}</code>
            </div>
            <div>{pending.tool.description}</div>
            {Object.keys(pending.input).length > 0 && (
              <pre
                style={{
                  margin: 0,
                  padding: 10,
                  fontSize: 12,
                  overflowX: 'auto',
                  borderRadius: 6,
                  background: 'rgba(127,127,127,0.12)',
                }}
              >
                {JSON.stringify(pending.input, null, 2)}
              </pre>
            )}
          </div>
        ))}
    </TkxModal>
  );
}
