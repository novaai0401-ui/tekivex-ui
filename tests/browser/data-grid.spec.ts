import { test, expect } from '@playwright/test';
import { gotoComponent, expectNoSeriousViolations } from './helpers';

// APG: Data grid — a single Tab stop (roving tabindex on one cell), arrow
// keys move focus between cells, Home/End to row ends, Tab leaves the grid.
test.describe('DataGrid', () => {
  test.beforeEach(async ({ page }) => gotoComponent(page, 'data-grid'));

  test('axe: no serious/critical WCAG 2.1 AA violations', async ({ page }) => {
    await expectNoSeriousViolations(page);
  });

  test('keyboard: Tab enters grid on one cell, arrows navigate, Home/End, Tab leaves', async ({ page }) => {
    const grid = page.getByRole('grid').first();
    await expect(grid).toBeVisible();
    const cells = grid.locator('[role="gridcell"], [role="rowheader"]');
    const stops = await cells.evaluateAll(els => els.filter(e => e.getAttribute('tabindex') === '0').length);
    expect(stops, 'exactly one grid cell should be the Tab stop').toBe(1);

    const cellIndex = () => page.evaluate(() => (document.activeElement as HTMLTableCellElement).cellIndex);
    const rowIndex = () => page.evaluate(() => Number((document.activeElement as HTMLElement).closest('[role="row"]')?.getAttribute('aria-rowindex')));
    const role = () => page.evaluate(() => document.activeElement?.getAttribute('role'));

    // Tab from the last sortable header into the body.
    await grid.locator('[role="columnheader"][tabindex="0"]').last().focus();
    await page.keyboard.press('Tab');
    expect(['gridcell', 'rowheader']).toContain(await role());
    const startCol = await cellIndex();
    const startRow = await rowIndex();

    await page.keyboard.press('ArrowRight');
    expect(await cellIndex()).toBe(startCol + 1);
    await page.keyboard.press('ArrowLeft');
    expect(await cellIndex()).toBe(startCol);

    await page.keyboard.press('ArrowDown');
    expect(await rowIndex()).toBe(startRow + 1);
    await page.keyboard.press('ArrowUp');
    expect(await rowIndex()).toBe(startRow);

    await page.keyboard.press('End');
    const colCount = Number(await grid.getAttribute('aria-colcount'));
    expect(await cellIndex()).toBe(colCount - 1);
    await page.keyboard.press('Home');
    expect(await cellIndex()).toBe(0);

    // Tab leaves the grid (does not walk every cell).
    await page.keyboard.press('Tab');
    expect(await grid.evaluate(el => el.contains(document.activeElement))).toBe(false);
  });
});
