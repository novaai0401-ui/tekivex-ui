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
| Button     | 3 | 2 pass / 1 fixme | 2 / 1 | 2 / 1 | D1 warning-scheme contrast |
| Input      | 3 | 3 pass | 3 pass | 3 pass | — |
| Select     | 3 | 2 / 1 | 2 / 1 | 2 / 1 | D2 aria-multiselectable on combobox + placeholder contrast |
| Checkbox   | 4 | 3 / 1 | 3 / 1 | 3 / 1 | D3 onChange contract — cannot uncheck |
| Radio      | 3 | 1 / 2 | 0 / 3 | 1 / 2 | D4 name="" (Tab stops; Firefox also loses arrows), D5 hint contrast |
| Toggle     | 3 | 3 pass | 3 pass | 3 pass | — (TkxBadge excluded, see D13) |
| Textarea   | 3 | 3 pass | 3 pass | 3 pass | — |
| Modal      | 3 | 2 / 1 | 2 / 1 | 2 / 1 | D6 portal theme (open-state axe) |
| Drawer     | 3 | 2 / 1 | 2 / 1 | 2 / 1 | D6 |
| Popover    | 4 | 1 / 3 | 1 / 3 | 1 / 3 | D7 nested-interactive trigger (×2), D6 |
| Tooltip    | 2 | 2 pass | 2 pass | 2 pass | — |
| Tabs       | 3 | 3 pass | 3 pass | 3 pass | — |
| Accordion  | 2 | 2 pass | 2 pass | 2 pass | — |
| Menu       | 5 | 1 / 4 | 1 / 4 | 1 / 4 | D8 nested-interactive trigger (×2), D9 no active item on open, D6 |
| Breadcrumb | 4 | 2 / 2 | 2 / 2 | 2 / 2 | D10 "…" not in listitem, D11 focus lost after expand |
| Pagination | 2 | 2 pass | 2 pass | 2 pass | — |
| Table      | 3 | 3 pass | 3 pass | 3 pass | — (TkxBadge excluded, see D13) |
| DataGrid   | 2 | 1 / 1 | 1 / 1 | 1 / 1 | D12 `<table>` child of role=grid |
| DatePicker | 4 | 1 / 3 | 1 / 3 | 1 / 3 | D14 aria-expanded on textbox, D15 no grid roles, D6 |
| Slider     | 3 | 2 / 1 | 2 / 1 | 2 / 1 | D16 aria-valuenow not clamped |
| **Total**  | 62 | **41 pass / 21 fixme / 0 fail** | **40 / 22 / 0** | **41 / 21 / 0** | |

