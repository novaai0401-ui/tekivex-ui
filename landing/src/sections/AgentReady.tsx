/**
 * AgentReady — "Built for the agentic web."
 *
 * The one capability no competing React kit ships: the UI itself is operable
 * by AI browser agents through `tekivex-ui/webmcp`, with every call routed
 * through SecurityCore. Placed right after SecurityDeepDive because it is the
 * security story extended to a new class of user (the agent), not a side
 * quest.
 *
 * Same light-theme tokens and static <pre><code> treatment as
 * SecurityDeepDive — no highlighter dependency.
 */

const ACCENT_DARK   = '#0f766e';
const ACCENT_BG     = '#f0fdfa';
const ACCENT_BORDER = '#99f6e4';
const BORDER        = '#e5e7eb';
const SURFACE       = '#ffffff';
const CODE_BG       = '#fafbfc';
const TEXT          = '#0a0a0f';
const TEXT_BODY     = '#1f2937';
const TEXT_MUTED    = '#4b5563';
const SHADOW_SM     = '0 1px 2px rgba(0,0,0,0.04), 0 1px 3px rgba(0,0,0,0.06)';
const MONO          = 'ui-monospace, SFMono-Regular, Menlo, Consolas, monospace';

const TOK = {
  keyword: '#7c3aed',
  string:  '#0d9488',
  fn:      '#b45309',
  attr:    '#0369a1',
  punct:   '#4b5563',
  text:    '#1f2937',
  comment: '#6b7280',
};

const K = ({ children }: { children: React.ReactNode }) => <span style={{ color: TOK.keyword }}>{children}</span>;
const S = ({ children }: { children: React.ReactNode }) => <span style={{ color: TOK.string }}>{children}</span>;
const F = ({ children }: { children: React.ReactNode }) => <span style={{ color: TOK.fn }}>{children}</span>;
const A = ({ children }: { children: React.ReactNode }) => <span style={{ color: TOK.attr }}>{children}</span>;
const C = ({ children }: { children: React.ReactNode }) => <span style={{ color: TOK.comment }}>{children}</span>;

interface Gate {
  title: string;
  desc: string;
}

const GATES: Gate[] = [
  {
    title: 'Three discovery surfaces',
    desc: 'navigator.modelContext when the browser has WebMCP, a frozen window snapshot, and an inert JSON manifest in <head> for agents that only see the DOM.',
  },
  {
    title: 'Schema-validated, sanitised input',
    desc: 'Required keys, enums, bounds, patterns. Unknown keys rejected, __proto__ stripped, bidi and zero-width characters removed before your handler runs.',
  },
  {
    title: 'Human-in-the-loop by default',
    desc: 'Side-effecting tools refuse to run until a person approves in TkxAgentConfirm. No confirm UI mounted? The tool fails closed.',
  },
  {
    title: 'Rate-limited and audited',
    desc: 'Per-tool token bucket. Every registration, call and refusal is appended to the SHA-256 hash-chained audit log you already ship.',
  },
];

