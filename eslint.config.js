// ESLint 9 flat config. Replaces .eslintrc.cjs, which ESLint 9 silently
// refused to load — `npm run lint` had been failing at startup, so the CI
// "Lint" job and every contributor's local lint were both dead.
//
// Rules are intentionally the same set the legacy file declared, so this is a
// tooling repair, not a policy change.
import js from '@eslint/js';
import tsParser from '@typescript-eslint/parser';
import tsPlugin from '@typescript-eslint/eslint-plugin';
import reactHooks from 'eslint-plugin-react-hooks';
import globals from 'globals';

export default [
  {
    ignores: ['dist/**', 'node_modules/**', 'coverage/**', 'playwright-report/**', '**/*.d.ts'],
  },
  js.configs.recommended,
  {
    files: ['src/**/*.{ts,tsx}', 'index.ts'],
    languageOptions: {
      parser: tsParser,
      parserOptions: { ecmaVersion: 2020, sourceType: 'module', ecmaFeatures: { jsx: true } },
      globals: { ...globals.browser, ...globals.es2020, ...globals.node },
    },
    plugins: {
      '@typescript-eslint': tsPlugin,
      'react-hooks': reactHooks,
    },
    rules: {
      ...tsPlugin.configs.recommended.rules,
      // eslint-plugin-react-hooks v7 "recommended" also enables the React
      // Compiler rule set (refs, purity, set-state-in-effect…). The legacy
      // config only had the two classic rules; enabling the compiler set is
      // a separate decision for a separate PR, so only those two are on.
      '@typescript-eslint/no-explicit-any': 'error',
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
      'no-console': 'warn',
      // TypeScript already reports these; the core rules misfire on TS syntax.
      'no-undef': 'off',
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_', varsIgnorePattern: '^_' }],
    },
  },
];
