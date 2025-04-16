import { type TMRule } from '@remedy/vscode-types'
import { type ThemeInfo } from '../../index.js'
import { cpp as cppscope } from './scopes/tmscopes.js'

function cpp(info: ThemeInfo): TMRule[] {
  const language = {
    scope: cppscope([
      'storage.type.namespace.definition',
    ]),
    settings: {
      foreground: info.code.language,
    },
  }

  const classes = {
    scope: cppscope([
      'entity.name.type.namespace',
    ]),
    settings: {
      foreground: info.code.classes,
    },
  }

  return [
    classes,
    language,
  ]
}

export default cpp
