import { test, expect } from '@playwright/test';
import { gotoComponent, expectNoSeriousViolations } from './helpers';

// APG: Tooltip — appears on keyboard focus of the trigger, is referenced via
// aria-describedby, Escape dismisses it, blur hides it.
test.describe('Tooltip', () => {
  test.beforeEach(async ({ page }) => gotoComponent(page, 'tooltip'));

  test('axe: no serious/critical WCAG 2.1 AA violations', async ({ page }) => {
    await expectNoSeriousViolations(page, {
      // Demo-authored: the "Rich Tooltips" example's data table colours its
      // delta cells with inline rgb(6,214,160)/rgb(247,37,133) — not TkxTooltip.
      exclude: ['[aria-label="Live demo: Rich Tooltips"] table'],
    });
  });

  test('keyboard: focus shows tooltip + aria-describedby, Escape hides, blur hides', async ({ page }) => {
    const trigger = page.getByRole('button', { name: 'Download file' });
    await trigger.focus();
    const tooltip = page.getByRole('tooltip').first();
    await expect(tooltip).toBeVisible();
    const describedBy = await trigger.getAttribute('aria-describedby');
    expect(describedBy).toBeTruthy();
    expect(await tooltip.getAttribute('id')).toBe(describedBy);

    await page.keyboard.press('Escape');
    await expect(tooltip).toBeHidden();
    await expect(trigger).toBeFocused();

    await page.keyboard.press('Tab');
    const next = page.getByRole('button', { name: 'Share with team' });
    await expect(next).toBeFocused();
    await expect(page.getByRole('tooltip').first()).toBeVisible();
    await next.blur();
    await expect(page.getByRole('tooltip')).toHaveCount(0);
  });
});
