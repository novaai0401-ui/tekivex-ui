import { expect, type Locator, type Page } from '@playwright/test';
import path from 'node:path';

// ─────────────────────────────────────────────────────────────────────────────
// Shared helpers for the real-browser a11y + keyboard suite (tests/browser).
// ─────────────────────────────────────────────────────────────────────────────

const AXE_PATH = path.resolve(process.cwd(), 'node_modules/axe-core/axe.min.js');

/** WCAG 2.1 A + AA tag set (axe-core tag names). */
export const WCAG21_AA_TAGS = ['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa'];

export interface AxeViolation {
  id: string;
  impact: string | null;
  help: string;
  helpUrl: string;
  nodes: { target: string[]; html: string; failureSummary: string }[];
}

/**
 * Every demo page wraps each rendered example in a region labelled
 * "Live demo: <title>". Scanning those regions (instead of <main>) keeps the
 * demo chrome (badges, TOC, code toggles) out of the component verdict.
 */
export const LIVE_DEMO = '[aria-label^="Live demo"]';

export interface AxeOptions {
  /** CSS selector(s) to scan. Defaults to the demo page's live-demo regions. */
  include?: string | string[];
  /** CSS selectors to exclude from the scan. */
  exclude?: string[];
  /**
   * Rule ids to disable. Every entry MUST carry a comment in the calling spec
   * explaining why (known false positive, demo-chrome-only, etc.).
   */
  disableRules?: string[];
}

/** Navigate to a component demo route (hash-routed SPA) and wait for mount. */
export async function gotoComponent(page: Page, slug: string): Promise<void> {
  await page.goto(`/#/components/${slug}`);
  // The page chunk is lazy-loaded; wait for the first live example to mount.
  await page.locator(LIVE_DEMO).first().waitFor({ timeout: 30_000 });
}

/** Inject axe-core from node_modules (idempotent). */
export async function injectAxe(page: Page): Promise<void> {
  const present = await page.evaluate(() => typeof (window as any).axe !== 'undefined');
  if (!present) await page.addScriptTag({ path: AXE_PATH });
}

/**
 * Run axe with WCAG 2.1 AA tags and return the violations whose impact is
 * serious or critical.
 */
export async function runAxe(page: Page, opts: AxeOptions = {}): Promise<AxeViolation[]> {
  await injectAxe(page);
  const include = opts.include ?? LIVE_DEMO;
  const results = await page.evaluate(
    async ({ include, exclude, disableRules, tags }) => {
      const axe = (window as any).axe;
      const context: any = { include: Array.isArray(include) ? include.map((s: string) => [s]) : [[include]] };
      if (exclude && exclude.length) context.exclude = exclude.map((s: string) => [s]);
      const rules: Record<string, { enabled: boolean }> = {};
      for (const r of disableRules ?? []) rules[r] = { enabled: false };
      const res = await axe.run(context, {
        runOnly: { type: 'tag', values: tags },
        rules,
        resultTypes: ['violations'],
      });
      return res.violations.map((v: any) => ({
        id: v.id,
        impact: v.impact,
        help: v.help,
        helpUrl: v.helpUrl,
        nodes: v.nodes.slice(0, 5).map((n: any) => ({
          target: n.target,
          html: String(n.html).slice(0, 200),
          failureSummary: n.failureSummary,
        })),
      }));
    },
    { include, exclude: opts.exclude, disableRules: opts.disableRules, tags: WCAG21_AA_TAGS },
  );
  return (results as AxeViolation[]).filter(v => v.impact === 'serious' || v.impact === 'critical');
}

export function formatViolations(violations: AxeViolation[]): string {
  return violations
    .map(
      v =>
        `[${v.impact}] ${v.id}: ${v.help} (${v.helpUrl})\n` +
        v.nodes.map(n => `    - ${n.target.join(' ')}\n      ${n.html}`).join('\n'),
    )
    .join('\n');
}

/** Assert zero serious/critical WCAG 2.1 AA violations. */
export async function expectNoSeriousViolations(page: Page, opts: AxeOptions = {}): Promise<void> {
  const violations = await runAxe(page, opts);
  expect(violations, formatViolations(violations)).toEqual([]);
}

/**
 * Shared DEFECT note for every portalled overlay (Modal, Drawer, Popover,
 * Menu, DatePicker). ThemeProvider writes the active theme's `--tkx-*` vars
 * inline on its wrapper <div> and ALSO as a `:root {}` rule — but it inserts
 * that <style id="tkx-theme"> BEFORE every other stylesheet
 * (src/themes/index.ts:492-500), so the Quantum-Dark `:root` defaults in
 * src/styles/global.css:11 win the cascade. Anything rendered via
 * createPortal into <body> therefore paints the dark surface (#12121a) under
 * light-theme text (#1a1815 / #000): 1.05:1 contrast. Visible in the demo as
 * a dark modal with invisible body text.
 */
export const PORTAL_THEME_DEFECT =
  'Portalled overlays inherit global.css :root dark defaults instead of the active ThemeProvider theme (contrast ~1.05:1)';

// ── Focus utilities ───────────────────────────────────────────────────────────

export interface ActiveInfo {
  tag: string;
  role: string | null;
  id: string | null;
  text: string;
  ariaLabel: string | null;
}

/** Snapshot of document.activeElement. */
export async function activeElement(page: Page): Promise<ActiveInfo> {
  return page.evaluate(() => {
    const el = document.activeElement as HTMLElement | null;
    return {
      tag: el ? el.tagName.toLowerCase() : 'none',
      role: el?.getAttribute('role') ?? null,
      id: el?.id || null,
      text: (el?.textContent ?? '').trim().slice(0, 60),
      ariaLabel: el?.getAttribute('aria-label') ?? null,
    };
  });
}

/** True when document.activeElement is inside (or is) the locator's element. */
export async function focusIsWithin(locator: Locator): Promise<boolean> {
  return locator.evaluate(el => el === document.activeElement || el.contains(document.activeElement));
}

/** Press Tab `n` times and assert focus never leaves `container` (focus trap). */
export async function expectFocusTrapped(page: Page, container: Locator, n = 12): Promise<void> {
  for (let i = 0; i < n; i++) {
    await page.keyboard.press('Tab');
    expect(await focusIsWithin(container), `focus escaped container on Tab #${i + 1}`).toBe(true);
  }
  for (let i = 0; i < n; i++) {
    await page.keyboard.press('Shift+Tab');
    expect(await focusIsWithin(container), `focus escaped container on Shift+Tab #${i + 1}`).toBe(true);
  }
}

/** Focus `from`, press Tab and assert `to` receives focus (reachability). */
export async function expectTabReaches(page: Page, from: Locator, to: Locator): Promise<void> {
  await from.focus();
  await expect(from).toBeFocused();
  await page.keyboard.press('Tab');
  await expect(to).toBeFocused();
}
