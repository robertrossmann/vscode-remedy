import { code, colours } from '@remedy/palette'
import { prescope } from '@remedy/tools'

const makefile = prescope.bind(null, [
  'source.makefile',
  'meta.embedded.block.makefile',
])

const variables = {
  scope: makefile([
    'variable.other',
  ]),
  settings: {
    foreground: code.markuplike.keys,
  },
}

const prerequisites = {
  scope: makefile([
    'meta.scope.prerequisites',
  ]),
  settings: {
    fontStyle: 'italic',
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

const straights = {
  scope: makefile([
    'support.function',
  ]),
  settings: {
    fontStyle: '',
  },
}

export default [
  variables,
  prerequisites,
  targets,
  builtintargets,
  functioncalls,
  straights,
]
