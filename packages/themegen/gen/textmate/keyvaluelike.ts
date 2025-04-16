import { type TMRule } from '@remedy/vscode-types'
import { type ThemeInfo } from '../../index.js'
import {
  dotenv as dotenvscope,
  json as jsonscope,
  terraform as terraformscope,
  yaml as yamlscope,
} from './scopes/tmscopes.js'

function keyvaluelike(info: ThemeInfo): TMRule[] {
  const keys = {
    scope: [
      ...dotenvscope(['variable']),
      ...jsonscope(['support.type.property-name']),
      ...terraformscope(['source.terraform.embedded.source variable.other.terraform']),
      ...yamlscope(['entity.name.tag']),
    ],
    settings: {
      foreground: info.code.keyvaluelike.keys,
    },
  }

  const punctuation = {
    scope: [
      ...yamlscope(['entity.other.document.begin']),
      ...terraformscope(['entity.tag.embedded']),
    ],
    settings: {
      foreground: info.code.punctuation,
    },
  }

  return [
    keys,
    punctuation,
  ]
}

export default keyvaluelike
