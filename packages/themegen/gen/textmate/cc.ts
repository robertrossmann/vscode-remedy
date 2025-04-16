import { type TMRule } from '@remedy/vscode-types'
import { type ThemeInfo } from '../../index.js'
import { cc as cscope } from './scopes/tmscopes.js'

function cc(info: ThemeInfo): TMRule[] {
  const punctuation = {
    scope: cscope([
      'storage.modifier.array.bracket.square',
    ]),
    settings: {
      foreground: info.code.punctuation,
    },
  }

  const primitives = {
    scope: cscope([
      'keyword.other.unit',
    ]),
    settings: {
      foreground: info.code.primitives,
    },
  }

  return [
    punctuation,
    primitives,
  ]
}


export default cc
