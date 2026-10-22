import { test, expect } from '@playwright/test';
import { gotoComponent, expectNoSeriousViolations } from './helpers';

// Text input: Tab reaches it, typing edits the value, label is programmatic.
test.describe('Input', () => {
  test.beforeEach(async ({ page }) => gotoComponent(page, 'input'));

  test('axe: no serious/critical WCAG 2.1 AA violations', async ({ page }) => {
    await expectNoSeriousViolations(page);
  });

  test('keyboard: Tab reaches the first input and typing edits it', async ({ page }) => {
    const input = page.locator('main input[type="text"], main input:not([type])').first();
    await expect(input).toBeVisible();
    // Every TkxInput must have an accessible name (label/aria-label/labelledby).
    const name = await input.evaluate(el => {
      const i = el as HTMLInputElement;
      return i.labels?.length || i.getAttribute('aria-label') || i.getAttribute('aria-labelledby');
    });
    expect(name).toBeTruthy();

    // Reach it via Tab from the previous focusable element.
    await input.evaluate(el => {
      const all = Array.from(document.querySelectorAll<HTMLElement>('a[href],button,input,[tabindex="0"]'))
        .filter(e => !e.hidden && e.offsetParent !== null);
      const idx = all.indexOf(el as HTMLElement);
      all[idx - 1]?.focus();
    });
    await page.keyboard.press('Tab');
    await expect(input).toBeFocused();

    await page.keyboard.type('hello');
    await expect(input).toHaveValue(/hello$/);
  });

  test('a11y: error state exposes aria-invalid + described-by alert', async ({ page }) => {
    const invalid = page.locator('main input[aria-invalid="true"]').first();
    await expect(invalid).toBeVisible();
    const describedBy = await invalid.getAttribute('aria-describedby');
    expect(describedBy).toBeTruthy();
    await expect(page.locator(`#${describedBy!.split(' ')[0]}`)).toBeVisible();
  });
});
