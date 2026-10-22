import { test, expect } from '@playwright/test';
import { gotoComponent, expectNoSeriousViolations, expectTabReaches } from './helpers';

// APG: Switch — Tab reaches it, Space (and Enter for button-based switches)
// toggles aria-checked.
test.describe('Toggle', () => {
  test.beforeEach(async ({ page }) => gotoComponent(page, 'toggle'));

  test('axe: no serious/critical WCAG 2.1 AA violations', async ({ page }) => {
    // The <TkxBadge> next to the first toggle is scanned too (D13 fixed).
    await expectNoSeriousViolations(page);
  });

  test('keyboard: Tab reaches switch; Space and Enter toggle aria-checked', async ({ page }) => {
    const region = page.getByRole('region', { name: 'Live demo: Toggle Group' });
    const switches = region.getByRole('switch');
    const first = switches.nth(0);
    const second = switches.nth(1);
    await expectTabReaches(page, first, second);

    const before = await second.getAttribute('aria-checked');
    const flipped = before === 'true' ? 'false' : 'true';
    await page.keyboard.press('Space');
    await expect(second).toHaveAttribute('aria-checked', flipped);
    await page.keyboard.press('Enter');
    await expect(second).toHaveAttribute('aria-checked', before!);
  });

  test('a11y: every switch has an accessible name', async ({ page }) => {
    const unnamed = await page.getByRole('switch').evaluateAll(els =>
      els.filter(el => !el.getAttribute('aria-label') && !el.getAttribute('aria-labelledby')).length,
    );
    expect(unnamed).toBe(0);
  });
});
