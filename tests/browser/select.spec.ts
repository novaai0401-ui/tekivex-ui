import { test, expect } from '@playwright/test';
import { gotoComponent, expectNoSeriousViolations } from './helpers';

// APG: Select-only combobox — Enter/Space/ArrowDown open the listbox,
// arrows move the active option (aria-activedescendant), Enter selects,
// Escape closes and keeps focus on the combobox.

// D2 (fixed): aria-multiselectable now lives on the listbox only, and the
// placeholder is painted in textMuted with no extra opacity.

test.describe('Select', () => {
  test.beforeEach(async ({ page }) => gotoComponent(page, 'select'));

  test('axe: no serious/critical WCAG 2.1 AA violations (closed)', async ({ page }) => {
    await expectNoSeriousViolations(page);
  });

  test('axe: no serious/critical WCAG 2.1 AA violations (listbox open)', async ({ page }) => {
    const combo = page.getByRole('combobox').first();
    await combo.focus();
    await page.keyboard.press('ArrowDown');
    await expect(page.getByRole('listbox').first()).toBeVisible();
    // Scan only the open listbox popup so the closed-state defect above does
    // not mask problems inside the popup itself.
    await expectNoSeriousViolations(page, { include: '[role="listbox"]' });
  });

  test('keyboard: ArrowDown opens, arrows move active option, Enter selects, Escape closes', async ({ page }) => {
    const combo = page.getByRole('combobox').first();
    await combo.focus();
    await expect(combo).toHaveAttribute('aria-expanded', 'false');

    await page.keyboard.press('ArrowDown');
    await expect(combo).toHaveAttribute('aria-expanded', 'true');
    const listbox = page.getByRole('listbox').first();
    await expect(listbox).toBeVisible();

    // Focus stays on the combobox; the active option is conveyed via
    // aria-activedescendant.
    await expect(combo).toBeFocused();
    const first = await combo.getAttribute('aria-activedescendant');
    expect(first).toBeTruthy();
    await page.keyboard.press('ArrowDown');
    const second = await combo.getAttribute('aria-activedescendant');
    expect(second).toBeTruthy();
    expect(second).not.toBe(first);

    const activeText = (await page.locator(`#${second}`).textContent())?.trim();
    await page.keyboard.press('Enter');
    await expect(combo).toHaveAttribute('aria-expanded', 'false');
    await expect(combo).toContainText(activeText!.slice(0, 12));
    await expect(combo).toBeFocused();

    // Escape closes an open listbox and keeps focus on the combobox.
    await page.keyboard.press('ArrowDown');
    await expect(combo).toHaveAttribute('aria-expanded', 'true');
    await page.keyboard.press('Escape');
    await expect(combo).toHaveAttribute('aria-expanded', 'false');
    await expect(combo).toBeFocused();
  });
});
