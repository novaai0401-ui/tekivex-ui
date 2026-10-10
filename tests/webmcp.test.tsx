import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { render, screen, fireEvent, waitFor, act } from '@testing-library/react';
import {
  registerAgentTool,
  callAgentTool,
  validateAgentInput,
  getAgentToolManifest,
  onAgentToolsChange,
  setAgentConfirmHook,
  isWebMcpSupported,
  listAgentTools,
  resetAgentTools,
  AGENT_MANIFEST_MIME,
  AGENT_MANIFEST_GLOBAL,
  useAgentTool,
  useFormAgentTool,
  useAgentToolManifest,
  TkxAgentConfirm,
} from '../src/webmcp';
import { TkxForm, TkxFormField, useTkxForm } from '../src/components/TkxForm';
import { ThemeProvider, quantumDark } from '../src/themes';
import { getAuditLog, verifyAuditIntegrity } from '../src/engine/security';

function Wrapper({ children }: { children: React.ReactNode }) {
  return <ThemeProvider theme={quantumDark}>{children}</ThemeProvider>;
}

const echoTool = {
  name: 'test.echo',
  description: 'Echoes the message back to the caller for testing purposes.',
  inputSchema: {
    type: 'object' as const,
    properties: { message: { type: 'string' as const, maxLength: 50 } },
    required: ['message'],
  },
  handler: (input: Record<string, unknown>) => ({ summary: `echo: ${String(input.message)}` }),
};

beforeEach(() => resetAgentTools());
afterEach(() => {
  resetAgentTools();
  delete (navigator as unknown as Record<string, unknown>).modelContext;
});

describe('registry — registration', () => {
  it('registers, lists and unregisters a tool', () => {
    const off = registerAgentTool(echoTool);
    expect(listAgentTools()).toEqual(['test.echo']);
    off();
    expect(listAgentTools()).toEqual([]);
  });

  it('rejects malformed names, short descriptions and non-object schemas', () => {
    expect(() => registerAgentTool({ ...echoTool, name: 'Bad Name' })).toThrow(/Invalid tool name/);
    expect(() => registerAgentTool({ ...echoTool, description: 'short' })).toThrow(/description/);
    expect(() =>
      registerAgentTool({ ...echoTool, inputSchema: { type: 'string' } as unknown as typeof echoTool.inputSchema }),
    ).toThrow(/inputSchema/);
  });

  it('re-registering the same name replaces the definition, and the stale unregister is a no-op', async () => {
    const offA = registerAgentTool(echoTool);
    registerAgentTool({ ...echoTool, handler: () => ({ summary: 'second' }) });
    offA(); // must not remove the newer registration
    expect(listAgentTools()).toEqual(['test.echo']);
    const out = await callAgentTool('test.echo', { message: 'x' });
    expect(out.result?.summary).toBe('second');
  });

  it('publishes a frozen global snapshot and an inert DOM manifest', () => {
    registerAgentTool(echoTool);
    const g = (globalThis as Record<string, unknown>)[AGENT_MANIFEST_GLOBAL] as ReturnType<typeof getAgentToolManifest>;
    expect(g.version).toBe(1);
    expect(g.tools[0].name).toBe('test.echo');
    expect(Object.isFrozen(g)).toBe(true);
    const el = document.head.querySelector(`script[type="${AGENT_MANIFEST_MIME}"]`);
    expect(el).not.toBeNull();
    const parsed = JSON.parse(el!.textContent ?? '{}');
    expect(parsed.tools).toHaveLength(1);
    expect(parsed.tools[0].requiresConfirmation).toBe(false);
  });

  it('notifies subscribers on every change', () => {
    const spy = vi.fn();
    const off = onAgentToolsChange(spy);
    const unregister = registerAgentTool(echoTool);
    unregister();
    off();
    expect(spy).toHaveBeenCalledTimes(2);
    expect(spy.mock.calls[0][0].tools).toHaveLength(1);
    expect(spy.mock.calls[1][0].tools).toHaveLength(0);
  });
});

