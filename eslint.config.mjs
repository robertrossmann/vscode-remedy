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
  dts: '**/*.d.ts',
}

/** @type {Array<import("eslint").Linter.Config>} */
const config = [
  { linterOptions: {
    reportUnusedDisableDirectives: true,
  } },

  { files: [globs.ts, globs.dts, globs.mjs], ...node },
  { files: [globs.ts, globs.dts, globs.mjs], ...nodeopt },
  { files: [globs.ts, globs.dts, globs.mjs], ...nodestyle },

  { files: [globs.ts, globs.dts], ...ts },
  { files: [globs.ts, globs.dts], ...tsopt },
  { files: [globs.ts, globs.dts], ...tsstyle },
  { ignores: [
    globs.js,
    'node_modules',
    'samples',
  ] },
]

export default config
