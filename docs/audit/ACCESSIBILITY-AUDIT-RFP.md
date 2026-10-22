# Third-party accessibility audit — RFP

**Status:** ready to send
**Budget envelope:** $12k–$30k
**Target window:** 4 weeks from signed SOW
**Deliverable:** public conformance report (VPAT / ACR, WCAG 2.1 AA, with AAA
findings noted) plus an internal defect list

This is the single artifact that turns "internal APG audit, all 35 findings
fixed" into a claim a procurement engineer can accept. The pen-test RFP is in
`roadmap/06-pentest-rfp.md`; this one covers accessibility only, because the
vendors differ.

## What we are asking a vendor to test

The 20 components in the real-browser matrix (`docs/BROWSER-MATRIX.md`),
rendered from the public demo at https://www.tekivex.com/ui/playground/:

Button, Input, Select, Checkbox, Radio, Toggle, Textarea, Modal, Drawer,
Popover, Tooltip, Tabs, Accordion, Menu, Breadcrumb, Pagination, Table,
DataGrid, DatePicker, Slider.

Plus three composed flows from the templates: a login form, a settings panel
with tabs and a modal, and a data table with filters and pagination.

## Required methodology

1. **WCAG 2.1 AA conformance** against every success criterion applicable to
   a component (not a page). Report per component, not per site.
2. **Assistive technology matrix**, each component tested on:
   - NVDA + Firefox (Windows)
   - JAWS + Chrome (Windows)
   - VoiceOver + Safari (macOS)
   - VoiceOver + Safari (iOS)
   - TalkBack + Chrome (Android)
3. **WAI-ARIA APG pattern conformance** for every widget with an APG pattern
   (combobox, dialog, menu, tabs, treegrid, slider, disclosure…): keyboard
   model, roles, states, focus management.
4. **Automated baseline** with axe-core for parity with our own CI gate; we
   expect it to find nothing, and we want that stated.
5. **Contrast** on both built-in themes (quantumDark, auroraLight) at AA and
   AAA thresholds.

## Evidence we need in the final report

1. One-page executive summary we can publish verbatim.
2. Per-component result table: criterion × AT combination × pass/fail.
3. Every defect with: WCAG SC, severity, AT and browser, reproduction steps,
   and the component source file where the vendor can point to it.
4. A signed ACR / VPAT 2.4 (WCAG edition) on vendor letterhead.
5. Permission to publish the report in this repository under `docs/audit/`.

## What we provide

- Repository access; every component has a test file the auditor can read.
- `docs/a11y-screen-reader-matrix.md`: our own 470-cell internal matrix, so
  the vendor starts from our claims and tries to break them.
- `docs/A11Y-AUDIT.md`: the internal APG audit with the 35 findings and fixes,
  so the vendor can verify the fixes rather than rediscover the issues.
- A maintainer on call for the engagement window with a sub-24-hour response
  cadence.

## Vendor shortlist (alphabetical)

| Vendor | Why | Est. range |
|---|---|---|
| **Deque Systems** | axe-core authors; their report is the one most procurement teams already recognise | $20–30k |
| **Level Access** | Deep VPAT practice, strong public-sector acceptance | $18–28k |
| **TPGi (Vispero)** | JAWS vendor; component-library audits are a core offering | $15–25k |
| **WebAIM** | Non-profit, lower cost, highly credible written reports | $12–18k |

## Evaluation rubric

- Methodology covers all five AT combinations (30%)
- Prior published component-library audits (25%)
- Price (20%)
- Willingness to let us publish the full report (15%)
- Timeline confidence (10%)

## After the report

1. Publish the ACR at `docs/audit/` and link it from the README trust table
   and the landing page `VerifyThis` section.
2. Replace every "internal audit" qualifier in README, docs-site
   `accessibility.mdx` and `comparison.mdx` with the vendor's finding.
3. File each defect as an issue labelled `a11y-audit`; fix with regression
   tests; publish the closure list.

## Outreach template

> Subject: Component-library accessibility audit, 20 components, 4 weeks
>
> We maintain tekivex-ui, an MIT React component library (116 components,
> internal WAI-ARIA APG audit published with all findings fixed). We want a
> third-party WCAG 2.1 AA conformance report with a five-AT matrix on 20
> components and three composed flows, published in our repo. Scope and
> methodology are in docs/audit/ACCESSIBILITY-AUDIT-RFP.md. Could you send a
> fixed-price proposal and your earliest start date?
