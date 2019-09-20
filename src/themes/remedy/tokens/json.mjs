import { code } from '@remedy/palette'
import { prescope } from '@remedy/tools'

const json = prescope.bind(null, [
  'source.json',
  'meta.embedded.block.json',
])

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
