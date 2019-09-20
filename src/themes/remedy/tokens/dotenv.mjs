import { code } from '@remedy/palette'
import { prescope } from '@remedy/tools'

const dotenv = prescope.bind(null, [
  'source.env',
])

const variables = {
  scope: dotenv([
    'variable',
  ]),
  settings: {
    foreground: code.keyvaluelike.keys,
  },
}

export default [
  variables,
]
