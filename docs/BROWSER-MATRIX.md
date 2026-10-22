# Real-browser accessibility + keyboard matrix

`tests/browser/` backs the library's WCAG 2.1 AA / WAI-ARIA APG claims with
**real browsers** (Chromium, Firefox, WebKit) instead of jsdom only. Each of the
top-20 components gets, on its live demo page (`/#/components/<slug>`):

1. **axe-core** (`node_modules/axe-core/axe.min.js`, tags `wcag2a wcag2aa
   wcag21a wcag21aa`) run against the `Live demo: …` regions, asserting **zero
   serious/critical violations**. Overlays (modal, drawer, popover, menu,
   calendar) are scanned a second time in their open state.
2. **Real keyboard interaction** following the APG pattern for the widget
   (Tab reachability, Enter/Space activation, Escape to close, arrow keys in
   tabs/menu/radio/slider/grid/calendar, focus trap in modal/drawer, roving
   tabindex, focus restoration).

Shared helpers live in `tests/browser/helpers.ts` (`gotoComponent`, `runAxe`,
`expectNoSeriousViolations`, `expectFocusTrapped`, `expectTabReaches`, …).

Rules/nodes are never disabled globally. Where a demo page puts *demo-authored*
content inside a live region (inline-coloured table cells, bare `<input>`s in a
sketch form, a status `<span>` coloured with `theme.warning`), that node is
excluded with a reason comment in the spec. Where the **component itself**
fails, the test is left correct and marked `test.fixme` with the defect; those
are listed under *Open defects*.

## Running

```bash
# all three browsers (starts the demo server on :5173, reuses one if running)
npx playwright test -c playwright.browser.config.ts
# one browser
npx playwright test -c playwright.browser.config.ts --project=webkit
# report
npx playwright show-report playwright-report/browser
```

Suggested `package.json` scripts (not added automatically):

```json
"test:browser": "playwright test -c playwright.browser.config.ts",
"test:browser:report": "playwright show-report playwright-report/browser"
```

Notes:

- `demo/vite.config.ts` pins port **5174** and `open: true`; the config starts
  the server with `npm run dev:demo -- --port 5173 --strictPort` and
  `BROWSER=none` so it lands on 5173 headlessly. (The existing
  `playwright.config.ts` for visual tests expects 5173 but runs the bare
  `npm run dev:demo`, so it will not find its server unless the demo port is
  changed — pre-existing issue, not touched here.)
- Browsers: `npx playwright install` is the normal path. The repo's
  `@playwright/test` 1.59.1 wants chromium 1217 / firefox 1511 / webkit 2272;
  if other Playwright-built revisions are present you can point at them with
  `TKX_PW_CHROMIUM`, `TKX_PW_FIREFOX`, `TKX_PW_WEBKIT` (absolute executable
  paths). The results below were produced with chromium-headless-shell 1248
  (Chrome 156), firefox 1543 (Firefox 155) and webkit 2359 (Safari 26.4)
  driven by Playwright 1.59.1 via those variables.
- `tests/browser/**` is excluded from Vitest in `vitest.config.ts`.
- Test timeout is 60 s with one retry: the demo bundle is heavy and Firefox
  occasionally exceeds 30 s on first navigation. Genuine failures reproduce on
  retry.

## Results (run 2026-10-22, 62 tests per browser)

Legend: **pass** = passed, **fixme** = left correct but marked `test.fixme`
because the component really fails (see *Open defects*). No test was weakened
to pass.

| Component  | Tests | Chromium | Firefox | WebKit | fixme reason(s) |
|------------|:-----:|:--------:|:-------:|:------:|-----------------|
| Button     | 3 | 3 pass | 3 pass | 3 pass | — (D1 fixed; demo-authored inline brand buttons excluded) |
| Input      | 3 | 3 pass | 3 pass | 3 pass | — |
| Select     | 3 | 3 pass | 3 pass | 3 pass | — (D2 fixed) |
| Checkbox   | 4 | 4 pass | 4 pass | 4 pass | — (D3 fixed; also asserts `aria-checked="mixed"`) |
| Radio      | 3 | 3 pass | 3 pass | 3 pass | — (D4, D5 fixed) |
| Toggle     | 3 | 3 pass | 3 pass | 3 pass | — (TkxBadge now scanned, D13 fixed) |
| Textarea   | 3 | 3 pass | 3 pass | 3 pass | — |
| Modal      | 3 | 3 pass | 3 pass | 3 pass | — (D6 fixed) |
| Drawer     | 3 | 3 pass | 3 pass | 3 pass | — (D6 fixed) |
| Popover    | 4 | 4 pass | 4 pass | 4 pass | — (D6, D7 fixed) |
| Tooltip    | 2 | 2 pass | 2 pass | 2 pass | — |
| Tabs       | 3 | 3 pass | 3 pass | 3 pass | — |
| Accordion  | 2 | 2 pass | 2 pass | 2 pass | — |
| Menu       | 5 | 5 pass | 5 pass | 5 pass | — (D6, D8, D9 fixed) |
| Breadcrumb | 4 | 2 / 2 | 2 / 2 | 2 / 2 | D10 "…" not in listitem, D11 focus lost after expand |
| Pagination | 2 | 2 pass | 2 pass | 2 pass | — |
| Table      | 3 | 3 pass | 3 pass | 3 pass | — (TkxBadge now scanned, D13 fixed) |
| DataGrid   | 2 | 2 pass | 2 pass | 2 pass | — (D12 fixed) |
| DatePicker | 4 | 4 pass | 4 pass | 4 pass | — (D6, D14, D15 fixed) |
| Slider     | 3 | 3 pass | 3 pass | 3 pass | — (D16 fixed) |
| **Total**  | 62 | **62 pass / 0 fixme / 0 fail** | **62 / 0 / 0** | **62 / 0 / 0** | consolidated re-run 2026-10-22 after all 16 fixes: 186/186, no retries needed |

