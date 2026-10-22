# Contributing to TekiVex UI

Thanks for considering it. This project is maintained by a very small team, so
a good contribution is one that arrives with its own evidence: a test, a
reproduction, or a measurement. This page gets you from clone to green CI in
about ten minutes.

## Ten-minute setup

```bash
git clone https://github.com/007krcs/tekivex-ui
cd tekivex-ui
npm ci                # Node 20+ (see .nvmrc)
npm run typecheck     # tsc --noEmit
npm run lint          # eslint, zero warnings allowed
npm test              # vitest, ~2,300 tests in jsdom, 3–5 minutes
```

Optional, heavier checks:

```bash
npm run build          # all subpath entries, ~3 minutes
npm run check:pack     # publint + arethetypeswrong (packaging gates)
npm run test:browser   # Playwright, real Chromium/Firefox/WebKit, needs `npx playwright install`
npm run dev:demo       # the interactive demo at http://localhost:5173
```

## Where things live

| Path | What |
|---|---|
| `src/components/Tkx*.tsx` | One component per file. 116 of them. |
| `src/engine/security.ts` | SecurityCore: sanitisers, CSP builder, audit trail, rate limiter |
| `src/engine/wcag.ts` | Contrast and accessible-foreground maths |
| `src/a11y/aria/` | The WAI-ARIA 1.2 validator that runs after every test |
| `src/headless/` | Hooks and resolvers without UI |
| `src/themes/` | ThemeProvider, tokens, CSS-variable bridge |
| `src/webmcp/`, `src/mcp/`, `src/agent/` | AI surfaces: agent-operable UI, MCP server, agent runtime |
| `tests/*.test.tsx` | One test file per component; `tests/browser/` is Playwright |
| `docs-site/` | Astro docs; `landing/` is the marketing site; `demo/` is the playground |
| `packages/` | Companion packages (tkx-book catalog, india, pdf, 3d, …) |

## Rules that will get a PR merged fast

1. **Every behaviour change ships with a test.** Component tests live in
   `tests/Tkx<Name>.test.tsx`. Use real prop names from the component; the
   MCP catalog (`npm run mcp:catalog`) is regenerated from source and will
   expose invented props.
2. **Accessibility is not optional.** Every test render is validated against
   WAI-ARIA 1.2 by the sweep in `tests/aria/sweep-setup.ts`. Run
   `npm run aria:check` before pushing anything that touches roles or focus.
3. **Strings that reach the DOM go through `sanitizeString`.** If you add a
   text prop, sanitise it. If you add an `href`, use `sanitizeHref`. See
   `docs/SECURITY-THREAT-MODEL.md` for the sink list.
4. **No new runtime dependencies in core.** `npm run verify:zero-deps` is a
   release gate. Peer or optional dependencies need a discussion issue first.
5. **Keep the public API stable.** Rename with a deprecated alias (see
   `isDisabled` in `TkxButton`) and a `CHANGELOG.md` entry; remove in the
   next major.
6. **CHANGELOG entry for anything user-visible**, under `## [Unreleased]`,
   in the same voice as the existing entries: what changed, why, how to
   verify.

## Commit and PR conventions

- Conventional prefixes: `feat(scope):`, `fix(scope):`, `docs:`, `chore:`,
  `test:`. Scope is the component or module name.
- Fill in the PR template, especially the **Security impact** and
  **Accessibility impact** sections. "N/A" is a valid answer when it is true.
- One logical change per PR. A lint-only or rename-only PR is welcome and
  merges faster than a mixed one.

## Good first issues

`docs/GOOD-FIRST-ISSUES.md` lists self-contained tasks with the file, the
acceptance test, and an effort estimate. Issues on GitHub tagged
`good first issue` mirror that list. Comment on one to claim it.

## Reporting bugs and security issues

- Bugs: open an issue with the **Bug report** template. A failing test or a
  minimal reproduction in the playground is worth more than a screenshot.
- Security: do **not** open a public issue. Follow `SECURITY.md`.

## Decision records

Non-obvious choices are explained inline in header comments (why one build per
entry, why `types` is first in every export condition, why the ARIA sweep
disables RTL auto-cleanup). When you make a non-obvious choice, write the
comment you wish you had found.

## Licence

By contributing you agree your work is released under the MIT licence in
`LICENSE`.