export function AgentReady() {
  return (
    <section
      id="agent-ready"
      aria-labelledby="agent-ready-heading"
      style={{ padding: '88px 24px', maxWidth: 1200, margin: '0 auto' }}
    >
      <header style={{ textAlign: 'center', marginBottom: 48 }}>
        <div
          style={{
            display: 'inline-block',
            padding: '4px 12px',
            borderRadius: 999,
            background: ACCENT_BG,
            border: `1px solid ${ACCENT_BORDER}`,
            color: ACCENT_DARK,
            fontSize: 11,
            fontWeight: 700,
            letterSpacing: '0.1em',
            marginBottom: 16,
          }}
        >
          NEW IN 4.6 · tekivex-ui/webmcp
        </div>
        <h2
          id="agent-ready-heading"
          style={{
            fontSize: 'clamp(1.9rem, 3.8vw, 2.6rem)',
            fontWeight: 800,
            letterSpacing: '-0.025em',
            lineHeight: 1.15,
            margin: '0 auto 14px',
            maxWidth: 820,
            color: TEXT,
          }}
        >
          Built for the agentic web
        </h2>
        <p style={{ fontSize: 15, lineHeight: 1.65, color: TEXT_BODY, maxWidth: 680, margin: '0 auto' }}>
          Your next user is an AI browser agent. Every other component library makes
          it guess from pixels. TekiVex components <strong>declare</strong> what they
          do &mdash; and every agent call passes through the same security kernel as
          the rest of the library.
        </p>
      </header>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: 24,
          alignItems: 'start',
        }}
      >
        <pre
          aria-label="Example: exposing a checkout form to AI agents with useFormAgentTool"
          style={{
            margin: 0,
            padding: '18px 20px',
            background: CODE_BG,
            border: `1px solid ${BORDER}`,
            borderRadius: 10,
            fontFamily: MONO,
            fontSize: 12.5,
            lineHeight: 1.65,
            color: TOK.text,
            overflowX: 'auto',
            boxShadow: SHADOW_SM,
          }}
        >
          <code>
            <K>import</K> {'{ '}<A>useFormAgentTool</A>, <A>TkxAgentConfirm</A>{' }'} <K>from</K> <S>'tekivex-ui/webmcp'</S>;{'\n\n'}
            <K>const</K> form = <F>useTkxForm</F>();{'\n'}
            <F>useFormAgentTool</F>(form, {'{'}{'\n'}
            {'  '}<A>namespace</A>: <S>'checkout'</S>,{'\n'}
            {'  '}<A>purpose</A>: <S>'Complete checkout for the current cart.'</S>,{'\n'}
            {'  '}<A>fields</A>: [{'\n'}
            {'    '}{'{ '}<A>name</A>: <S>'email'</S>, <A>description</A>: <S>'Receipt email'</S>, <A>required</A>: <K>true</K>{' }'},{'\n'}
            {'    '}{'{ '}<A>name</A>: <S>'qty'</S>, <A>type</A>: <S>'integer'</S>, <A>minimum</A>: 1, <A>maximum</A>: 10,{'\n'}
            {'      '}<A>description</A>: <S>'Number of items'</S>{' }'},{'\n'}
            {'  '}],{'\n'}
            {'  '}<A>onSubmit</A>: <K>async</K> (v) ={'>'} {'{ '}<K>await</K> <F>placeOrder</F>(v); <K>return</K> <S>'Order placed.'</S>; {'}'},{'\n'}
            {'}'});{'\n\n'}
            <C>{'// → checkout.describe · checkout.fill · checkout.submit (confirmation-gated)'}</C>{'\n'}
            <C>{'// published to navigator.modelContext + window + <head> manifest'}</C>{'\n\n'}
            {'<'}<A>TkxAgentConfirm</A> {'/>'} <C>{'// the human sees exactly what the agent wants to do'}</C>
          </code>
        </pre>

        <div style={{ display: 'grid', gap: 12 }}>
          {GATES.map((g) => (
            <article
              key={g.title}
              style={{
                border: `1px solid ${BORDER}`,
                borderRadius: 12,
                background: SURFACE,
                boxShadow: SHADOW_SM,
                padding: '16px 18px',
              }}
            >
              <h3 style={{ margin: '0 0 6px', fontSize: 15, fontWeight: 700, color: TEXT, letterSpacing: '-0.01em' }}>
                {g.title}
              </h3>
              <p style={{ margin: 0, color: TEXT_MUTED, fontSize: 13.5, lineHeight: 1.6 }}>{g.desc}</p>
            </article>
          ))}
          <p style={{ margin: '4px 0 0', fontSize: 13, color: TEXT_MUTED, lineHeight: 1.6 }}>
            Works in every browser: the window and DOM manifests need no WebMCP support, and
            the <code style={{ fontFamily: MONO }}>navigator.modelContext</code> bridge is
            feature-detected. Reference:{' '}
            <a
              href="https://github.com/007krcs/tekivex-ui/blob/master/docs/WEBMCP.md"
              style={{ color: ACCENT_DARK, fontWeight: 600 }}
            >
              docs/WEBMCP.md
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  );
}
