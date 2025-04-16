import { type TMRule } from '@remedy/vscode-types'
import { type ThemeInfo } from '../../index.js'
import { cs as csscope } from './scopes/tmscopes.js'

function csharp(info: ThemeInfo): TMRule[] {
  const classes = {
    scope: csscope([
      'entity.name.type.namespace',
    ]),
    settings: {
      foreground: info.code.classes,
    },
  }

  const types = {
    scope: csscope([
      'keyword.type',
    ]),
    settings: {
      foreground: info.code.types,
    },
  }
  return [
    classes,
    types,
  ]
}

export default csharp
