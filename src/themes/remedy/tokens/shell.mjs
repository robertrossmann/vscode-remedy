import { code } from '@remedy/palette'
import { shell } from '@remedy/tools/tmscopes'

const variables = {
  scope: shell([
    'variable.other.bracket',
    'variable.other.special',
    'variable.other.normal',
  ]),
  settings: {
    foreground: code.constants,
  },
}

const numbers = {
  scope: shell([
    'variable.other.positional',
  ]),
  settings: {
    foreground: code.primitives,
  },
}

export default [
  variables,
  numbers,
]
