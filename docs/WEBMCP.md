# `tekivex-ui/webmcp` — agent-operable UI

Browser agents are becoming a second user of every web app: Chrome's WebMCP
early preview exposes `navigator.modelContext`, computer-use models drive
pages through the accessibility tree, and in-page copilots call whatever the
page lets them. Today they all do the same thing a screen reader did in 2004:
guess what a widget does from its pixels and labels.

`tekivex-ui/webmcp` removes the guessing. A component, or the app composing
components, declares a **tool** — name, description, JSON Schema, handler —
and the registry publishes it on every discovery surface at once:

| Surface | Who reads it |
|---|---|
| `navigator.modelContext.registerTool()` | WebMCP-capable browsers (Chrome / Edge previews) |
| `window.__tekivex_agent_tools__` | In-page copilots, test harnesses, devtools |
| `<script type="application/tekivex-agent-tools+json">` in `<head>` | Agents that only see a DOM or accessibility dump |

The manifest is identical on all three, so an agent that learns the catalog on
any surface can call the tool through any other.

## Why a component library should own this

Because the dangerous part is not discovery, it is **execution**. A page tool
is an attack surface that any agent — including a prompt-injected one — can
invoke. Shipping the bridge inside the same package as the security kernel
means every call goes through the same gates the rest of the library uses:

1. **Schema validation** — required keys enforced, unknown keys rejected,
   enums / bounds / patterns checked; `__proto__` and friends stripped.
2. **String sanitisation** — control characters, bidi overrides, zero-width
   and soft-hyphen characters removed (Trojan Source, CVE-2021-42574).
3. **Per-tool rate limiting** — token bucket, default 30 calls / minute.
4. **Confirmation gates** — `requiresConfirmation: true` tools do not run
   until a human approves through `TkxAgentConfirm`. No confirm UI mounted →
   the tool refuses. Fail closed.
5. **Audit trail** — registration, every call, every refusal is appended to
   the SHA-256 hash-chained log (`getAuditLog({ component: 'webmcp' })`).

No competitor ships any of this. None of them ship a WebMCP bridge at all.

## Install

Already in the package:

```ts
import { useAgentTool, useFormAgentTool, TkxAgentConfirm } from 'tekivex-ui/webmcp';
```

Zero runtime dependencies. Works without WebMCP — the global and DOM surfaces
are always populated, the browser API is used when present.

## Declare a tool

```tsx
import { useAgentTool } from 'tekivex-ui/webmcp';

function ThemeSwitch() {
  const [mode, setMode] = useState<'light' | 'dark'>('light');

  useAgentTool({
    name: 'ui.set_theme',
    description: 'Switch the application colour scheme between light and dark.',
    inputSchema: {
      type: 'object',
      properties: { mode: { type: 'string', enum: ['light', 'dark'] } },
      required: ['mode'],
    },
    tags: ['read-write', 'preferences'],
    handler: ({ mode }) => {
      setMode(mode as 'light' | 'dark');
      return { summary: `Theme set to ${mode}.` };
    },
  });

  return <TkxToggle checked={mode === 'dark'} onChange={(v) => setMode(v ? 'dark' : 'light')} />;
}
```

Rules enforced at registration (they throw, so you find out in development):

- `name` is `[a-z][a-z0-9_.-]{2,63}` — use `namespace.verb_noun`.
- `description` is at least 20 characters. Agents choose tools by reading it.
- `inputSchema.type` is `'object'`.

The latest `handler` is always used, so you do not need `useCallback`; the
tool is re-registered only when its shape (name, description, schema, flags)
changes. Unmount unregisters.

## Expose a form

