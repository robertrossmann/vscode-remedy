import { type InputParams } from './InputParams'
import { pug as pugscope } from '@remedy/tools/tmscopes'
import { type TMRule } from '@remedy/types'

function pug({ code, colours }: InputParams): TMRule[] {
  const language = {
    scope: pugscope([
      'storage.type.import.include',
      'attribute_value',
    ]),
    settings: {
      foreground: code.language,
    },
  }

  const classes = {
    scope: pugscope([
      'entity.other.attribute-name.class',
    ]),
    settings: {
      foreground: code.classes,
    },
  }

  const ids = {
    scope: pugscope([
      'entity.other.attribute-name.id',
    ]),
    settings: {
      foreground: colours.normal.green.hex(),
    },
  }

  const attributes = {
    scope: pugscope([
      'entity.other.attribute-name.tag',
      'entity.name.label',
    ]),
    settings: {
      foreground: code.constants,
    },
  }

  const punctuation = {
    scope: pugscope([
      'meta.tag.other constant.name.attribute.tag.pug',
    ]),
    settings: {
      foreground: code.punctuation,
    },
  }

  const comments = {
    scope: pugscope(['string.comment']),
    settings: {
      foreground: code.comments,
    },
  }

  const functions = {
    scope: pugscope(['constant.language.name.generic.filter']),
    settings: {
      foreground: code.functions,
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
