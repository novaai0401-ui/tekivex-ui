import { test, expect } from '@playwright/test';
import { gotoComponent, expectNoSeriousViolations, expectTabReaches } from './helpers';

// APG: Checkbox — Tab reaches it, Space toggles, Enter does not; a mixed
// parent exposes aria-checked="mixed" / input.indeterminate.
test.describe('Checkbox', () => {
  test.beforeEach(async ({ page }) => gotoComponent(page, 'checkbox'));

  test('axe: no serious/critical WCAG 2.1 AA violations', async ({ page }) => {
    await expectNoSeriousViolations(page);
  });

  test('keyboard: Tab reaches it, Space checks, Enter does not toggle', async ({ page }) => {
    const group = page.getByRole('region', { name: 'Live demo: Checkbox Group' });
    const boxes = group.locator('input[type="checkbox"]:not([disabled])');
    const first = boxes.nth(0);
    const second = boxes.nth(1);
    await expectTabReaches(page, first, second);

    await expect(second).not.toBeChecked();
    await page.keyboard.press('Space');
    await expect(second).toBeChecked();
    await page.keyboard.press('Enter');
    await expect(second).toBeChecked();
  });

  test('keyboard: Space on a checked checkbox unchecks it', async ({ page }) => {
    // DEFECT (TkxCheckbox API contract): the demo and the props table
    // (demo/docs/CheckboxPage.tsx:16) document `onChange: (checked: boolean) => void`
    // and wire `onChange={setChecked}`, but TkxCheckbox forwards the native
    // ChangeEvent (src/components/TkxCheckbox.tsx:137 `onChange={onChange}`), so
    // state becomes the (truthy) event and the box can never be unchecked —
    // by keyboard or mouse — in every browser. Either the component should emit
    // the boolean or the docs/demo must use `e.target.checked`.
    test.fixme(true, 'TkxCheckbox onChange emits the event, docs/demo expect a boolean — cannot uncheck');
    const box = page.getByRole('region', { name: 'Live demo: Basic Checkbox' }).locator('input[type="checkbox"]').first();
    await box.focus();
    await page.keyboard.press('Space');
    await expect(box).toBeChecked();
    await page.keyboard.press('Space');
    await expect(box).not.toBeChecked();
  });

  test('keyboard: checking one child makes the parent indeterminate', async ({ page }) => {
    const region = page.getByRole('region', { name: 'Live demo: Indeterminate State' });
    const boxes = region.locator('input[type="checkbox"]');
    const parent = boxes.nth(0);
    const child = boxes.nth(1);
    await child.focus();
    await page.keyboard.press('Space');
    await expect(child).toBeChecked();
    // Browsers expose input.indeterminate as "mixed" to AT. (The demo docs also
    // claim aria-checked="mixed" is set; it is not — noted in BROWSER-MATRIX.md.)
    await expect.poll(() => parent.evaluate(el => (el as HTMLInputElement).indeterminate)).toBe(true);
  });
});
