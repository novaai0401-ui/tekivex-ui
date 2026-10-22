import { test, expect } from '@playwright/test';
import { gotoComponent, expectNoSeriousViolations } from './helpers';

// APG: Radio group — one tab stop per group (Tab lands on the checked radio),
// ArrowDown/ArrowRight move focus AND selection to the next radio, ArrowUp
// moves back.
test.describe('Radio', () => {
  test.beforeEach(async ({ page }) => gotoComponent(page, 'radio'));

  test('axe: no serious/critical WCAG 2.1 AA violations', async ({ page }) => {
    // D5 (fixed): the disabled-state opacity now applies to the control+label
    // only, so a disabled radio's hint keeps the full textMuted colour.
    await expectNoSeriousViolations(page);
  });

  test('keyboard: arrow keys move selection within a radiogroup', async ({ page }) => {
    // D4 (fixed): the group generates a shared name, so Firefox groups the
    // radios for arrow navigation too.
    const group = page.getByRole('radiogroup', { name: 'Billing Cycle' });
    const radios = group.locator('input[type="radio"]:not([disabled])');
    expect(await radios.count()).toBeGreaterThan(1);

    await radios.nth(0).focus();
    await expect(radios.nth(0)).toBeFocused();
    await page.keyboard.press('ArrowDown');
    await expect(radios.nth(1)).toBeFocused();
    await expect(radios.nth(1)).toBeChecked();
    await page.keyboard.press('ArrowRight');
    await expect(radios.nth(2)).toBeFocused();
    await expect(radios.nth(2)).toBeChecked();
    await page.keyboard.press('ArrowUp');
    await expect(radios.nth(1)).toBeFocused();
    await expect(radios.nth(1)).toBeChecked();
  });

  test('keyboard: the group is a single Tab stop', async ({ page }) => {
    // D4 (fixed): TkxRadioGroup falls back to a `useId()`-based name when the
    // caller passes none, so the radios form one native group / one Tab stop.
    const group = page.getByRole('radiogroup', { name: 'Billing Cycle' });
    const radios = group.locator('input[type="radio"]:not([disabled])');
    const names = await radios.evaluateAll(els => els.map(e => (e as HTMLInputElement).name));
    expect(new Set(names).size).toBe(1);
    expect(names[0]).not.toBe('');
    await radios.nth(0).focus();
    await page.keyboard.press('Tab');
    expect(await group.evaluate(el => el.contains(document.activeElement))).toBe(false);
  });
});
