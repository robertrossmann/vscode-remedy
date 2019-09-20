import { code, colours } from '@remedy/palette'
import { css } from '@remedy/tools/tmscopes'

const ids = {
  scope: css([
    'entity.other.attribute-name.id',
  ]),
  settings: {
    foreground: colours.normal.red.hex(),
  },
}

const tags = {
  scope: css([
    'entity.name.tag',
  ]),
  settings: {
    foreground: code.classes,
  },
}

const classes = {
  scope: css([
    'entity.other.attribute-name.class',
  ]),
  settings: {
    foreground: colours.bright.green.hex(),
  },
}

const pseudo = {
  scope: css([
    'entity.other.attribute-name.pseudo-element',
  ]),
  settings: {
    foreground: colours.normal.cyan.hex(),
  },
}

const variables = {
  scope: css([
    'variable',
  ]),
  settings: {
    foreground: code.constants,
  },
}

const constants = {
  scope: css([
    'constant.numeric',
    'constant.other.color',
    'keyword.other.unit',
    'support.constant.property-value',
  ]),
  settings: {
    foreground: code.primitives,
  },
}

const functions = {
  scope: css([
    'support.function',
  ]),
  settings: {
    foreground: code.functions,
  },
}

export default [
  tags,
  classes,
  ids,
  pseudo,
  variables,
  constants,
  functions,
]
