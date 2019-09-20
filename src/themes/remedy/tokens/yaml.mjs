import { code } from '@remedy/palette'
import { yaml } from '@remedy/tools/tmscopes'

const keys = {
  scope: yaml([
    'entity.name.tag',
  ]),
  settings: {
    // Reset italic font style due to tags actually being considered strings 🤷‍♂️
    fontStyle: '',
    foreground: code.keyvaluelike.keys,
  },
}

const punctuation = {
  scope: yaml([
    'entity.other.document.begin',
  ]),
  settings: {
    foreground: code.punctuation,
  },
}

export default [
  keys,
  punctuation,
]
