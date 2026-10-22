import { test, expect } from '@playwright/test';
import { gotoComponent, expectNoSeriousViolations, PORTAL_THEME_DEFECT } from './helpers';

// APG: Menu button — Enter/Space/ArrowDown open the menu and make the first
// item active, ArrowDown/Up move with wrap, Home/End jump, Escape closes and
// returns focus to the button. TkxMenu uses the aria-activedescendant model:
// DOM focus stays on the role=menu container.

// DEFECT (TkxMenu trigger): the trigger is a <span role="button" tabindex="0">
// wrapping the caller's <TkxButton>, so a real <button> sits inside a
// role=button → axe `nested-interactive` (serious) and two Tab stops for one
// control. Source: src/components/TkxMenu.tsx (~line 1040, trigger <span>).
const MENU_TRIGGER_DEFECT = 'TkxMenu trigger wrapper is role=button around a focusable child (nested-interactive)';

const TRIGGER = '[role="button"][aria-haspopup="menu"]';
const ITEMS = '[role="menuitem"]:not([aria-disabled="true"]), [role="menuitemcheckbox"]:not([aria-disabled="true"]), [role="menuitemradio"]:not([aria-disabled="true"])';

test.describe('Menu', () => {
  test.beforeEach(async ({ page }) => gotoComponent(page, 'menu'));

  test('axe: no serious/critical WCAG 2.1 AA violations (closed)', async ({ page }) => {
    test.fixme(true, MENU_TRIGGER_DEFECT);
    await expectNoSeriousViolations(page);
  });

  test('axe: no serious/critical WCAG 2.1 AA violations (open)', async ({ page }) => {
    const trigger = page.locator(TRIGGER).first();
    await trigger.focus();
    await page.keyboard.press('Enter');
    await expect(page.getByRole('menu').first()).toBeVisible();
    // DEFECT: see PORTAL_THEME_DEFECT in helpers.ts — menu shortcut hints
    // (var(--tkx-textMuted) at opacity .8) measure 3.89:1 on the dark :root
    // surface.
    test.fixme(true, PORTAL_THEME_DEFECT);
    await expectNoSeriousViolations(page, { include: '[role="menu"]' });
  });

  test('keyboard: arrows move active item with wrap, Home/End, Escape returns focus', async ({ page }) => {
    const trigger = page.locator(TRIGGER).first();
    await trigger.focus();
    await expect(trigger).toHaveAttribute('aria-haspopup', 'menu');
    await page.keyboard.press('Enter');
    await expect(trigger).toHaveAttribute('aria-expanded', 'true');

    const menu = page.getByRole('menu').first();
    await expect(menu).toBeVisible();
    await expect(menu).toBeFocused();
    const items = menu.locator(ITEMS);
    const count = await items.count();
    expect(count).toBeGreaterThan(1);
    const ids = await items.evaluateAll(els => els.map(e => e.id));
    const active = () => menu.getAttribute('aria-activedescendant');

    await page.keyboard.press('ArrowDown');
    await expect.poll(active).toBe(ids[0]);
    await page.keyboard.press('ArrowDown');
    await expect.poll(active).toBe(ids[1]);
    await page.keyboard.press('End');
    await expect.poll(active).toBe(ids[count - 1]);
    await page.keyboard.press('ArrowDown'); // wrap
    await expect.poll(active).toBe(ids[0]);
    await page.keyboard.press('ArrowUp'); // wrap back
    await expect.poll(active).toBe(ids[count - 1]);
    await page.keyboard.press('Home');
    await expect.poll(active).toBe(ids[0]);

    await page.keyboard.press('Escape');
    await expect(menu).toBeHidden();
    await expect(trigger).toHaveAttribute('aria-expanded', 'false');
    await expect(trigger).toBeFocused();

    // ArrowDown also opens.
    await page.keyboard.press('ArrowDown');
    await expect(page.getByRole('menu').first()).toBeVisible();
    await page.keyboard.press('Escape');
  });

  test('keyboard: opening with Enter makes the first item active (APG)', async ({ page }) => {
    // DEFECT (TkxMenu): APG menu button — "Enter: opens the menu and places
    // focus on the first menu item". TkxMenu opens with no active item
    // (aria-activedescendant unset) until the user presses ArrowDown.
    // Source: src/components/TkxMenu.tsx openMenu()/handleTriggerKeyDown (~line 1032).
    test.fixme(true, 'TkxMenu opens with no active item; APG requires first item active on Enter/ArrowDown');
    const trigger = page.locator(TRIGGER).first();
    await trigger.focus();
    await page.keyboard.press('Enter');
    const menu = page.getByRole('menu').first();
    await expect(menu).toBeVisible();
    const firstId = await menu.locator(ITEMS).first().getAttribute('id');
    await expect(menu).toHaveAttribute('aria-activedescendant', firstId!);
  });

  test('keyboard: the trigger is a single Tab stop', async ({ page }) => {
    test.fixme(true, MENU_TRIGGER_DEFECT);
    const trigger = page.locator(TRIGGER).first();
    await trigger.focus();
    await page.keyboard.press('Tab');
    expect(await trigger.evaluate(el => el.contains(document.activeElement))).toBe(false);
  });
});
