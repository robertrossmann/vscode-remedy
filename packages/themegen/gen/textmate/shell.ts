import { type TMRule } from '@remedy/vscode-types'
import { type ThemeInfo } from '../../index.js'
import { shell as shellscope } from './scopes/tmscopes.js'

function shell(info: ThemeInfo): TMRule[] {
  const variables = {
    scope: shellscope([
      'variable.other.bracket',
      'variable.other.special',
      'variable.other.normal',
    ]),
    settings: {
      foreground: info.code.constants,
    },
  }

  const numbers = {
    scope: shellscope([
      'variable.other.positional',
    ]),
    settings: {
      foreground: info.code.primitives,
    },
  }

  return [
    variables,
    numbers,
  ]
}

export default shell
