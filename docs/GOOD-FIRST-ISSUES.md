# Good first issues

Self-contained tasks for a first contribution. Each one names the file, the
acceptance test, and an honest effort estimate. Claim one by opening an issue
with the **Good first issue** label and the task title, or comment on the
existing one. Read `CONTRIBUTING.md` first; the ten-minute setup is enough.

Conventions: a task is done when `npm run typecheck`, `npm run lint` and
`npm test` are green and the named acceptance check passes.

## Tests and accessibility (no design decisions needed)

| # | Task | File(s) | Acceptance | Effort |
|---|---|---|---|---|
| 1 | Add a keyboard test for `TkxBreadcrumb`: Tab visits every link in order, the current page is `aria-current="page"` and not a link | `tests/TkxBreadcrumb.test.tsx` | New `it` passes; `npm run aria:check` green | 1 h |
| 2 | `TkxPagination`: assert `aria-label` on prev/next buttons is localised through `useLocale()` for `hi` and `ar` | `tests/TkxPagination.test.tsx`, `src/i18n/locales/` | Test renders with `LocaleProvider` and finds the translated label | 1–2 h |
| 3 | `TkxSkeleton`: add a test that `prefers-reduced-motion` disables the shimmer animation | `tests/TkxSkeleton.test.tsx` | Mock `matchMedia` to match, assert no `animation` style | 1 h |
| 4 | Add an `axe` assertion to one Playwright browser spec that currently only checks keyboard behaviour | `tests/browser/` | Spec passes in chromium, firefox, webkit | 1 h |
| 5 | Raise `TkxTag` coverage: closable tag calls `onClose` on Backspace and Delete when focused | `tests/TkxTag.test.tsx` | Two new tests | 1 h |

## Docs and catalog

| # | Task | File(s) | Acceptance | Effort |
|---|---|---|---|---|
| 6 | Write the MDX docs tab for a tkx-book story that has none (Tooltip, Pagination, Breadcrumb, Slider…) | `packages/tkx-book/stories/<name>.mdx` | Story shows the Docs tab; `npm run build` in `packages/tkx-book` passes | 1 h |
| 7 | Add a "when NOT to use" paragraph to a component docs page that lacks one | `docs-site/src/content/docs/components/*.mdx` | Page builds; paragraph matches the voice of `button.mdx` | 30 min |
| 8 | Add a recipe: "Confirm before destructive action" using `TkxModal` + `TkxButton colorScheme="danger"` | `docs-site/src/content/docs/recipes/` + sidebar entry in `docs-site/astro.config.mjs` | Recipe builds and appears in `llms.txt` | 2 h |

## Small code fixes

| # | Task | File(s) | Acceptance | Effort |
|---|---|---|---|---|
| 9 | `TkxProgress`: forward `...rest` HTML attributes to the root element (currently destructured and dropped) | `src/components/TkxProgress.tsx` | `data-testid` passed by a consumer appears in the DOM; test added | 1 h |
| 10 | `TkxPopover`: remove the unused `wrapperRef`, or wire it to outside-click dismissal if that was the intent (check git blame and the test file) | `src/components/TkxPopover.tsx` | Lint clean; outside-click test still passes | 1–2 h |
| 11 | `scripts/check-story-coverage.mjs`: print the list of components *without* a story, sorted by `npm` download relevance using the TOP_20 list first | `scripts/check-story-coverage.mjs` | `npm run book:coverage` output shows the list | 1 h |
| 12 | Add `bg`, `fg` convenience aliases to `tkxThemeVars()` output and document them | `src/themes/index.ts`, `docs-site/src/content/docs/themes.mdx` | Test in `tests/ThemeProvider.test.tsx` | 1 h |

## Tooling

| # | Task | File(s) | Acceptance | Effort |
|---|---|---|---|---|
| 13 | Migrate `vitest.config.ts` from the removed `poolOptions` key to the Vitest 4 top-level options (the deprecation warning prints on every run) | `vitest.config.ts` | No deprecation warning; suite still runs with forks and the 6 GB heap | 30 min |
| 14 | Add a GitHub Action that runs `npm run book:coverage` and fails below the TOP_20 threshold | `.github/workflows/ci.yml` | Job appears in CI; passes on `master` | 1 h |
| 15 | Add `engines.node` to `package.json` matching `.nvmrc`, and a one-line note in `CONTRIBUTING.md` | `package.json`, `CONTRIBUTING.md` | `npm ci` on Node 18 warns | 15 min |

## Larger, mentored

These need a short design comment on the issue before code. Expect review
back-and-forth; they are the path from first PR to regular contributor.

- **`TkxDataGrid` column virtualisation** for 100+ column grids. Row
  virtualisation exists; columns do not.
- **Plural-rules engine for i18n** (`t('items', { count })` with CLDR
  categories). Roadmap item, v3.20, still open.
- **React Hook Form adapters** for the eight most-used inputs
  (`src/headless/rhfBindings.tsx` has the first two).
- **Screen-reader recording pass**: record NVDA + VoiceOver walkthroughs of
  the 20 components in `tests/browser/` and attach to
  `docs/a11y-screen-reader-matrix.md`.
