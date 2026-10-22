import { test, expect } from '@playwright/test';
import { gotoComponent, expectNoSeriousViolations } from './helpers';

// Textarea: Tab reaches it, Enter inserts a newline (never submits), the
// character counter is exposed via aria-describedby.
test.describe('Textarea', () => {
  test.beforeEach(async ({ page }) => gotoComponent(page, 'textarea'));

  test('axe: no serious/critical WCAG 2.1 AA violations', async ({ page }) => {
    await expectNoSeriousViolations(page);
  });

  test('keyboard: Tab reaches textarea, typing + Enter inserts newline', async ({ page }) => {
    const ta = page.locator('main textarea').first();
    await ta.evaluate(el => {
      const all = Array.from(document.querySelectorAll<HTMLElement>('a[href],button,input,textarea,[tabindex="0"]'))
        .filter(e => e.offsetParent !== null);
      all[all.indexOf(el as HTMLElement) - 1]?.focus();
    });
    await page.keyboard.press('Tab');
    await expect(ta).toBeFocused();
    await page.keyboard.type('line one');
    await page.keyboard.press('Enter');
    await page.keyboard.type('line two');
    await expect(ta).toHaveValue(/line one\nline two$/);
  });

  test('a11y: character counter is referenced by aria-describedby and updates', async ({ page }) => {
    const counted = page.locator('main textarea[aria-describedby$="-count"]').first();
    await expect(counted).toBeVisible();
    const id = await counted.getAttribute('aria-describedby');
    const counter = page.locator(`#${id}`);
    await expect(counter).toBeVisible();
    await counted.fill('');
    await counted.focus();
    await page.keyboard.type('abc');
    await expect(counter).toContainText('3');
  });
});