Keyboard behaviour that passed in all three browsers: Button Enter/Space;
Menu Enter/Space/ArrowDown open with first item active and ArrowUp with last
(D9); Popover and Menu triggers are a single Tab stop (D7/D8);
Select ArrowDown/Enter/Escape with `aria-activedescendant`; Checkbox Space (and
Enter ignored) + indeterminate parent; Radio arrows (Chromium/WebKit); Switch
Space/Enter; Modal and Drawer open → focus moved in → Tab/Shift+Tab trapped →
Escape → focus restored; Popover Enter/Space/Escape; Tooltip on focus with
`aria-describedby`, Escape and blur; Tabs Arrow/Home/End with wrap, roving
tabindex, disabled-skip, Tab into panel; Accordion Enter/Space; Menu
Arrow/Home/End wrap + Escape restore; Breadcrumb "…" expansion; Pagination
Enter/Space + `aria-current`; Table header Enter/Space `aria-sort`; DataGrid
single tab stop, arrows, Home/End, Tab out; DatePicker ArrowDown into calendar,
arrows by day/week, Escape restore, Enter select; Slider arrows/Home/End.

## Open defects (found by this suite)

Each is reproduced in Chromium, Firefox and WebKit unless stated.

| # | Component | Defect | Where |
|---|-----------|--------|-------|
| D1 | TkxButton / theme | **fixed** — `getAccessibleForeground` was fed `theme.css.warning` (`var(--tkx-warning, …)`), which the hex parser decodes as black, so every scheme got white; the button now resolves the accent via `theme.raw` (or the `var()` fallback literal) before the contrast check, giving dark text on the warning token. | `src/components/TkxButton.tsx` |
| D2 | TkxSelect | **fixed** — `aria-multiselectable` removed from the `role="combobox"` trigger (it stays on the listbox); placeholder painted in `textMuted` with no extra opacity. | `src/components/TkxSelect.tsx` |
| D3 | TkxCheckbox (API/doc) | **fixed** — `onChange` is now `(checked: boolean, event: ChangeEvent) => void` (boolean first, matching the documented contract; event second), so `onChange={setChecked}` can uncheck; `isIndeterminate` sets `aria-checked="mixed"` in addition to `input.indeterminate`. | `src/components/TkxCheckbox.tsx`; `demo/docs/CheckboxPage.tsx`; `docs-site/.../checkbox.mdx`; `src/headless/rhfBindings.tsx` (call site) |
| D4 | TkxRadioGroup | **fixed** — `name` is optional and falls back to a `useId()`-based group name, so radios form one native group (one Tab stop; Firefox arrow keys work). | `src/components/TkxRadio.tsx` |
| D5 | TkxRadio | **fixed** — the disabled `opacity: .5` moved from the wrapper to the control+label row, so a disabled radio's hint keeps the full `textMuted` colour (5.3:1 on the light theme). | `src/components/TkxRadio.tsx` |
| D6 | ThemeProvider / all portalled overlays | **fixed** — was: ThemeProvider inserted its `:root { --tkx-* }` `<style id="tkx-theme">` **before** every other stylesheet, so the Quantum-Dark `:root` defaults in `src/styles/global.css:11` won for anything outside the provider's wrapper `<div>` (everything `createPortal`'d into `<body>`): light-theme Modal/Drawer/Popover/Menu/DatePicker panels painted `#12121a` under light text (1.05:1). Fix: the provider now appends `#tkx-theme` as the **last** child of `<head>` (re-appended on every theme change) and emits the block as `:root:root` (0,2,0) so it also beats a plain `:root` sheet injected after mount; SSR/`themeInitScript` paths untouched. Regression tests in `tests/ThemeProvider.test.tsx` ("D6"). Menu shortcut hints additionally dropped the extra `opacity:.8` (3.69:1 → ~5.7:1 on white). | `src/themes/index.ts` (`useIsomorphicLayoutEffect`), `src/components/TkxMenu.tsx` (shortcut span) |
| D7 | TkxPopover | **fixed** — was: trigger wrapped in `<div role="button" tabindex="0">` around the caller's `<button>` (`nested-interactive`, two Tab stops). Fix: handlers + `aria-haspopup/expanded/controls` are `cloneElement`'d onto the trigger element itself; the wrapper is a role-less positioning `<div>`. Native `<button>`/`<a>` and components (TkxButton) stay as-is; non-interactive elements get `role="button"`/`tabIndex=0`/Enter-Space; only non-element children fall back to the wrapper being the control. | `src/components/TkxPopover.tsx` (trigger section) |
| D8 | TkxMenu | **fixed** — same approach as D7: the `<span role="button" tabindex="0">` wrapper is gone; ARIA + `onClick`/`onKeyDown` are cloned onto the trigger element (caller's own handlers still run first; `disabled` is forwarded to native triggers). | `src/components/TkxMenu.tsx` (`TkxMenu` trigger) |
| D9 | TkxMenu | **fixed** — was: Enter/Space/ArrowDown opened with **no active item**. Fix: `openMenu('first' \| 'last')` passes `initialActive` to `MenuPanel`, which seeds `activeIdx` with the first (Enter/Space/ArrowDown) or last (ArrowUp, newly handled) non-disabled item so `aria-activedescendant` is set on open; pointer opens still start with no active item. | `src/components/TkxMenu.tsx` (`handleTriggerKeyDown`, `openMenu`, `MenuPanel.initialActive`) |
| D10 | TkxBreadcrumb | **Fixed.** The "…" button now renders in a plain `<li>` (no `role="presentation"`), so every child of `<ol role="list">` is a listitem (separators stay `role="presentation" aria-hidden`). | `src/components/TkxBreadcrumb.tsx` |
| D11 | TkxBreadcrumb | **Fixed.** Expanding "…" records the first hidden item's index and a post-render effect focuses that item's link/button (`data-tkx-breadcrumb-index`), so focus never drops to `<body>`. | `src/components/TkxBreadcrumb.tsx` |
| D12 | TkxDataGrid | **Fixed.** `role="grid"`/`"treegrid"`, `aria-label`, `aria-rowcount`/`aria-colcount`, the id and the keyboard/focus handlers moved from the wrapper `<div>` onto the `<table>` itself; native `thead`/`tbody`/`tr`/`th`/`td` plus the explicit `row`/`columnheader`/`gridcell`/`rowheader` roles and all `aria-level`/`aria-expanded`/`aria-controls` wiring are unchanged. Toolbar and pagination now sit outside the grid. | `src/components/TkxDataGrid.tsx` |
| D13 | TkxBadge (not in the 20, surfaced via Toggle/Table demos) | **fixed** — same root cause as D1 but the badge is RSC-safe (no theme context), so the foreground is now computed by CSS from the resolved token (`rgb(from var(--tkx-…) …)` with the WCAG luminance threshold): dark on `border`/`warning`, white on dark tokens. Toggle/Table scans no longer exclude it. | `src/components/TkxBadge.tsx` |
| D14 | TkxDatePicker | **Fixed.** The input carries `role="combobox"`, `aria-haspopup="dialog"`, `aria-expanded` and `aria-controls` → dialog id (APG combobox + dialog). | `src/components/TkxDatePicker.tsx` |
| D15 | TkxDatePicker | **Fixed.** Calendar is a `<table role="grid" aria-labelledby={month heading}>` with `<th role="columnheader" abbr={long weekday}>`, one `<tr role="row">` per week and `<td role="gridcell" aria-selected aria-current="date">` wrapping each day button (`aria-pressed` removed). Roving tabindex + Arrow keys kept; Home/End (week start/end) and PageUp/PageDown (±month, Shift ±year) added. The picker no longer opens on plain focus — only on click, Enter, ArrowDown or the calendar button. | `src/components/TkxDatePicker.tsx` |
| D16 | TkxSlider (+ demo) | **Fixed.** Single and range values are clamped into `[min, max]` before rendering, so `aria-valuenow`, the fill and the thumb position never exceed the bounds; the "Custom Min / Max / Step" demo now starts at 22 (16..32). | `src/components/TkxSlider.tsx`; `demo/docs/SliderPage.tsx` |

Demo-authored (not component) issues excluded in specs with reasons:
Button "Custom CSS Override" inline backgrounds; Tooltip "Rich Tooltips" inline
delta colours; Tabs "Settings Page Pattern" and Drawer footer bare `<input>`s
without labels; Pagination record list "Pending" coloured with `theme.warning`
(that colour is also D1's token); Table "Sticky Header" demo scroll wrapper
without a focusable element.
