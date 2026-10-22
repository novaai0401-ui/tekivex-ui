/**
 * tekivex-ui/tailwind — a Tailwind preset that maps utilities onto the same
 * `--tkx-*` custom properties the components paint from.
 *
 * `bg-tkx-surface`, `text-tkx-primary`, `rounded-tkx-lg`, `shadow-tkx-md`,
 * `z-tkx-modal` … all resolve through CSS variables, so a `ThemeProvider`
 * (or your own stylesheet — see `tekivexCssVariables`) is the single source
 * of truth for both your Tailwind markup and TekiVex components.
 *
 * Pure data: no runtime import of tailwindcss. Works with Tailwind v3
 * (`presets: [tekivexPreset]`) and v4 (`@config` pointing at a JS config that
 * uses the preset, or by pasting `tekivexCssVariables()` into `@theme`).
 */
import type { ThemeTokens } from '../themes/index';
import { radii, shadows, zIndex } from '../themes/index';

/** The twelve colour tokens, in the order `ThemeProvider` emits them. */
export const TKX_COLOR_TOKENS = [
  'bg',
  'surface',
  'surfaceAlt',
  'border',
  'text',
  'textMuted',
  'primary',
  'secondary',
  'danger',
  'warning',
  'success',
  'info',
] as const satisfies readonly (keyof ThemeTokens)[];

/** `surfaceAlt` → `surface-alt` so class names read like Tailwind's own. */
const kebab = (s: string): string => s.replace(/[A-Z]/g, (m) => `-${m.toLowerCase()}`);

function buildColors(): Record<string, string> {
  const colors: Record<string, string> = {};
  for (const token of TKX_COLOR_TOKENS) {
    colors[`tkx-${kebab(token)}`] = `var(--tkx-${token})`;
  }
  return colors;
}

function prefixKeys<T extends Record<string, string | number>>(
  obj: T,
  prefix: string,
): Record<string, string> {
  const out: Record<string, string> = {};
  for (const [k, v] of Object.entries(obj)) out[`${prefix}-${k}`] = String(v);
  return out;
}

export interface TekivexPreset {
  theme: {
    extend: {
      colors: Record<string, string>;
      borderRadius: Record<string, string>;
      boxShadow: Record<string, string>;
      zIndex: Record<string, string>;
    };
  };
}

/**
 * Drop-in Tailwind preset.
 *
 * ```js
 * // tailwind.config.js
 * import { tekivexPreset } from 'tekivex-ui/tailwind';
 * export default { presets: [tekivexPreset], content: ['./src/**\/*.tsx'] };
 * ```
 *
 * Then: `<div class="bg-tkx-surface text-tkx-text border-tkx-border rounded-tkx-lg shadow-tkx-md">`.
 */
export const tekivexPreset: TekivexPreset = {
  theme: {
    extend: {
      colors: buildColors(),
      borderRadius: prefixKeys(radii, 'tkx'),
      boxShadow: prefixKeys(shadows, 'tkx'),
      zIndex: prefixKeys(zIndex, 'tkx'),
    },
  },
};

export interface TekivexCssVariablesOptions {
  /** Selector to scope the declarations to. Default `:root`. */
  selector?: string;
  /** Also emit `--tkx-radius-*`, `--tkx-shadow-*`, `--tkx-z-*`. Default `true`. */
  includeScales?: boolean;
  /** Indentation inside the block. Default two spaces. */
  indent?: string;
}

/**
 * Render a theme as a CSS block you can paste into a global stylesheet.
 *
 * ```ts
 * tekivexCssVariables(quantumDark)
 * // :root {
 * //   --tkx-bg: #0a0a0f;
 * //   --tkx-surface: #12121a;
 * //   …
 * // }
 * ```
 *
 * Pair with a scoped selector for dark mode:
 * `tekivexCssVariables(quantumDark, { selector: 'html[data-theme="dark"]' })`.
 */
export function tekivexCssVariables(
  theme: ThemeTokens,
  options: TekivexCssVariablesOptions = {},
): string {
  const { selector = ':root', includeScales = true, indent = '  ' } = options;
  const lines: string[] = [];
  for (const token of TKX_COLOR_TOKENS) {
    lines.push(`${indent}--tkx-${token}: ${theme[token]};`);
  }
  if (includeScales) {
    for (const [k, v] of Object.entries(radii)) lines.push(`${indent}--tkx-radius-${k}: ${v};`);
    for (const [k, v] of Object.entries(shadows)) lines.push(`${indent}--tkx-shadow-${k}: ${v};`);
    for (const [k, v] of Object.entries(zIndex)) lines.push(`${indent}--tkx-z-${k}: ${v};`);
  }
  return `${selector} {\n${lines.join('\n')}\n}\n`;
}

export type { ThemeTokens };
