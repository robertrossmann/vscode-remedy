import { type TMRule } from '@remedy/vscode-types'
import { type ThemeInfo } from '../../index.js'
import { html as htmlscope } from './scopes/tmscopes.js'

function html(info: ThemeInfo): TMRule[] {
  const ids = {
    scope: htmlscope([
      'meta.attribute.id string.quoted',
    ]),
    settings: {
      foreground: info.code.strings,
    },
  }
  const attributes = {
    scope: htmlscope([
      'entity.other.attribute-name',
    ]),
    settings: {
      foreground: info.code.constants,
    },
  }

  return [
    attributes,
    ids,
  ]
}

export default html
