import { defineConfig, devices } from '@playwright/test';

// ─────────────────────────────────────────────────────────────────────────────
// Playwright real-browser accessibility + keyboard config.
//
// Strategy: spin up the demo dev server and, for each of the top-20
// components, (a) run axe-core (WCAG 2.1 A/AA tags) against the live demo
// page and (b) drive the widget with a real keyboard following the WAI-ARIA
// APG pattern for that widget — in Chromium, Firefox AND WebKit. This backs
// the library's WCAG/APG claims with real browsers instead of jsdom only.
//
// Run:
//   npx playwright test -c playwright.browser.config.ts
//   npx playwright test -c playwright.browser.config.ts --project=webkit
//
// Browsers: `npx playwright install` is the normal path. If the matching
// builds are not installed, point at an existing Playwright-built browser via
// TKX_PW_CHROMIUM / TKX_PW_FIREFOX / TKX_PW_WEBKIT (absolute executable path).
// See docs/BROWSER-MATRIX.md.
// ─────────────────────────────────────────────────────────────────────────────

const exe = (envName: string) =>
  process.env[envName] ? { launchOptions: { executablePath: process.env[envName] } } : {};

export default defineConfig({
  testDir: './tests/browser',
  outputDir: './playwright-report/browser-results',
  fullyParallel: true,
  // The demo pages are heavy (full component library chunk); Firefox needs
  // headroom on first navigation.
  timeout: 60_000,
  workers: process.env.CI ? 2 : 4,
  forbidOnly: !!process.env.CI,
  // One retry absorbs first-navigation load timeouts on the heavy demo bundle
  // (seen in Firefox); genuine a11y/keyboard failures reproduce on retry.
  retries: 1,
  reporter: [
    ['list'],
    ['html', { outputFolder: 'playwright-report/browser', open: 'never' }],
  ],
  use: {
    baseURL: 'http://localhost:5173',
    trace: 'retain-on-failure',
    viewport: { width: 1280, height: 900 },
  },
  webServer: {
    // demo/vite.config.ts pins port 5174 and opens a browser tab; override
    // both so the server lands on 5173 and stays headless.
    command: 'npm run dev:demo -- --port 5173 --strictPort',
    port: 5173,
    reuseExistingServer: !process.env.CI,
    timeout: 90_000,
    env: { BROWSER: 'none' },
  },
  projects: [
    { name: 'chromium', use: { ...devices['Desktop Chrome'], ...exe('TKX_PW_CHROMIUM') } },
    { name: 'firefox', use: { ...devices['Desktop Firefox'], ...exe('TKX_PW_FIREFOX') } },
    { name: 'webkit', use: { ...devices['Desktop Safari'], ...exe('TKX_PW_WEBKIT') } },
  ],
});
