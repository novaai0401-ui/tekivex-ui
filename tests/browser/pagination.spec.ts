import { test, expect } from '@playwright/test';
import { gotoComponent, expectNoSeriousViolations } from './helpers';

// Pagination: a <nav> of buttons, aria-current="page" marks the active page,
// Tab moves between page buttons, Enter/Space activate.
test.describe('Pagination', () => {
  test.beforeEach(async ({ page }) => gotoComponent(page, 'pagination'));

  test('axe: no serious/critical WCAG 2.1 AA violations', async ({ page }) => {
    await expectNoSeriousViolations(page, {
      // Demo-authored: the record list rendered above each pager colours its
      // "Pending" status with theme.warning inline (demo/docs/PaginationPage.tsx:68).
      // Only the <nav> is TkxPagination, so scan the navs.
      include: '[aria-label^="Live demo"] nav',
    });
  });

  test('keyboard: Tab reaches page buttons, Enter moves aria-current, Space on Next advances', async ({ page }) => {
    const nav = page.getByRole('region', { name: 'Live demo: Basic Pagination' }).locator('nav').first();
    const page1 = nav.getByRole('button', { name: 'Page 1', exact: true });
    const page2 = nav.getByRole('button', { name: 'Page 2', exact: true });
    await expect(page1).toHaveAttribute('aria-current', 'page');

    await page1.focus();
    await page.keyboard.press('Tab');
    await expect(page2).toBeFocused();
    await page.keyboard.press('Enter');
    await expect(page2).toHaveAttribute('aria-current', 'page');
    await expect(page1).not.toHaveAttribute('aria-current', 'page');

    await nav.getByRole('button', { name: 'Next page' }).focus();
    await page.keyboard.press('Space');
    await expect(nav.getByRole('button', { name: 'Page 3', exact: true })).toHaveAttribute('aria-current', 'page');

    await nav.getByRole('button', { name: 'First page' }).focus();
    await page.keyboard.press('Enter');
    await expect(nav.getByRole('button', { name: 'Page 1', exact: true })).toHaveAttribute('aria-current', 'page');
    // Previous is disabled on page 1.
    expect(await nav.getByRole('button', { name: 'Previous page' }).isDisabled()).toBe(true);
  });
});
