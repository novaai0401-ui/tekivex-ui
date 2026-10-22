import { test, expect } from '@playwright/test';
import { gotoComponent, expectNoSeriousViolations, expectTabReaches } from './helpers';

// APG: Accordion — headers are buttons inside headings, Tab moves between
// them, Enter/Space toggle aria-expanded and the controlled panel.
test.describe('Accordion', () => {
  test.beforeEach(async ({ page }) => gotoComponent(page, 'accordion'));

  test('axe: no serious/critical WCAG 2.1 AA violations', async ({ page }) => {
    await expectNoSeriousViolations(page);
  });

  test('keyboard: Tab between headers; Enter and Space toggle panels', async ({ page }) => {
    const triggers = page.locator('main [role="heading"] > button[aria-expanded], main h3 > button[aria-expanded]');
    const first = triggers.nth(0);
    const second = triggers.nth(1);
    await expectTabReaches(page, first, second);

    const panelId = await second.getAttribute('aria-controls');
    const panel = page.locator(`#${panelId}`);
    await expect(second).toHaveAttribute('aria-expanded', 'false');

    await page.keyboard.press('Enter');
    await expect(second).toHaveAttribute('aria-expanded', 'true');
    await expect(panel).toBeVisible();

    await page.keyboard.press('Space');
    await expect(second).toHaveAttribute('aria-expanded', 'false');
    await expect(panel).toBeHidden();

    // Panel must be labelled by its trigger (region pattern) when expanded.
    await page.keyboard.press('Enter');
    const labelledBy = await panel.getAttribute('aria-labelledby');
    expect(labelledBy).toBe(await second.getAttribute('id'));
  });
});
