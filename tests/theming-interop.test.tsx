import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { render, screen, cleanup } from '@testing-library/react';
import {
  ThemeProvider,
  useTheme,
  createTheme,
  themeFromCSSVars,
  readThemeFromDOM,
  auroraLight,
  quantumDark,
  isCSSVarReference,
  THEME_TOKEN_KEYS,
  __resetThemeWarnings,
} from '../src/themes';
import { tekivexPreset, tekivexCssVariables, TKX_COLOR_TOKENS } from '../src/tailwind';
import { radii, shadows, zIndex } from '../src/themes';
import { TkxButton } from '../src/components/TkxButton';

afterEach(() => cleanup());

describe('themeFromCSSVars', () => {
  it('maps named tokens to var() with the base theme as fallback and leaves the rest alone', () => {
    const t = themeFromCSSVars({ bg: '--my-bg', primary: 'brand-500' });
    expect(t.bg).toBe(`var(--my-bg, ${auroraLight.bg})`);
    expect(t.primary).toBe(`var(--brand-500, ${auroraLight.primary})`);
    // Unmapped tokens fall back to the base theme literal.
    expect(t.surface).toBe(auroraLight.surface);
    expect(t.text).toBe(auroraLight.text);
    expect(Object.keys(t).sort()).toEqual([...THEME_TOKEN_KEYS].sort());
  });

  it('accepts a different base theme (options object or shorthand) and no-fallback mode', () => {
    expect(themeFromCSSVars({ bg: '--x' }, { base: quantumDark }).bg).toBe(`var(--x, ${quantumDark.bg})`);
    expect(themeFromCSSVars({ bg: '--x' }, quantumDark).surface).toBe(quantumDark.surface);
    expect(themeFromCSSVars({ bg: '--x' }, { withFallback: false }).bg).toBe('var(--x)');
  });

  it('passes through pre-formed var() references and rejects garbage', () => {
    expect(themeFromCSSVars({ bg: 'var(--a, red)' }).bg).toBe('var(--a, red)');
    expect(() => themeFromCSSVars({ bg: 'not a var!' })).toThrow(/not a valid custom property/);
  });

  it('createTheme accepts var() tokens and skips contrast checks without throwing', () => {
    __resetThemeWarnings();
    vi.stubEnv('NODE_ENV', 'development');
    const info = vi.spyOn(console, 'info').mockImplementation(() => {});
    const t = createTheme(themeFromCSSVars({ bg: '--my-bg', text: '--my-fg' }));
    createTheme(t); // second call must not log again
    expect(isCSSVarReference(t.bg)).toBe(true);
    expect(info).toHaveBeenCalledTimes(1);
    expect(info.mock.calls[0][0]).toMatch(/contrast checks are skipped/);
    info.mockRestore();
    vi.unstubAllEnvs();
    expect(() => createTheme(auroraLight, { bg: 'blue' })).toThrow(/Invalid color/);
  });
});

