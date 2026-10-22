import { test, expect } from '@playwright/test';
import { gotoComponent, expectNoSeriousViolations } from './helpers';

// APG: Sortable table — sortable column headers are focusable, expose
// aria-sort, and Enter/Space cycle the sort direction.
test.describe('Table', () => {
  test.beforeEach(async ({ page }) => gotoComponent(page, 'table'));

  test('axe: no serious/critical WCAG 2.1 AA violations', async ({ page }) => {
    await expectNoSeriousViolations(page, {
      // Status-cell <TkxBadge>s are scanned too (D13 fixed).
      exclude: [
        // Demo-authored: the "Sticky Header" example wraps the table in its own
        // <div style="max-height:220px; overflow-y:auto"> (demo/docs/TablePage.tsx:302)
        // which trips scrollable-region-focusable; TkxTable's own maxHeight prop
        // is not what is rendered here.
        '[aria-label="Live demo: Sticky Header"] > div',
      ],
    });
  });

  test('keyboard: Tab reaches sortable header; Enter/Space change aria-sort', async ({ page }) => {
    const headers = page.locator('main th[aria-sort][tabindex="0"]');
    const name = headers.nth(0);
    const email = headers.nth(1);
    await name.focus();
    await expect(name).toBeFocused();
    await page.keyboard.press('Tab');
    await expect(email).toBeFocused();

    await expect(email).toHaveAttribute('aria-sort', 'none');
    await page.keyboard.press('Enter');
    await expect(email).toHaveAttribute('aria-sort', 'ascending');
    await page.keyboard.press('Space');
    await expect(email).toHaveAttribute('aria-sort', 'descending');
    // Only one column in that table may be sorted at a time.
    const table = email.locator('xpath=ancestor::table[1]');
    const sorted = await table.locator('th[aria-sort]').evaluateAll(els => els.filter(e => e.getAttribute('aria-sort') !== 'none').length);
    expect(sorted).toBe(1);
  });

  test('a11y: every table has real <th> headers', async ({ page }) => {
    const tables = page.locator('main table');
    expect(await tables.count()).toBeGreaterThan(0);
    const missingHeaders = await tables.evaluateAll(els => els.filter(t => t.querySelectorAll('th').length === 0).length);
    expect(missingHeaders).toBe(0);
  });
});
