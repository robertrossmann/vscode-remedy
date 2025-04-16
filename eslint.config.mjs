// eslint-disable-next-line import/no-unresolved
import { defineConfig } from 'eslint/config'
import node from '@strv/eslint-config-node'
import nodeopt from '@strv/eslint-config-node/optional'
import nodestyle from '@strv/eslint-config-node/style'
import ts from '@strv/eslint-config-typescript'
import tsopt from '@strv/eslint-config-typescript/optional'
import tsstyle from '@strv/eslint-config-typescript/style'

const globs = {
  js: '**/*.js',
  mjs: '**/*.mjs',
  ts: '**/*.ts',
}

export default defineConfig([{
  ignores: [
    globs.js,
    'node_modules',
    'samples/*',
    '!eslint.config.mjs',
    '!commitlint.config.mjs',
    '!release.config.cjs',
    '!.remarkrc.cjs',
  ],
}, {
  linterOptions: {
    reportUnusedDisableDirectives: true,
    reportUnusedInlineConfigs: 'warn',
  },
}, {
  files: [globs.ts, globs.mjs],
  extends: [
    node,
    nodeopt,
    nodestyle,
  ],
}, {
  files: [globs.ts],
  extends: [
    ts,
    tsopt,
    tsstyle,
  ],
}])
