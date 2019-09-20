import { code } from '@remedy/palette'
import { java } from '@remedy/tools/tmscopes'

const variables = {
  scope: java([
    'storage.modifier.import',
    'storage.modifier.package',
  ]),
  settings: {
    foreground: code.variables,
  },
}

export default [
  variables,
]
