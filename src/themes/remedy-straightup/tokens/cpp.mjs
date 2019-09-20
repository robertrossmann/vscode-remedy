import { code } from '@remedy/palette'
import { cpp } from '@remedy/tools/tmscopes'

const language = {
  scope: cpp([
    'storage.type.namespace.definition',
  ]),
  settings: {
    foreground: code.language,
  },
}

const classes = {
  scope: cpp([
    'entity.name.type.namespace',
  ]),
  settings: {
    foreground: code.classes,
  },
}

export default [
  classes,
  language,
]