describe('registry — invocation and security gates', () => {
  it('runs the handler with sanitised, validated input (control chars, bidi, zero-width stripped)', async () => {
    registerAgentTool(echoTool);
    const out = await callAgentTool('test.echo', { message: 'h\u0000i‮ ​there' });
    expect(out.ok).toBe(true);
    expect(out.result?.summary).toBe('echo: hi there');
  });

  it('returns not_found with suggestions for unknown tools', async () => {
    registerAgentTool(echoTool);
    const out = await callAgentTool('other.echo', {});
    expect(out.ok).toBe(false);
    expect(out.error).toBe('not_found');
    expect(out.message).toContain('test.echo');
  });

  it('rejects missing required keys, unknown keys and type mismatches', async () => {
    registerAgentTool(echoTool);
    expect((await callAgentTool('test.echo', {})).error).toBe('invalid_input');
    expect((await callAgentTool('test.echo', { message: 'ok', extra: 1 })).error).toBe('invalid_input');
    expect((await callAgentTool('test.echo', { message: 42 })).error).toBe('invalid_input');
    expect((await callAgentTool('test.echo', 'nope')).error).toBe('invalid_input');
  });

  it('strips prototype-pollution keys before validation', () => {
    const res = validateAgentInput(JSON.parse('{"__proto__":{"polluted":1},"message":"a"}'), echoTool.inputSchema);
    expect(res.ok).toBe(true);
    expect(res.ok && Object.keys(res.value)).toEqual(['message']);
    expect(({} as Record<string, unknown>).polluted).toBeUndefined();
  });

  it('validates enums, numeric bounds, patterns and nested arrays', () => {
    const schema = {
      type: 'object' as const,
      properties: {
        qty: { type: 'integer' as const, minimum: 1, maximum: 5 },
        size: { type: 'string' as const, enum: ['s', 'm'] },
        code: { type: 'string' as const, pattern: '^[A-Z]{3}$' },
        tags: { type: 'array' as const, items: { type: 'string' as const } },
      },
    };
    expect(validateAgentInput({ qty: 2, size: 's', code: 'ABC', tags: ['a'] }, schema).ok).toBe(true);
    const bad = validateAgentInput({ qty: 2.5, size: 'xl', code: 'abc', tags: [1] }, schema);
    expect(bad.ok).toBe(false);
    expect(bad.ok ? [] : bad.errors).toHaveLength(4);
  });

  it('rate-limits per tool', async () => {
    registerAgentTool({ ...echoTool, rateLimit: { calls: 2, perMs: 60_000 } });
    expect((await callAgentTool('test.echo', { message: 'a' })).ok).toBe(true);
    expect((await callAgentTool('test.echo', { message: 'b' })).ok).toBe(true);
    const third = await callAgentTool('test.echo', { message: 'c' });
    expect(third.error).toBe('rate_limited');
  });

  it('fails closed when confirmation is required and no hook is installed', async () => {
    const handler = vi.fn(() => ({ summary: 'ran' }));
    registerAgentTool({ ...echoTool, requiresConfirmation: true, handler });
    const out = await callAgentTool('test.echo', { message: 'x' });
    expect(out.error).toBe('confirmation_required');
    expect(handler).not.toHaveBeenCalled();
  });

  it('honours the confirm hook in both directions', async () => {
    const handler = vi.fn(() => ({ summary: 'ran' }));
    registerAgentTool({ ...echoTool, requiresConfirmation: true, handler });
    setAgentConfirmHook(async () => false);
    expect((await callAgentTool('test.echo', { message: 'x' })).error).toBe('confirmation_denied');
    setAgentConfirmHook(async (tool, input) => tool.name === 'test.echo' && input.message === 'x');
    expect((await callAgentTool('test.echo', { message: 'x' })).ok).toBe(true);
    expect(handler).toHaveBeenCalledTimes(1);
  });

  it('maps a throwing handler to handler_failed without leaking markup', async () => {
    registerAgentTool({
      ...echoTool,
      handler: () => {
        throw new Error('<img src=x onerror=alert(1)> boom');
      },
    });
    const out = await callAgentTool('test.echo', { message: 'x' });
    expect(out.error).toBe('handler_failed');
    expect(out.message).not.toContain('<img');
  });

  it('writes every call to the hash-chained audit trail', async () => {
    registerAgentTool(echoTool);
    await callAgentTool('test.echo', { message: 'x' });
    const entries = getAuditLog({ component: 'webmcp' });
    expect(entries.some((e) => e.action === 'agent_tool_registered')).toBe(true);
    expect(entries.some((e) => e.action === 'agent_tool_called')).toBe(true);
    expect(verifyAuditIntegrity()).toBe(true);
  });
});

