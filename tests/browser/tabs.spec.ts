import { test, expect } from '@playwright/test';
import { gotoComponent, expectNoSeriousViolations } from './helpers';

// APG: Tabs (automatic activation) — one tab stop per tablist (roving
// tabindex), ArrowRight/Left move focus + selection with wrap, Home/End jump,
// Tab from a tab moves into the active tabpanel.
test.describe('Tabs', () => {
  test.beforeEach(async ({ page }) => gotoComponent(page, 'tabs'));

  test('axe: no serious/critical WCAG 2.1 AA violations', async ({ page }) => {
    await expectNoSeriousViolations(page, {
      // Demo-authored: the "Settings Page Pattern" panel content uses bare
      // <input> elements with no labels (demo/docs/TabsPage.tsx) — not TkxTabs.
      exclude: ['[aria-label="Live demo: Settings Page Pattern"] input'],
    });
  });

  test('keyboard: arrows move focus and selection, Home/End, Tab enters panel', async ({ page }) => {
    const tablist = page.getByRole('tablist').first();
    const tabs = tablist.getByRole('tab');
    const count = await tabs.count();
    expect(count).toBeGreaterThanOrEqual(3);

    await tabs.nth(0).focus();
    await expect(tabs.nth(0)).toHaveAttribute('aria-selected', 'true');

    await page.keyboard.press('ArrowRight');
    await expect(tabs.nth(1)).toBeFocused();
    await expect(tabs.nth(1)).toHaveAttribute('aria-selected', 'true');
    await expect(tabs.nth(0)).toHaveAttribute('aria-selected', 'false');

    await page.keyboard.press('End');
    await expect(tabs.nth(count - 1)).toBeFocused();
    await expect(tabs.nth(count - 1)).toHaveAttribute('aria-selected', 'true');

    await page.keyboard.press('ArrowRight'); // wrap
    await expect(tabs.nth(0)).toBeFocused();

    await page.keyboard.press('ArrowLeft'); // wrap backwards
    await expect(tabs.nth(count - 1)).toBeFocused();

    await page.keyboard.press('Home');
    await expect(tabs.nth(0)).toBeFocused();

    // Roving tabindex: only the selected tab is a tab stop.
    const stops = await tabs.evaluateAll(els => els.filter(e => e.getAttribute('tabindex') === '0').length);
    expect(stops).toBe(1);

    // Tab moves out of the tablist into the associated panel.
    await page.keyboard.press('Tab');
    const panelId = await tabs.nth(0).getAttribute('aria-controls');
    await expect(page.locator(`#${panelId}`)).toBeFocused();
  });

  test('keyboard: disabled tabs are skipped', async ({ page }) => {
    // The "Disabled Tab" example: Available | Disabled | Available | Coming Soon
    const tablist = page.getByRole('tablist').filter({ has: page.getByRole('tab', { name: 'Disabled' }) }).first();
    const tabs = tablist.getByRole('tab');
    await tabs.nth(0).focus();
    await page.keyboard.press('ArrowRight');
    await expect(tabs.nth(2)).toBeFocused();
  });
});
