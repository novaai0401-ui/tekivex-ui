import { test, expect } from '@playwright/test';
import { gotoComponent, expectNoSeriousViolations, expectFocusTrapped, focusIsWithin } from './helpers';

// APG: Dialog (modal) — opening moves focus inside, Tab/Shift+Tab are trapped,
// Escape closes and returns focus to the invoking element.
test.describe('Modal', () => {
  test.beforeEach(async ({ page }) => gotoComponent(page, 'modal'));

  test('axe: no serious/critical WCAG 2.1 AA violations (closed)', async ({ page }) => {
    await expectNoSeriousViolations(page);
  });

  test('axe: no serious/critical WCAG 2.1 AA violations (open)', async ({ page }) => {
    await page.getByRole('button', { name: 'Open modal', exact: true }).click();
    const dialog = page.getByRole('dialog').first();
    await expect(dialog).toBeVisible();
    // The dialog is portalled outside the demo region — scan the dialog itself.
    await expectNoSeriousViolations(page, { include: '[role="dialog"]' });
  });

  test('keyboard: Enter opens, focus moves in and is trapped, Escape closes and restores focus', async ({ page }) => {
    const trigger = page.getByRole('button', { name: 'Open modal', exact: true });
    await trigger.focus();
    await page.keyboard.press('Enter');

    const dialog = page.locator('[role="dialog"][aria-modal="true"]').first();
    await expect(dialog).toBeVisible();
    // Dialog must have an accessible name.
    const named = await dialog.evaluate(el => !!(el.getAttribute('aria-label') || el.getAttribute('aria-labelledby')));
    expect(named).toBe(true);

    await expect.poll(() => focusIsWithin(dialog)).toBe(true);
    await expectFocusTrapped(page, dialog, 8);

    await page.keyboard.press('Escape');
    await expect(dialog).toBeHidden();
    await expect(trigger).toBeFocused();
  });
});
