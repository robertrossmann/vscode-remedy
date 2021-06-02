import { css as cssscope } from '@remedy/tools/tmscopes'

function css({ code, colours }) {
  const ids = {
    scope: cssscope([
      'entity.other.attribute-name.id',
    ]),
    settings: {
      foreground: colours.normal.green.hex(),
    },
  }

  const tags = {
    scope: cssscope([
      'entity.name.tag',
    ]),
    settings: {
      foreground: code.primitives,
    },
  }

  const properties = {
    scope: cssscope([
      'support.type.property-name',
    ]),
    settings: {
      foreground: code.plain,
    },
  }

  const classes = {
    scope: cssscope([
      'entity.other.attribute-name.class',
    ]),
    settings: {
      foreground: code.classes,
    },
  }

  const pseudo = {
    scope: cssscope([
      'entity.other.attribute-name.pseudo-element',
    ]),
    settings: {
      foreground: code.preprocessor,
    },
  }

  const variables = {
    scope: cssscope([
      'variable',
    ]),
    settings: {
      foreground: code.escapes,
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
    properties,
    constants,
    functions,
  ]
}

export default css
