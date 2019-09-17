import { code } from '@remedy/palette'
import { prescope } from '@remedy/tools'

const shell = prescope.bind(null, [
  'source.shell',
  'meta.embedded.block.shellscript',
])

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
