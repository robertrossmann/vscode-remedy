'use strict'

const rules = {
  // If your editor cannot show these to you, occasionally turn this off and run the linter
  'no-warning-comments': 0,
  'max-len': ['warn', 120],

  '@typescript-eslint/explicit-function-return-type': 'off',
  '@typescript-eslint/naming-convention': 'off',
  'node/no-unsupported-features/es-syntax': 'off',
}

/** @type {import("eslint").Linter.Config} */
module.exports = {
  reportUnusedDisableDirectives: true,
  ignorePatterns: [
    'samples',
    '*.js',
    '*.d.ts',
    '!.*.js',
    '!*.config.js',
    'node_modules',
  ],

  extends: [
    '@strv/node/v16',
    '@strv/node/optional',
    '@strv/node/style',
  ],
  rules,

  overrides: [{
    files: ['**/*.ts', '**/*.mts'],
    extends: [
      '@strv/node/v16',
      '@strv/node/optional',
      '@strv/node/style',
      '@strv/typescript',
      '@strv/typescript/style',
    ],
    parserOptions: {
      project: './tsconfig.json',
      ecmaVersion: 2021,
    },
    rules,
  }],
}
