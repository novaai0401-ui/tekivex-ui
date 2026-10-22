import { test, expect } from '@playwright/test';
import { gotoComponent, expectNoSeriousViolations } from './helpers';

// APG: Breadcrumb — <nav aria-label="Breadcrumb"> wrapping an ordered list,
// links are Tab stops, last item carries aria-current="page", separators are
// hidden from AT, the collapsed "…" control is a keyboard-operable button.
test.describe('Breadcrumb', () => {
  test.beforeEach(async ({ page }) => gotoComponent(page, 'breadcrumb'));

  test('axe: no serious/critical WCAG 2.1 AA violations', async ({ page }) => {
    await expectNoSeriousViolations(page);
  });

  test('a11y: nav landmark, aria-current on last item, separators hidden', async ({ page }) => {
    const nav = page.locator('main nav[aria-label]').first();
    await expect(nav).toBeVisible();
    expect((await nav.getAttribute('aria-label'))!.toLowerCase()).toContain('breadcrumb');
    await expect(nav.locator('[aria-current="page"]').first()).toBeVisible();
    const sepVisibleToAT = await nav.locator('li[role="presentation"]:not([aria-hidden="true"])').filter({ hasNot: page.locator('button') }).count();
    expect(sepVisibleToAT).toBe(0);
  });

  test('keyboard: Tab walks links; Enter on "…" reveals the hidden items', async ({ page, browserName }) => {
    const nav = page.locator('main nav[aria-label]').first();
    const links = nav.locator('a[href]');
    await links.nth(0).focus();
    if (browserName === 'webkit') {
      // Safari/WebKit skips links on plain Tab by default (a browser
      // preference, not a component property); assert links are focusable.
      await links.nth(1).focus();
      await expect(links.nth(1)).toBeFocused();
    } else {
      await page.keyboard.press('Tab');
      await expect(links.nth(1)).toBeFocused();
    }

    const region = page.getByRole('region', { name: 'Live demo: Collapsed with maxItems' });
    const collapsedNav = region.locator('nav').first();
    const ellipsis = collapsedNav.getByRole('button', { name: 'Show hidden breadcrumb items' });
    const before = await collapsedNav.locator('a[href]').count();
    await ellipsis.focus();
    await page.keyboard.press('Enter');
    await expect(ellipsis).toHaveCount(0);
    expect(await collapsedNav.locator('a[href]').count()).toBeGreaterThan(before);
  });

  test('keyboard: focus is not lost when "…" is replaced by the revealed links', async ({ page }) => {
    const region = page.getByRole('region', { name: 'Live demo: Collapsed with maxItems' });
    const collapsedNav = region.locator('nav').first();
    const ellipsis = collapsedNav.getByRole('button', { name: 'Show hidden breadcrumb items' });
    await ellipsis.focus();
    await page.keyboard.press('Enter');
    await expect(ellipsis).toHaveCount(0);
    expect(await collapsedNav.evaluate(el => el.contains(document.activeElement))).toBe(true);
  });
});
