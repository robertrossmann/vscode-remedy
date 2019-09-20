import { code } from '@remedy/palette'
import { json } from '@remedy/tools/tmscopes'

const keys = {
  scope: json([
    'support.type.property-name',
  ]),
  settings: {
    // Reset italic font style due to properties actually being considered strings 🤷‍♂️
    fontStyle: '',
    foreground: code.keyvaluelike.keys,
  },
}

export default [
  keys,
]