describe('registry — WebMCP host bridge', () => {
  it('reports support only when navigator.modelContext.registerTool exists', () => {
    expect(isWebMcpSupported()).toBe(false);
    (navigator as unknown as Record<string, unknown>).modelContext = { registerTool: () => {} };
    expect(isWebMcpSupported()).toBe(true);
  });

  it('registers with the host, routes execute() through the gates, and unregisters', async () => {
    const registered: Array<{ name: string; execute: (i: unknown) => Promise<unknown> }> = [];
    const unregisterTool = vi.fn();
    (navigator as unknown as Record<string, unknown>).modelContext = {
      registerTool: (t: { name: string; execute: (i: unknown) => Promise<unknown> }) => registered.push(t),
      unregisterTool,
    };
    const off = registerAgentTool(echoTool);
    expect(registered).toHaveLength(1);
    expect(registered[0].name).toBe('test.echo');
    await expect(registered[0].execute({ message: 'hi' })).resolves.toEqual({ summary: 'echo: hi' });
    await expect(registered[0].execute({})).rejects.toThrow(/invalid_input/);
    off();
    expect(unregisterTool).toHaveBeenCalledWith('test.echo');
  });

  it('survives a host whose registerTool throws', () => {
    (navigator as unknown as Record<string, unknown>).modelContext = {
      registerTool: () => {
        throw new Error('host refused');
      },
    };
    expect(() => registerAgentTool(echoTool)).not.toThrow();
    expect(listAgentTools()).toEqual(['test.echo']);
  });
});

