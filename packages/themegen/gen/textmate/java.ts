import { type TMRule } from '@remedy/vscode-types'
import { type ThemeInfo } from '../../index.js'
import { java as javascope } from './scopes/tmscopes.js'

function java(info: ThemeInfo): TMRule[] {
  const variables = {
    scope: javascope([
      'storage.modifier.import',
      'storage.modifier.package',
    ]),
    settings: {
      foreground: info.code.variables,
    },
  }

  return [
    variables,
  ]
}

export default java
