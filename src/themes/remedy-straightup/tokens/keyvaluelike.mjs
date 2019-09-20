import { code } from '@remedy/palette'
import {
  dotenv,
  json,
  terraform,
  yaml,
} from '@remedy/tools/tmscopes'

const keys = {
  scope: [
    ...dotenv(['variable']),
    ...json(['support.type.property-name']),
    ...terraform(['source.terraform.embedded.source variable.other.terraform']),
    ...yaml(['entity.name.tag']),
  ],
  settings: {
    foreground: code.keyvaluelike.keys,
  },
}

const punctuation = {
  scope: [
    ...yaml(['entity.other.document.begin']),
    ...terraform(['entity.tag.embedded']),
  ],
  settings: {
    foreground: code.punctuation,
  },
}

export default [
  keys,
  punctuation,
]
