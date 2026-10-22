import { test, expect } from '@playwright/test';
import { gotoComponent, expectNoSeriousViolations } from './helpers';

// APG: Slider — focusable role=slider with valuemin/max/now, ArrowRight/Up
// increase by one step, ArrowLeft/Down decrease, Home/End jump to min/max.
test.describe('Slider', () => {
  test.beforeEach(async ({ page }) => gotoComponent(page, 'slider'));

  test('axe: no serious/critical WCAG 2.1 AA violations', async ({ page }) => {
    await expectNoSeriousViolations(page);
  });

  test('keyboard: arrows step the value, Home/End jump to min/max', async ({ page }) => {
    const slider = page.getByRole('slider').first();
    await slider.focus();
    await expect(slider).toBeFocused();
    const now = async () => Number(await slider.getAttribute('aria-valuenow'));
    const min = Number(await slider.getAttribute('aria-valuemin'));
    const max = Number(await slider.getAttribute('aria-valuemax'));
    const start = await now();

    await page.keyboard.press('ArrowRight');
    const afterRight = await now();
    expect(afterRight).toBeGreaterThan(start);
    const step = afterRight - start;
    await page.keyboard.press('ArrowUp');
    expect(await now()).toBe(afterRight + step);
    await page.keyboard.press('ArrowLeft');
    await page.keyboard.press('ArrowDown');
    expect(await now()).toBe(start);

    await page.keyboard.press('End');
    expect(await now()).toBe(max);
    await page.keyboard.press('Home');
    expect(await now()).toBe(min);
  });

  test('a11y: every slider has an accessible name and aria-valuenow within [min,max]', async ({ page }) => {
    const problems = await page.getByRole('slider').evaluateAll(els =>
      els
        .map(el => ({
          name: el.getAttribute('aria-label') || el.getAttribute('aria-labelledby'),
          min: Number(el.getAttribute('aria-valuemin')),
          max: Number(el.getAttribute('aria-valuemax')),
          now: Number(el.getAttribute('aria-valuenow')),
        }))
        .filter(s => !s.name || s.now < s.min || s.now > s.max),
    );
    expect(problems, JSON.stringify(problems)).toEqual([]);
  });
});