```tsx
import { TkxForm, TkxFormField, useTkxForm } from 'tekivex-ui';
import { useFormAgentTool } from 'tekivex-ui/webmcp';

function Checkout() {
  const form = useTkxForm();

  useFormAgentTool(form, {
    namespace: 'checkout',
    purpose: 'Complete the checkout form for the current cart.',
    fields: [
      { name: 'email', description: 'Receipt email address', required: true, pattern: '^[^@\\s]+@[^@\\s]+$' },
      { name: 'coupon', description: 'Promo code, if the user has one', maxLength: 16 },
      { name: 'qty', description: 'Number of items', type: 'integer', minimum: 1, maximum: 10 },
    ],
    onSubmit: async (values) => {
      await placeOrder(values);
      return 'Order placed.';
    },
    // confirmSubmit defaults to true — submit asks the human first.
  });

  return (
    <TkxForm form={form} onSubmit={placeOrder}>
      <TkxFormField name="email" label="Email" rules={[{ required: true }]}><TkxInput /></TkxFormField>
      …
    </TkxForm>
  );
}
```

Three tools appear:

| Tool | Behaviour |
|---|---|
| `checkout.describe` | Read-only. Current values, validation errors, required list. |
| `checkout.fill` | Partial update. Runs the form's own `rules`; reports per-field failures. |
| `checkout.submit` | Validates everything, then `onSubmit`. Confirmation-gated by default. Absent when `onSubmit` is omitted. |

The agent cannot bypass validation: the field schema rejects out-of-range
input before it touches the form, and `TkxFormField` rules run after.

## Human-in-the-loop

Mount once near the root:

```tsx
import { TkxAgentConfirm } from 'tekivex-ui/webmcp';

<ThemeProvider theme={auroraLight}>
  <App />
  <TkxAgentConfirm />
</ThemeProvider>
```

When an agent calls a `requiresConfirmation` tool, a `TkxModal` shows the tool
name, its description and the **sanitised** input, with Allow / Deny.
Requests queue; unmounting denies anything pending. Customise with
`renderDetails`, `title`, `approveLabel`, `denyLabel`, or replace the UI
entirely with `setAgentConfirmHook(async (tool, input) => boolean)`.

## Calling tools yourself

The same entry point the browser uses:

```ts
import { callAgentTool } from 'tekivex-ui/webmcp';

const out = await callAgentTool('checkout.fill', { email: 'a@b.co' });
// { ok: true, result: { summary: 'Filled 1 field(s); all valid.', data: { errors: [] } } }
// or { ok: false, error: 'invalid_input' | 'rate_limited' | 'not_found' | 'confirmation_required' | 'confirmation_denied' | 'handler_failed', message }
```

`not_found` includes ranked suggestions, mirroring the MCP server's behaviour:
the registry never invents a tool.

## Observability

```ts
import { getAgentToolManifest, onAgentToolsChange, useAgentToolManifest } from 'tekivex-ui/webmcp';
import { getAuditLog, verifyAuditIntegrity } from 'tekivex-ui/headless';

getAgentToolManifest();                        // { version: 1, generator, tools: [...] }
onAgentToolsChange((m) => console.log(m));     // subscribe
getAuditLog({ component: 'webmcp' });          // every registration / call / refusal
verifyAuditIntegrity();                        // true unless the chain was tampered with
```

## Testing your tools

`validateAgentInput(raw, schema)` is exported so a unit test can assert a
schema rejects what it should. `resetAgentTools()` clears the registry between
tests. The library's own suite (`tests/webmcp.test.tsx`, 25 tests) covers
registration, every error code, both confirmation outcomes, the WebMCP host
bridge with a mocked `navigator.modelContext`, and the form tools end to end.

## Relationship to `tekivex-ui/mcp` and `tekivex-ui/agent`

| Entry | Direction | Audience |
|---|---|---|
| `tekivex-ui/mcp` | Assistant → **this library's source** | Developers building with tekivex-ui in Claude / Cursor |
| `tekivex-ui/agent` | Your app → **model providers** | Apps that embed an LLM agent |
| `tekivex-ui/webmcp` | Browser agent → **your running UI** | End users whose assistant operates your product |

## Spec status

WebMCP is an early-stage proposal (W3C Web Machine Learning Community Group;
Chrome and Edge previews). The `navigator.modelContext` surface may change.
This module types it loosely, feature-detects at call time, and never depends
on it for correctness — the global and DOM manifests work in every browser
shipped since 2017. When the API moves, the bridge is one function.
