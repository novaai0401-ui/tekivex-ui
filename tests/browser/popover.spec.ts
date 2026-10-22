import { test, expect } from '@playwright/test';
import { gotoComponent, expectNoSeriousViolations } from './helpers';

// APG: Non-modal dialog (popover) — trigger exposes aria-haspopup/expanded,
// Enter/Space open, Escape closes and returns focus to the trigger.

// D7 (fixed): the caller's trigger element itself carries the handlers and
// ARIA (cloneElement); there is no role=button wrapper around it any more.
const TRIGGER = 'button[aria-haspopup="dialog"], [role="button"][aria-haspopup="dialog"]';

test.describe('Popover', () => {
  test.beforeEach(async ({ page }) => gotoComponent(page, 'popover'));

  test('axe: no serious/critical WCAG 2.1 AA violations (closed)', async ({ page }) => {
    await expectNoSeriousViolations(page);
  });

  test('axe: no serious/critical WCAG 2.1 AA violations (open)', async ({ page }) => {
    const trigger = page.locator(TRIGGER).first();
    await trigger.focus();
    await page.keyboard.press('Enter');
    await expect(page.getByRole('dialog').first()).toBeVisible();
    await expectNoSeriousViolations(page, { include: '[role="dialog"]' });
  });

  test('keyboard: Enter opens, Escape closes and restores focus to trigger', async ({ page }) => {
    const trigger = page.locator(TRIGGER).first();
    await trigger.focus();
    await expect(trigger).toHaveAttribute('aria-expanded', 'false');
    await page.keyboard.press('Enter');
    await expect(trigger).toHaveAttribute('aria-expanded', 'true');
    const dialog = page.getByRole('dialog').first();
    await expect(dialog).toBeVisible();

    await page.keyboard.press('Escape');
    await expect(dialog).toBeHidden();
    await expect(trigger).toHaveAttribute('aria-expanded', 'false');
    await expect(trigger).toBeFocused();

    // Space also opens.
    await page.keyboard.press('Space');
    await expect(trigger).toHaveAttribute('aria-expanded', 'true');
    await page.keyboard.press('Escape');
    await expect(trigger).toHaveAttribute('aria-expanded', 'false');
  });

  test('keyboard: the trigger is a single Tab stop', async ({ page }) => {
    const trigger = page.locator(TRIGGER).first();
    await trigger.focus();
    await page.keyboard.press('Tab');
    expect(await trigger.evaluate(el => el.contains(document.activeElement))).toBe(false);
  });
});