describe('React bindings', () => {
  it('useAgentTool registers on mount and unregisters on unmount', () => {
    function Comp() {
      useAgentTool(echoTool);
      return <span>on</span>;
    }
    const { unmount } = render(<Comp />, { wrapper: Wrapper });
    expect(listAgentTools()).toEqual(['test.echo']);
    unmount();
    expect(listAgentTools()).toEqual([]);
  });

  it('useAgentTool always invokes the latest handler without re-registering', async () => {
    const spy = vi.fn();
    function Comp({ label }: { label: string }) {
      useAgentTool({ ...echoTool, handler: () => ({ summary: label }) });
      return <span>{label}</span>;
    }
    onAgentToolsChange(spy);
    const { rerender } = render(<Comp label="one" />, { wrapper: Wrapper });
    rerender(<Comp label="two" />);
    expect((await callAgentTool('test.echo', { message: 'm' })).result?.summary).toBe('two');
    expect(spy).toHaveBeenCalledTimes(1); // only the initial registration
  });

  it('useAgentToolManifest re-renders as tools change', () => {
    function Badge() {
      const m = useAgentToolManifest();
      return <span data-testid="count">{m.tools.length}</span>;
    }
    render(<Badge />, { wrapper: Wrapper });
    expect(screen.getByTestId('count').textContent).toBe('0');
    act(() => {
      registerAgentTool(echoTool);
    });
    expect(screen.getByTestId('count').textContent).toBe('1');
  });

  it('useFormAgentTool exposes describe / fill / submit and respects form rules', async () => {
    const onSubmit = vi.fn(() => 'Order placed.');
    function Demo() {
      const form = useTkxForm();
      useFormAgentTool(form, {
        namespace: 'order',
        purpose: 'Place a coffee order.',
        fields: [
          { name: 'drink', description: 'Drink name', required: true },
          { name: 'qty', description: 'Number of drinks', type: 'integer', minimum: 1 },
        ],
        onSubmit,
        confirmSubmit: false,
      });
      return (
        <TkxForm form={form}>
          <TkxFormField name="drink" label="Drink" rules={[{ required: true, message: 'Drink is required' }]}>
            <input />
          </TkxFormField>
          <TkxFormField name="qty" label="Qty">
            <input type="number" />
          </TkxFormField>
        </TkxForm>
      );
    }
    render(<Demo />, { wrapper: Wrapper });
    expect([...listAgentTools()].sort()).toEqual(['order.describe', 'order.fill', 'order.submit']);

    const fail = await callAgentTool('order.submit', {});
    expect(fail.ok).toBe(true);
    expect(fail.result?.summary).toMatch(/Validation failed/);
    expect(onSubmit).not.toHaveBeenCalled();

    const fill = await callAgentTool('order.fill', { drink: 'latte', qty: 2 });
    expect(fill.ok).toBe(true);

    const desc = await callAgentTool('order.describe', {});
    expect((desc.result?.data as { values: Record<string, unknown> }).values.drink).toBe('latte');

    const ok = await callAgentTool('order.submit', {});
    expect(ok.result?.summary).toBe('Order placed.');
    expect(onSubmit).toHaveBeenCalledWith(expect.objectContaining({ drink: 'latte', qty: 2 }));
  });

  it('useFormAgentTool rejects values the schema forbids before they touch the form', async () => {
    function Demo() {
      const form = useTkxForm();
      useFormAgentTool(form, {
        namespace: 'order',
        purpose: 'Place a coffee order.',
        fields: [{ name: 'qty', description: 'Number of drinks', type: 'integer', minimum: 1, maximum: 3 }],
      });
      return (
        <TkxForm form={form}>
          <TkxFormField name="qty" label="Qty">
            <input type="number" />
          </TkxFormField>
        </TkxForm>
      );
    }
    render(<Demo />, { wrapper: Wrapper });
    expect(listAgentTools()).not.toContain('order.submit'); // no onSubmit → no submit tool
    const out = await callAgentTool('order.fill', { qty: 10 });
    expect(out.error).toBe('invalid_input');
  });

  it('TkxAgentConfirm shows the request and resolves approve / deny', async () => {
    const handler = vi.fn(() => ({ summary: 'done' }));
    registerAgentTool({ ...echoTool, requiresConfirmation: true, handler });
    render(<TkxAgentConfirm />, { wrapper: Wrapper });

    const denied = callAgentTool('test.echo', { message: 'first' });
    await waitFor(() => expect(screen.getByText('test.echo')).toBeInTheDocument());
    expect(screen.getByText(/first/)).toBeInTheDocument();
    fireEvent.click(screen.getByTestId('tkx-agent-deny'));
    expect((await denied).error).toBe('confirmation_denied');
    expect(handler).not.toHaveBeenCalled();

    const approved = callAgentTool('test.echo', { message: 'second' });
    await waitFor(() => expect(screen.getByTestId('tkx-agent-approve')).toBeInTheDocument());
    fireEvent.click(screen.getByTestId('tkx-agent-approve'));
    expect((await approved).ok).toBe(true);
    expect(handler).toHaveBeenCalledTimes(1);
  });

  it('TkxAgentConfirm denies anything still pending when it unmounts', async () => {
    registerAgentTool({ ...echoTool, requiresConfirmation: true });
    const { unmount } = render(<TkxAgentConfirm />, { wrapper: Wrapper });
    const pending = callAgentTool('test.echo', { message: 'x' });
    await waitFor(() => expect(screen.getByTestId('tkx-agent-deny')).toBeInTheDocument());
    unmount();
    expect((await pending).error).toBe('confirmation_denied');
  });
});
