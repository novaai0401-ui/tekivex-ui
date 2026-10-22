# tekivex-figma-kit

Machine-readable design-system exports for the tekivex-ui Figma library. Generated from the real source — `src/themes/index.ts` and `src/components/`. No hand-maintained duplication.

```bash
npm run build        # regenerates both dist/ outputs
```

## Outputs

### `dist/tokens.figma.json`
W3C Design Tokens Community Group draft format — import via the [Figma Tokens / Tokens Studio](https://tokens.studio) plugin.

- `color.quantumDark` / `color.auroraLight` — 12 semantic roles per theme (bg, surface, border, text, primary, danger, …)
- `spacing.*` — 10-step scale (4px base)
- `radius.*` — sm / md / lg / xl / full
- `fontSize.*` — xs → 4xl
- `fontWeight.*` — regular → black
- `shadow.*` — sm / md / lg / xl

### `dist/variants.json`
Per-component prop catalog. Every `export interface TkxFooProps` is parsed; union-literal props and booleans become variant axes. Feed this into the Figma plugin that stamps one frame per combination.

```json
{
  "components": {
    "TkxButton": {
      "props": [
        { "name": "variant", "values": ["primary", "secondary", "ghost", "danger"] },
        { "name": "size", "values": ["sm", "md", "lg"] },
        { "name": "disabled", "values": [true, false] }
      ],
      "variantCount": 24
    }
  }
}
```

## Why this is safer than a hand-built kit

Every designer-facing token collapses to one file in this repo. When `src/themes/index.ts` changes, regenerate; Figma never drifts from runtime.

## Publishing runbook — Figma Community file

The spec is in `roadmap/01-figma-kit-spec.md`; the exports above are the
machine-readable half. Publishing the human-facing kit needs a Figma account
with Community publishing rights and takes about one working day:

1. `npm run figma:build` — regenerates `dist/tokens.figma.json` and
   `dist/variants.json` from source (57 tokens, 108 components).
2. In a new Figma file, import `tokens.figma.json` with the Tokens Studio
   plugin; publish the collection as Variables with `quantumDark` and
   `auroraLight` modes.
3. Build the 20 components listed in the spec first, one frame per
   union-literal value from `variants.json` (Button alone is 24 frames).
   Name each variant exactly as the TypeScript prop and value so engineers
   can read the frame and write the JSX.
4. Add the four pattern pages (login, settings panel, dashboard row, filtered
   data table) and a Changelog page mirroring `CHANGELOG.md`.
5. Publish to Community under the `tekivex-ui` name with the npm version in
   the title; link the Community URL from `README.md` and
   `docs-site/src/content/docs/ecosystem.mdx`.

Until step 5 is done, the README must not claim a Figma kit exists; it may
only link these generated exports.

## License

MIT
