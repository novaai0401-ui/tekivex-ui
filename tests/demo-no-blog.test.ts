import { describe, it, expect } from 'vitest';

// The standalone Blog / CMS template and all blog links were removed from the
// demo site. These guards make sure that AI-generated blog content does not
// quietly creep back into the navigation, routing, or templates.
//
// Demo sources are loaded as raw strings via Vite's import.meta.glob so the
// test needs no Node typings and stays in sync with the actual files on disk.

const sources = (import.meta as unknown as {
  glob: (pattern: string, opts: Record<string, unknown>) => Record<string, string>;
}).glob('../demo/**/*.{ts,tsx}', { query: '?raw', import: 'default', eager: true });

function source(suffix: string): string {
  const key = Object.keys(sources).find(k => k.endsWith(suffix));
  if (!key) throw new Error(`demo source not found: ${suffix}`);
  return sources[key];
}

describe('demo site has no blog content', () => {
  it('does not ship a BlogTemplate file', () => {
    const hasBlogTemplate = Object.keys(sources).some(k => k.endsWith('BlogTemplate.tsx'));
    expect(hasBlogTemplate).toBe(false);
  });

  it('does not register a blog route or import in App.tsx', () => {
    const app = source('demo/App.tsx');
    expect(app).not.toMatch(/templates\/blog/);
    expect(app).not.toMatch(/BlogTemplate/);
  });

  it('has no blog link in the sidebar navigation', () => {
    const sidebar = source('layout/Sidebar.tsx');
    expect(sidebar).not.toMatch(/templates\/blog/);
    expect(sidebar).not.toMatch(/Blog/);
  });

  it('has no blog title in the header map', () => {
    const header = source('layout/Header.tsx');
    expect(header).not.toMatch(/templates\/blog/);
  });

  it('has no blog section or links inside the portfolio template', () => {
    const portfolio = source('templates/PortfolioTemplate.tsx');
    expect(portfolio).not.toMatch(/Blog/);
    expect(portfolio).not.toMatch(/Latest Writing/);
  });

  it('keeps every template file referenced in App.tsx', () => {
    const app = source('demo/App.tsx');
    const templateNames = Object.keys(sources)
      .filter(k => /templates\/\w+Template\.tsx$/.test(k))
      .map(k => k.split('/').pop()!.replace(/\.tsx$/, ''));
    expect(templateNames.length).toBeGreaterThan(0);
    for (const name of templateNames) {
      expect(app).toContain(name);
    }
  });
});
