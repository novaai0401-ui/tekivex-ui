import { test, expect } from '@playwright/test';
import { gotoComponent, expectNoSeriousViolations, expectFocusTrapped, focusIsWithin, PORTAL_THEME_DEFECT } from './helpers';

// APG: Dialog (modal) applied to a side drawer — same contract as Modal.
test.describe('Drawer', () => {
  test.beforeEach(async ({ page }) => gotoComponent(page, 'drawer'));

  test('axe: no serious/critical WCAG 2.1 AA violations (closed)', async ({ page }) => {
    await expectNoSeriousViolations(page);
  });

  test('axe: no serious/critical WCAG 2.1 AA violations (open)', async ({ page }) => {
    await page.getByRole('button', { name: 'Open Right Drawer' }).click();
    await expect(page.getByRole('dialog').first()).toBeVisible();
    // DEFECT: see PORTAL_THEME_DEFECT in helpers.ts — drawer labels render
    // #1a1815 on the dark :root surface at 1.05:1.
    test.fixme(true, PORTAL_THEME_DEFECT);
    await expectNoSeriousViolations(page, {
      include: '[role="dialog"]',
      // Demo-authored: the drawer body in demo/docs/DrawerPage.tsx:150-158 uses
      // bare <input> elements without labels to sketch a settings form.
      exclude: ['[role="dialog"] input'],
    });
  });

  test('keyboard: Space opens, focus trapped, Escape closes and restores focus', async ({ page }) => {
    const trigger = page.getByRole('button', { name: 'Open Right Drawer' });
    await trigger.focus();
    await page.keyboard.press('Space');

    const dialog = page.locator('[role="dialog"][aria-modal="true"]').first();
    await expect(dialog).toBeVisible();
    await expect.poll(() => focusIsWithin(dialog)).toBe(true);
    await expectFocusTrapped(page, dialog, 8);

    await page.keyboard.press('Escape');
    await expect(dialog).toBeHidden();
    await expect(trigger).toBeFocused();
  });
});
