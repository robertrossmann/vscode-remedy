import { code, colours } from '@remedy/palette'
import { makefile } from '@remedy/tools/tmscopes'

const variables = {
  scope: makefile([
    'variable.other',
  ]),
  settings: {
    foreground: code.keyvaluelike.keys,
  },
}

const prerequisites = {
  scope: makefile([
    'meta.scope.prerequisites',
  ]),
  settings: {
    foreground: colours.normal.yellow.hex(),
  },
}

const targets = {
  scope: makefile([
    'entity.name.function.target',
  ]),
  settings: {
    fontStyle: 'bold',
    foreground: colours.bright.yellow.hex(),
  },
}

const builtintargets = {
  scope: makefile([
    'support.function.target',
  ]),
  settings: {
    foreground: colours.bright.yellow.hex(),
  },
}

const functioncalls = {
  scope: makefile([
    'meta.scope.function-call',
  ]),
  settings: {
    foreground: colours.normal.cyan.hex(),
  },
}

export default [
  variables,
  prerequisites,
  targets,
  builtintargets,
  functioncalls,
]
