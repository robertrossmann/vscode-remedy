import { shell as shellscope } from '@remedy/tools/tmscopes'

function shell({ code }) {
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
