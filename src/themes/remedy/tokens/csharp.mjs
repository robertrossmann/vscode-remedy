import { code } from '@remedy/palette'
import { prescope } from '@remedy/tools'

const cs = prescope.bind(null, ['source.cs', 'meta.embedded.block.csharp'])

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

const italics = {
  scope: cs([
    'keyword.other',
    'storage.modifier',
  ]),
  settings: {
    fontStyle: 'italic',
  },
}

export default [
  classes,
  types,
  italics,
]
