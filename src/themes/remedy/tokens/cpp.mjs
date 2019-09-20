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

const italics = {
  scope: cpp([
    'storage.type.enum',
    'storage.type.namespace',
    'storage.type.class',
    'storage.type.modifier',
    'storage.modifier',
    'keyword.operator.cast',
  ]),
  settings: {
    fontStyle: 'italic',
  },
}

export default [
  classes,
  language,
  italics,
]
