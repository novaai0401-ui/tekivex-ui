import { test, expect } from '@playwright/test';
import { gotoComponent, expectNoSeriousViolations } from './helpers';

// APG: Radio group — one tab stop per group (Tab lands on the checked radio),
// ArrowDown/ArrowRight move focus AND selection to the next radio, ArrowUp
// moves back.
test.describe('Radio', () => {
  test.beforeEach(async ({ page }) => gotoComponent(page, 'radio'));

  test('axe: no serious/critical WCAG 2.1 AA violations', async ({ page }) => {
    // DEFECT (TkxRadio hint): the per-radio `hint` text renders at 12px in
    // var(--tkx-textMuted) under an opacity, measuring #b5b2b0 on #fff = 2.1:1.
    // Source: src/components/TkxRadio.tsx (hint <span> style, ~line 150).
    test.fixme(true, 'TkxRadio hint text fails color-contrast (2.1:1)');
    await expectNoSeriousViolations(page);
  });

  test('keyboard: arrow keys move selection within a radiogroup', async ({ page, browserName }) => {
    // DEFECT (same root cause as below — name=""): Chromium and WebKit still
    // treat sibling unnamed radios as a group for arrow keys, Firefox does not,
    // so arrow navigation is dead in Firefox.
    test.fixme(browserName === 'firefox', 'TkxRadioGroup radios have name="" — Firefox arrow keys do not move selection');
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
    // DEFECT (TkxRadioGroup): radios render with name="" because
    // TkxRadioGroup never generates a group name (src/components/TkxRadio.tsx:83
    // `const radioName = nameProp ?? group?.name ?? ''`). Unnamed radios are not
    // a native group, so Tab stops on every radio instead of once per group.
    test.fixme(true, 'TkxRadioGroup radios have name="" — Tab visits every radio');
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
