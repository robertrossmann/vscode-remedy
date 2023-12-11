import { type InputParams } from './InputParams'
import { cc as cscope } from '@remedy/tools/tmscopes'
import { type TMRule } from '@remedy/types'

function cc({ code }: InputParams): TMRule[] {
  const punctuation = {
    scope: cscope([
      'storage.modifier.array.bracket.square',
    ]),
    settings: {
      foreground: code.punctuation,
    },
  }

  const primitives = {
    scope: cscope([
      'keyword.other.unit',
    ]),
    settings: {
      foreground: code.primitives,
    },
  }

  return [
    punctuation,
    primitives,
  ]
}


export default cc
