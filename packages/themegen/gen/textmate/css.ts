import { type TMRule } from '@remedy/vscode-types'
import { type ThemeInfo } from '../../index.js'
import { css as cssscope } from './scopes/tmscopes.js'

function css(info: ThemeInfo): TMRule[] {
  const ids = {
    scope: cssscope([
      'entity.other.attribute-name.id',
    ]),
    settings: {
      foreground: info.code.strings,
    },
  }

  const tags = {
    scope: cssscope([
      'entity.name.tag',
    ]),
    settings: {
      foreground: info.code.primitives,
    },
  }

  const properties = {
    scope: cssscope([
      'support.type.property-name',
    ]),
    settings: {
      foreground: info.code.plain,
    },
  }

  const classes = {
    scope: cssscope([
      'entity.other.attribute-name.class',
    ]),
    settings: {
      foreground: info.code.classes,
    },
  }

  const pseudo = {
    scope: cssscope([
      'entity.other.attribute-name.pseudo-element',
    ]),
    settings: {
      foreground: info.code.preprocessor,
    },
  }

  const variables = {
    scope: cssscope([
      'variable',
    ]),
    settings: {
      foreground: info.code.escapes,
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
      foreground: info.code.primitives,
    },
  }

  const functions = {
    scope: cssscope([
      'support.function',
    ]),
    settings: {
      foreground: info.code.functions,
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
