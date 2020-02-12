import { css as cssscope } from '@remedy/tools/tmscopes'

function css({ code, colours }) {
  const ids = {
    scope: cssscope([
      'entity.other.attribute-name.id',
    ]),
    settings: {
      foreground: colours.normal.red.hex(),
    },
  }

  const tags = {
    scope: cssscope([
      'entity.name.tag',
    ]),
    settings: {
      foreground: code.classes,
    },
  }

  const classes = {
    scope: cssscope([
      'entity.other.attribute-name.class',
    ]),
    settings: {
      foreground: colours.bright.green.hex(),
    },
  }

  const pseudo = {
    scope: cssscope([
      'entity.other.attribute-name.pseudo-element',
    ]),
    settings: {
      foreground: colours.normal.cyan.hex(),
    },
  }

  const variables = {
    scope: cssscope([
      'variable',
    ]),
    settings: {
      foreground: code.constants,
    },
  }

  const constants = {
    scope: cssscope([
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
    scope: cssscope([
      'support.function',
    ]),
    settings: {
      foreground: code.functions,
    },
  }

  return [
    tags,
    classes,
    ids,
    pseudo,
    variables,
    constants,
    functions,
  ]
}

export default css
