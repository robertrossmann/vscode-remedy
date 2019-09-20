import { code } from '@remedy/palette'
import { dotenv } from '@remedy/tools/tmscopes'

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