Keyboard behaviour that passed in all three browsers: Button Enter/Space;
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
| D1 | TkxButton / theme | `colorScheme="warning"` paints white text on `--tkx-warning` (#d4a017): **2.37:1** (serious). | `src/components/TkxButton.tsx` (solid variant text colour); warning token default |
| D2 | TkxSelect | `aria-multiselectable` set on the `<button role="combobox">` trigger (**critical** `aria-allowed-attr`); placeholder rendered at `opacity:.6` → #a6a3a0 on #fff **2.5:1**. | `src/components/TkxSelect.tsx` ~L1037 (trigger props); placeholder `<span>` |
| D3 | TkxCheckbox (API/doc) | Docs + demo declare `onChange: (checked: boolean) => void` and wire `onChange={setChecked}`, but the component forwards the native `ChangeEvent`; controlled state becomes the truthy event so **a checked box can never be unchecked** (keyboard or mouse). Docs also claim `aria-checked="mixed"` is applied for indeterminate; it is not (only `input.indeterminate`). | `src/components/TkxCheckbox.tsx:137`; `demo/docs/CheckboxPage.tsx:16,126,281,323` |
| D4 | TkxRadioGroup | Radios render `name=""` (`radioName = nameProp ?? group?.name ?? ''`); group never generates a name. Tab stops on every radio (APG: one stop per group) in all browsers; in **Firefox** arrow keys also do nothing. | `src/components/TkxRadio.tsx:83` |
| D5 | TkxRadio | `hint` text at 12px under opacity → #b5b2b0 on #fff **2.1:1**. | `src/components/TkxRadio.tsx` (hint span) |
| D6 | ThemeProvider / all portalled overlays | ThemeProvider inserts its `:root { --tkx-* }` `<style id="tkx-theme">` **before** every other stylesheet, so the Quantum-Dark `:root` defaults in `src/styles/global.css:11` win for anything outside the provider's wrapper `<div>` — i.e. everything rendered with `createPortal` into `<body>`. In the light theme the Modal, Drawer, Popover, Menu and DatePicker panels paint `#12121a` under light-theme text: modal body text **1.05:1**, popover title 1.05:1, drawer labels 1.05:1, menu shortcut hints 3.89:1, calendar outside-month days 1.12:1. Visually confirmed (dark modal with invisible body text). | `src/themes/index.ts:492-500`; `src/styles/global.css:11`; `TkxModal.tsx:61`, `TkxPopover.tsx`, `TkxDrawer.tsx`, `TkxMenu.tsx`, `TkxDatePicker.tsx` |
| D7 | TkxPopover | Trigger is `<div role="button" tabindex="0">` wrapping the caller's `<button>`: axe `nested-interactive` (serious) and **two Tab stops** for one control. | `src/components/TkxPopover.tsx` ~L290 |
| D8 | TkxMenu | Same as D7 with `<span role="button" tabindex="0" aria-haspopup="menu">`. | `src/components/TkxMenu.tsx` ~L1040 |
| D9 | TkxMenu | Enter/Space/ArrowDown open the menu with **no active item** (`aria-activedescendant` unset until a further ArrowDown). APG: first item must become active on open. | `src/components/TkxMenu.tsx` ~L1032 (`handleTriggerKeyDown` / `openMenu`) |
| D10 | TkxBreadcrumb | With `maxItems`, the "…" `<button>` sits in an `<li role="presentation">`, leaving `<ol role="list">` with a non-listitem child: **critical** `aria-required-children`. | `src/components/TkxBreadcrumb.tsx` (collapsed `<li role="presentation">`) |
| D11 | TkxBreadcrumb | Activating "…" removes the button without moving focus → `document.activeElement` becomes `<body>` (WCAG 2.4.3). | `src/components/TkxBreadcrumb.tsx` ~L122 (`setExpanded`) |
| D12 | TkxDataGrid | `role="grid"` is on the wrapper `<div>` with a native `<table>` inside; `<table>` is not a permitted child of `grid`: **critical** `aria-required-children` on every grid. | `src/components/TkxDataGrid.tsx` ~L2006 |
| D13 | TkxBadge (not in the 20, surfaced via Toggle/Table demos) | `variant="default"` paints white on `--tkx-border` (#ddd8cc) **1.42:1**; `variant="warning"` white on #d4a017 **2.37:1**. Excluded from the Toggle/Table scans with a comment. | `src/components/TkxBadge.tsx` |
| D14 | TkxDatePicker | Text `<input>` carries `aria-expanded`/`aria-haspopup` without `role="combobox"`: **critical** `aria-allowed-attr` on every instance. | `src/components/TkxDatePicker.tsx` ~L1750 |
| D15 | TkxDatePicker | Calendar is `<div>`s + day `<button>`s with no `grid`/`row`/`gridcell`/`columnheader` roles (APG date-picker dialog requires a grid); day buttons use `aria-pressed` instead of `aria-selected`. Also opens on plain focus. | `src/components/TkxDatePicker.tsx` ~L1480-1520 |
| D16 | TkxSlider (+ demo) | `aria-valuenow` is published unclamped; the "Custom Min / Max / Step" demo passes value 50 for min 16 / max 32 and the slider announces 50. | `src/components/TkxSlider.tsx` (`aria-valuenow={value}`); `demo/docs/SliderPage.tsx:35,165-166` |

Demo-authored (not component) issues excluded in specs with reasons:
Button "Custom CSS Override" inline backgrounds; Tooltip "Rich Tooltips" inline
delta colours; Tabs "Settings Page Pattern" and Drawer footer bare `<input>`s
without labels; Pagination record list "Pending" coloured with `theme.warning`
(that colour is also D1's token); Table "Sticky Header" demo scroll wrapper
without a focusable element.
