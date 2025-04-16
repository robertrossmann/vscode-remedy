import { TMFontStyle, type TMRule } from '@remedy/vscode-types'
import { type ThemeInfo } from '../../index.js'
import { makefile as makefilescope } from './scopes/tmscopes.js'

function makefile(info: ThemeInfo): TMRule[] {
  const variables = {
    scope: makefilescope([
      'variable.other',
    ]),
    settings: {
      foreground: info.code.keyvaluelike.keys,
    },
  }

  const prerequisites = {
    scope: makefilescope([
      'meta.scope.prerequisites',
    ]),
    settings: {
      foreground: info.code.types,
    },
  }

  const targets = {
    scope: makefilescope([
      'entity.name.function.target',
    ]),
    settings: {
      fontStyle: TMFontStyle.BOLD,
      foreground: info.code.classes,
    },
  }

  const builtintargets = {
    scope: makefilescope([
      'support.function.target',
    ]),
    settings: {
      foreground: info.code.classes,
    },
  }

  const functioncalls = {
    scope: makefilescope([
      'meta.scope.function-call',
    ]),
    settings: {
      foreground: info.code.functions,
    },
  }

  return [
    variables,
    prerequisites,
    targets,
    builtintargets,
    functioncalls,
  ]
}

export default makefile
