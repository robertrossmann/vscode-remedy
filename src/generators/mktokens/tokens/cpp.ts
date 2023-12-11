import { type InputParams } from './InputParams'
import { cpp as cppscope } from '@remedy/tools/tmscopes'
import { type TMRule } from '@remedy/types'

function cpp({ code }: InputParams): TMRule[] {
  const language = {
    scope: cppscope([
      'storage.type.namespace.definition',
    ]),
    settings: {
      foreground: code.language,
    },
  }

  const classes = {
    scope: cppscope([
      'entity.name.type.namespace',
    ]),
    settings: {
      foreground: code.classes,
    },
  }

  return [
    classes,
    language,
  ]
}

export default cpp
