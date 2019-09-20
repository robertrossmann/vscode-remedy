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
    ...terraform(['source.terraform.embedded.source variable.other.terraform']),
  ],
  settings: {
    foreground: code.keyvaluelike.keys,
  },
}

const stringkeys = {
  scope: [
    ...json(['support.type.property-name']),
    ...yaml(['entity.name.tag']),
  ],
  settings: {
    // Reset italic font style due to these tokens actually being considered strings 🤷‍♂️
    fontStyle: '',
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

const italics = {
  scope: [
    ...terraform(['storage.type.function']),
  ],
  settings: {
    fontStyle: 'italic',
  },
}

export default [
  keys,
  stringkeys,
  punctuation,
  italics,
]