describe('ThemeProvider with var() tokens', () => {
  beforeEach(() => __resetThemeWarnings());

  function Probe() {
    const t = useTheme();
    return <div data-testid="probe">{t.css.bg}|{t.raw.bg}</div>;
  }

  it('renders, emits the var() reference on the wrapper and in the :root style, and components mount', () => {
    const theme = themeFromCSSVars({ bg: '--my-bg', primary: '--brand-500' });
    const { container } = render(
      <ThemeProvider theme={theme}>
        <Probe />
        <TkxButton colorScheme="primary">ok</TkxButton>
      </ThemeProvider>,
    );
    const wrapper = container.firstElementChild as HTMLElement;
    expect(wrapper.style.getPropertyValue('--tkx-bg')).toBe(`var(--my-bg, ${auroraLight.bg})`);
    expect(wrapper.style.getPropertyValue('--tkx-surface')).toBe(auroraLight.surface);
    expect(screen.getByTestId('probe').textContent).toBe(
      `var(--tkx-bg, var(--my-bg, ${auroraLight.bg}))|var(--my-bg, ${auroraLight.bg})`,
    );
    const styleEl = document.getElementById('tkx-theme');
    expect(styleEl?.textContent).toContain(`--tkx-primary: var(--brand-500, ${auroraLight.primary});`);
    expect(document.documentElement.getAttribute('data-tkx-scheme')).toBe('custom');
    expect(screen.getByRole('button', { name: 'ok' })).toBeTruthy();
  });

  it('readThemeFromDOM returns the active tokens in the browser', () => {
    document.documentElement.style.setProperty('--tkx-bg', '#123456');
    document.documentElement.style.setProperty('--tkx-primary', 'var(--brand, #ff0000)');
    const read = readThemeFromDOM();
    expect(read).not.toBeNull();
    expect(read!.bg).toBe('#123456');
    // jsdom may or may not resolve nested var(); either the declared ref or a colour is acceptable.
    expect(read!.primary.length).toBeGreaterThan(0);
    document.documentElement.style.removeProperty('--tkx-bg');
    document.documentElement.style.removeProperty('--tkx-primary');
  });

  it('readThemeFromDOM returns null when nothing is defined', () => {
    // Earlier renders leave the :root <style id="tkx-theme"> behind; drop it.
    document.getElementById('tkx-theme')?.remove();
    const el = document.createElement('div');
    document.body.appendChild(el);
    expect(readThemeFromDOM(el)).toBeNull();
    el.remove();
  });
});

describe('tekivexPreset', () => {
  it('has the tailwind preset shape and maps every colour token to var(--tkx-*)', () => {
    const { colors, borderRadius, boxShadow, zIndex: z } = tekivexPreset.theme.extend;
    expect(TKX_COLOR_TOKENS).toEqual(THEME_TOKEN_KEYS);
    expect(colors['tkx-bg']).toBe('var(--tkx-bg)');
    expect(colors['tkx-surface-alt']).toBe('var(--tkx-surfaceAlt)');
    expect(colors['tkx-text-muted']).toBe('var(--tkx-textMuted)');
    expect(Object.keys(colors)).toHaveLength(12);
    expect(borderRadius['tkx-lg']).toBe(radii.lg);
    expect(boxShadow['tkx-md']).toBe(shadows.md);
    expect(z['tkx-modal']).toBe(String(zIndex.modal));
    expect(Object.keys(borderRadius)).toHaveLength(Object.keys(radii).length);
    // No runtime dependency: plain serialisable object.
    expect(JSON.parse(JSON.stringify(tekivexPreset))).toEqual(tekivexPreset);
  });
});

describe('tekivexCssVariables', () => {
  it('emits a :root block with every token and the scales', () => {
    const css = tekivexCssVariables(quantumDark);
    expect(css.startsWith(':root {\n')).toBe(true);
    expect(css.trimEnd().endsWith('}')).toBe(true);
    for (const key of THEME_TOKEN_KEYS) {
      expect(css).toContain(`  --tkx-${key}: ${quantumDark[key]};`);
    }
    expect(css).toContain(`--tkx-radius-lg: ${radii.lg};`);
    expect(css).toContain(`--tkx-shadow-md: ${shadows.md};`);
    expect(css).toContain(`--tkx-z-modal: ${zIndex.modal};`);
  });

  it('honours selector and includeScales, and serialises var() themes verbatim', () => {
    const css = tekivexCssVariables(themeFromCSSVars({ bg: '--my-bg' }), {
      selector: 'html[data-theme="dark"]',
      includeScales: false,
    });
    expect(css.startsWith('html[data-theme="dark"] {')).toBe(true);
    expect(css).toContain(`--tkx-bg: var(--my-bg, ${auroraLight.bg});`);
    expect(css).not.toContain('--tkx-radius');
    expect(css.split('\n').filter((l) => l.includes('--tkx-'))).toHaveLength(12);
  });
});
