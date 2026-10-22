import { test, expect } from '@playwright/test';
import { gotoComponent, expectNoSeriousViolations } from './helpers';

// APG: Date picker dialog — ArrowDown from the input moves focus into the
// calendar, arrow keys move by day/week, Enter selects and closes, Escape
// closes and returns focus to the input.

const INPUT = 'main input[aria-haspopup="dialog"]';

test.describe('DatePicker', () => {
  test.beforeEach(async ({ page }) => gotoComponent(page, 'date-picker'));

  test('axe: no serious/critical WCAG 2.1 AA violations (closed)', async ({ page }) => {
    await expectNoSeriousViolations(page);
  });

  test('axe: no serious/critical WCAG 2.1 AA violations (calendar open)', async ({ page }) => {
    const input = page.locator(INPUT).first();
    await input.focus();
    await page.keyboard.press('ArrowDown');
    await expect(page.getByRole('dialog').first()).toBeVisible();
    await expectNoSeriousViolations(page, { include: '[role="dialog"]' });
  });

  test('keyboard: ArrowDown moves into calendar, arrows move days, Escape restores focus, Enter selects', async ({ page }) => {
    const input = page.locator(INPUT).first();
    await input.focus();
    await page.keyboard.press('ArrowDown');
    await expect(input).toHaveAttribute('aria-expanded', 'true');
    const dialog = page.getByRole('dialog').first();
    await expect(dialog).toBeVisible();

    // Focus is on a day button inside the dialog.
    const dayOf = () => page.evaluate(() => {
      const el = document.activeElement as HTMLElement;
      return el.hasAttribute('data-tkx-day') ? el.getAttribute('aria-label') : null;
    });
    await expect.poll(dayOf).not.toBeNull();
    const d0 = await dayOf();
    await page.keyboard.press('ArrowRight');
    const d1 = await dayOf();
    expect(d1).not.toBeNull();
    expect(d1).not.toBe(d0);
    await page.keyboard.press('ArrowLeft');
    expect(await dayOf()).toBe(d0);
    await page.keyboard.press('ArrowDown'); // +1 week
    expect(await dayOf()).not.toBe(d0);
    await page.keyboard.press('ArrowUp');
    expect(await dayOf()).toBe(d0);

    await page.keyboard.press('Escape');
    await expect(dialog).toBeHidden();
    await expect(input).toBeFocused();
    await expect(input).toHaveAttribute('aria-expanded', 'false');

    // Enter on a focused day selects it and closes the dialog.
    await page.keyboard.press('ArrowDown');
    await expect(page.getByRole('dialog').first()).toBeVisible();
    await expect.poll(dayOf).not.toBeNull();
    await page.keyboard.press('Enter');
    await expect(page.getByRole('dialog')).toHaveCount(0);
    await expect(input).not.toHaveValue('');
  });

  test('a11y: calendar exposes grid semantics (role=grid/row/gridcell)', async ({ page }) => {
    const input = page.locator(INPUT).first();
    await input.focus();
    await page.keyboard.press('ArrowDown');
    const dialog = page.getByRole('dialog').first();
    await expect(dialog).toBeVisible();
    await expect(dialog.getByRole('grid')).toHaveCount(1);
    expect(await dialog.getByRole('gridcell').count()).toBeGreaterThanOrEqual(28);
    expect(await dialog.getByRole('columnheader').count()).toBe(7);
  });
});
