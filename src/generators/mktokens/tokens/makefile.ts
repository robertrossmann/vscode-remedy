import type { InputParams } from './InputParams'
import { makefile as makefilescope } from '@remedy/tools/tmscopes'
import type { TMRule } from '@remedy/types'

function makefile({ code, colours }: InputParams): TMRule[] {
  const variables = {
    scope: makefilescope([
      'variable.other',
    ]),
    settings: {
      foreground: code.keyvaluelike.keys,
    },
  }

  const prerequisites = {
    scope: makefilescope([
      'meta.scope.prerequisites',
    ]),
    settings: {
      foreground: colours.normal.yellow.hex(),
    },
  }

  const targets = {
    scope: makefilescope([
      'entity.name.function.target',
    ]),
    settings: {
      fontStyle: 'bold',
      foreground: colours.bright.yellow.hex(),
    },
  }

  const builtintargets = {
    scope: makefilescope([
      'support.function.target',
    ]),
    settings: {
      foreground: colours.bright.yellow.hex(),
    },
  }

  const functioncalls = {
    scope: makefilescope([
      'meta.scope.function-call',
    ]),
    settings: {
      foreground: colours.normal.cyan.hex(),
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
