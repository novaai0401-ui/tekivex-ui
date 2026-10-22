import { test, expect } from '@playwright/test';
import { gotoComponent, expectNoSeriousViolations, PORTAL_THEME_DEFECT } from './helpers';

// APG: Non-modal dialog (popover) — trigger exposes aria-haspopup/expanded,
// Enter/Space open, Escape closes and returns focus to the trigger.

// DEFECT (TkxPopover trigger): the trigger is a <div role="button" tabindex="0">
// wrapping the caller's <TkxButton>, so a real <button> sits inside a
// role=button → axe `nested-interactive` (serious) and two Tab stops for one
// control. Source: src/components/TkxPopover.tsx (~line 290, trigger wrapper).
const POPOVER_DEFECT = 'TkxPopover trigger wrapper is role=button around a focusable child (nested-interactive)';

// The outer wrapper is the element the component wires keyboard handlers to.
const TRIGGER = '[role="button"][aria-haspopup="dialog"]';

test.describe('Popover', () => {
  test.beforeEach(async ({ page }) => gotoComponent(page, 'popover'));

  test('axe: no serious/critical WCAG 2.1 AA violations (closed)', async ({ page }) => {
    test.fixme(true, POPOVER_DEFECT);
    await expectNoSeriousViolations(page);
  });

  test('axe: no serious/critical WCAG 2.1 AA violations (open)', async ({ page }) => {
    const trigger = page.locator(TRIGGER).first();
    await trigger.focus();
    await page.keyboard.press('Enter');
    await expect(page.getByRole('dialog').first()).toBeVisible();
    // DEFECT: see PORTAL_THEME_DEFECT in helpers.ts — "Popover Title" renders
    // #1a1815 on #12121a (1.05:1) in the light theme.
    test.fixme(true, PORTAL_THEME_DEFECT);
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
    test.fixme(true, POPOVER_DEFECT);
    const trigger = page.locator(TRIGGER).first();
    await trigger.focus();
    await page.keyboard.press('Tab');
    expect(await trigger.evaluate(el => el.contains(document.activeElement))).toBe(false);
  });
});
