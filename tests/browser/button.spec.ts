import { test, expect } from '@playwright/test';
import { gotoComponent, expectNoSeriousViolations, expectTabReaches } from './helpers';

// APG: Button — Tab reaches it; Enter and Space both activate.
test.describe('Button', () => {
  test.beforeEach(async ({ page }) => gotoComponent(page, 'button'));

  test('axe: no serious/critical WCAG 2.1 AA violations', async ({ page }) => {
    // Covers D1 (fixed): the solid `warning` scheme now resolves its accent to a
    // literal hex before the contrast check, so it gets dark text (was 2.37:1).
    await expectNoSeriousViolations(page, {
      // Demo-authored: the "Build Your Own — createTheme Brand Colors" example
      // paints arbitrary inline `background`/`color` overrides (#ff6b35,
      // #2ec4b6 with white text, demo/docs/ButtonPage.tsx:416-427) to show
      // brand colours; those are the demo's own styles, not TkxButton's.
      // (axe ignores an exclude that equals the include root, so the buttons
      // inside the region are excluded rather than the region itself. Only
      // the demo's `background:` shorthand is matched — TkxButton's own solid
      // fill is `background-color:`, so the real brand-theme buttons stay in.)
      exclude: ['[aria-label="Live demo: Build Your Own — createTheme Brand Colors"] button[style*="background: "]'],
    });
  });

  test('keyboard: Tab reaches buttons in order; Enter and Space activate', async ({ page }) => {
    const solid = page.getByRole('button', { name: 'Solid', exact: true });
    const outline = page.getByRole('button', { name: 'Outline', exact: true });
    await expectTabReaches(page, solid, outline);

    // Count real click events dispatched by the browser from keyboard activation.
    await outline.evaluate(el => {
      (window as any).__clicks = 0;
      el.addEventListener('click', () => ((window as any).__clicks += 1));
    });
    await page.keyboard.press('Enter');
    await page.keyboard.press('Space');
    expect(await page.evaluate(() => (window as any).__clicks)).toBe(2);
  });

  test('keyboard: disabled buttons are not in the tab order or are announced disabled', async ({ page }) => {
    const disabled = page.locator('main button[disabled], main button[aria-disabled="true"]').first();
    await expect(disabled).toBeVisible();
    const info = await disabled.evaluate(el => {
      (el as HTMLElement).focus();
      return { nativeDisabled: (el as HTMLButtonElement).disabled, focused: document.activeElement === el };
    });
    if (info.nativeDisabled) {
      // Native disabled: must be removed from the tab order entirely.
      expect(info.focused).toBe(false);
    } else {
      // aria-disabled only (APG allows focusable-but-inert): must be announced disabled.
      await expect(disabled).toHaveAttribute('aria-disabled', 'true');
    }
  });
});
