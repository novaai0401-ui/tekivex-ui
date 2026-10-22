import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { createPortal } from 'react-dom';
import { ThemeProvider, useTheme, quantumDark, auroraLight, usePrefersColorScheme } from '../src/themes';

function ShowText() {
  const t = useTheme();
  return <div data-testid="bg">{t.bg}</div>;
}

function ShowScheme() {
  const s = usePrefersColorScheme();
  return <div data-testid="scheme">{s}</div>;
}

describe('ThemeProvider v2.7 — auto / explicit modes', () => {
  let originalMatchMedia: typeof window.matchMedia;
  beforeEach(() => {
    originalMatchMedia = window.matchMedia;
  });
  afterEach(() => {
    window.matchMedia = originalMatchMedia;
    document.getElementById('tkx-theme')?.remove();
    document.documentElement.removeAttribute('data-tkx-scheme');
  });

  function mockPrefersDark(isDark: boolean) {
    window.matchMedia = vi.fn().mockImplementation((query: string) => ({
      matches: query.includes('dark') ? isDark : !isDark,
      media: query,
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
      addListener: vi.fn(),
      removeListener: vi.fn(),
      onchange: null,
      dispatchEvent: vi.fn(),
    })) as any;
  }

  it('honours explicit theme prop (backward compat)', () => {
    render(
      <ThemeProvider theme={auroraLight}>
        <ShowText />
      </ThemeProvider>,
    );
    expect(screen.getByTestId('bg').textContent).toBe(auroraLight.bg);
  });

  it('mode="dark" pins to dark theme regardless of system', () => {
    mockPrefersDark(false);
    render(
      <ThemeProvider mode="dark">
        <ShowText />
      </ThemeProvider>,
    );
    expect(screen.getByTestId('bg').textContent).toBe(quantumDark.bg);
  });

  it('mode="light" pins to light theme regardless of system', () => {
    mockPrefersDark(true);
    render(
      <ThemeProvider mode="light">
        <ShowText />
      </ThemeProvider>,
    );
    expect(screen.getByTestId('bg').textContent).toBe(auroraLight.bg);
  });

  it('mode="auto" follows prefers-color-scheme: dark', () => {
    mockPrefersDark(true);
    render(
      <ThemeProvider mode="auto">
        <ShowText />
      </ThemeProvider>,
    );
    expect(screen.getByTestId('bg').textContent).toBe(quantumDark.bg);
  });

  it('mode="auto" follows prefers-color-scheme: light', () => {
    mockPrefersDark(false);
    render(
      <ThemeProvider mode="auto">
        <ShowText />
      </ThemeProvider>,
    );
    expect(screen.getByTestId('bg').textContent).toBe(auroraLight.bg);
  });

  it('usePrefersColorScheme reflects system', () => {
    mockPrefersDark(true);
    render(<ShowScheme />);
    expect(screen.getByTestId('scheme').textContent).toBe('dark');
  });
});

// ── D6: portalled content must see the provider's variables ──────────────────
// ThemeProvider used to insert <style id="tkx-theme"> as the FIRST style in
// <head>, so any later `:root { --tkx-* }` sheet (global.css Quantum-Dark
// defaults, or anything injected after mount) won the cascade for every
// element outside the provider's wrapper <div> — i.e. everything portalled to
// <body>. Light-theme overlays painted dark (contrast ~1.05:1).
describe('ThemeProvider — :root variables win for portalled content (D6)', () => {
  function Portalled() {
    return createPortal(<div data-testid="portalled">x</div>, document.body);
  }
  const injected: HTMLStyleElement[] = [];
  afterEach(() => {
    for (const s of injected) s.remove();
    injected.length = 0;
    document.getElementById('tkx-theme')?.remove();
  });
  function injectRootSheet(css: string) {
    const s = document.createElement('style');
    s.textContent = css;
    document.head.appendChild(s);
    injected.push(s);
    return s;
  }

  it('beats a `:root` sheet that was already in <head> before mount', () => {
    injectRootSheet(':root { --tkx-bg: #12121a; }');
    render(
      <ThemeProvider theme={auroraLight}>
        <Portalled />
      </ThemeProvider>,
    );
    const el = screen.getByTestId('portalled');
    expect(getComputedStyle(el).getPropertyValue('--tkx-bg').trim()).toBe(auroraLight.bg);
    expect(document.head.lastElementChild?.id).toBe('tkx-theme');
  });

  it('beats a `:root` sheet inserted AFTER mount (ordering regression)', () => {
    render(
      <ThemeProvider theme={auroraLight}>
        <Portalled />
      </ThemeProvider>,
    );
    injectRootSheet(':root { --tkx-bg: #12121a; }');
    const el = screen.getByTestId('portalled');
    expect(getComputedStyle(el).getPropertyValue('--tkx-bg').trim()).toBe(auroraLight.bg);
  });

  it('re-asserts itself as the last <head> sheet when the theme changes', () => {
    const { rerender } = render(
      <ThemeProvider theme={auroraLight}>
        <Portalled />
      </ThemeProvider>,
    );
    injectRootSheet(':root { --tkx-bg: #12121a; }');
    rerender(
      <ThemeProvider theme={quantumDark}>
        <Portalled />
      </ThemeProvider>,
    );
    expect(document.head.lastElementChild?.id).toBe('tkx-theme');
    const el = screen.getByTestId('portalled');
    expect(getComputedStyle(el).getPropertyValue('--tkx-bg').trim()).toBe(quantumDark.bg);
  });
});
