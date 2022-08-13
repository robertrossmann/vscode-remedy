import type { InputParams } from './InputParams'
import { shell as shellscope } from '@remedy/tools/tmscopes'
import type { TMRule } from '@remedy/types'

function shell({ code }: InputParams): TMRule[] {
  const variables = {
    scope: shellscope([
      'variable.other.bracket',
      'variable.other.special',
      'variable.other.normal',
    ]),
    settings: {
      foreground: code.constants,
    },
  }

  const numbers = {
    scope: shellscope([
      'variable.other.positional',
    ]),
    settings: {
      foreground: code.primitives,
    },
  }

  return [
    variables,
    numbers,
  ]
}

export default shell
