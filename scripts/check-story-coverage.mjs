#!/usr/bin/env node
// ─────────────────────────────────────────────────────────────────────────────
// check-story-coverage.mjs
//
// Counts Tkx*.tsx components under src/components and story files under
// packages/tkx-book/stories, prints coverage %, and fails (exit 1) if any
// component in TOP_20 lacks a story.
//
// Story matching: a component `TkxFoo` is covered when any story file
// (or `stories/index.ts`) imports or references `TkxFoo` as a word.
//
// Usage:  node scripts/check-story-coverage.mjs
// ─────────────────────────────────────────────────────────────────────────────

import { readdirSync, readFileSync } from 'node:fs';
import { join, resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const COMPONENTS_DIR = join(ROOT, 'src', 'components');
const STORIES_DIR = join(ROOT, 'packages', 'tkx-book', 'stories');

// Components that MUST have a story. Keep in sync with the README.
export const TOP_20 = [
  'TkxButton',
  'TkxInput',
  'TkxSelect',
  'TkxCheckbox',
  'TkxRadio',
  'TkxToggle',
  'TkxTextarea',
  'TkxModal',
  'TkxDrawer',
  'TkxTooltip',
  'TkxTabs',
  'TkxAccordion',
  'TkxMenu',
  'TkxBreadcrumb',
  'TkxPagination',
  'TkxTable',
  'TkxDataGrid',
  'TkxDatePicker',
  'TkxSlider',
  'TkxToast',
];

const components = readdirSync(COMPONENTS_DIR)
  .filter((f) => /^Tkx[A-Za-z0-9]+\.tsx$/.test(f))
  .map((f) => f.replace(/\.tsx$/, ''))
  .sort();

const storyFiles = readdirSync(STORIES_DIR).filter((f) => /\.(tsx|ts)$/.test(f) && f !== 'index.ts');
const storySource = storyFiles.map((f) => readFileSync(join(STORIES_DIR, f), 'utf8')).join('\n');

// TkxToast is consumed via TkxToastProvider / useToast, TkxRadio via
// TkxRadioGroup, etc. — a prefix match on the component name handles those.
const covered = components.filter((c) => new RegExp(`\\b${c}(Provider|Group|List|Panel|Panels|Header|Body|Footer)?\\b`).test(storySource));
const pct = components.length ? Math.round((covered.length / components.length) * 1000) / 10 : 0;

console.log(`Components : ${components.length} (src/components/Tkx*.tsx)`);
console.log(`Story files: ${storyFiles.length} (packages/tkx-book/stories/*.tsx)`);
console.log(`Covered    : ${covered.length}/${components.length} components referenced by a story (${pct}%)`);

const missingTop = TOP_20.filter((c) => !covered.includes(c));
const unknownTop = TOP_20.filter((c) => !components.includes(c));

if (unknownTop.length) {
  console.error(`\nTOP_20 names with no matching component file: ${unknownTop.join(', ')}`);
}
if (missingTop.length) {
  console.error(`\nFAIL — TOP_20 components without a story (${missingTop.length}):`);
  for (const c of missingTop) console.error(`  - ${c}`);
  process.exit(1);
}

console.log(`\nOK — all ${TOP_20.length} TOP_20 components have a story.`);
