import { type TMRule } from '@remedy/vscode-types'
import { type ThemeInfo } from '../../index.js'
import { pug as pugscope } from './scopes/tmscopes.js'

function pug(info: ThemeInfo): TMRule[] {
  const language = {
    scope: pugscope([
      'storage.type.import.include',
      'attribute_value',
    ]),
    settings: {
      foreground: info.code.language,
    },
  }

  const classes = {
    scope: pugscope([
      'entity.other.attribute-name.class',
    ]),
    settings: {
      foreground: info.code.classes,
    },
  }

  const ids = {
    scope: pugscope([
      'entity.other.attribute-name.id',
    ]),
    settings: {
      foreground: info.code.strings,
    },
  }

  const attributes = {
    scope: pugscope([
      'entity.other.attribute-name.tag',
      'entity.name.label',
    ]),
    settings: {
      foreground: info.code.constants,
    },
  }

  const punctuation = {
    scope: pugscope([
      'meta.tag.other constant.name.attribute.tag.pug',
    ]),
    settings: {
      foreground: info.code.punctuation,
    },
  }

  const comments = {
    scope: pugscope(['string.comment']),
    settings: {
      foreground: info.code.comments,
    },
  }

  const functions = {
    scope: pugscope(['constant.language.name.generic.filter']),
    settings: {
      foreground: info.code.functions,
    },
  }

  return [
    attributes,
    ids,
    classes,
    language,
    punctuation,
    comments,
    functions,
  ]
}

export default pug
