import { code } from '@remedy/palette'
import { cs } from '@remedy/tools/tmscopes'

const classes = {
  scope: cs([
    'entity.name.type.namespace',
  ]),
  settings: {
    foreground: code.classes,
  },
}

const types = {
  scope: cs([
    'keyword.type',
  ]),
  settings: {
    foreground: code.types,
  },
}

export default [
  classes,
  types,
]
