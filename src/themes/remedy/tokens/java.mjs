import { code } from '@remedy/palette'
import { prescope } from '@remedy/tools'

const java = prescope.bind(null, ['source.java', 'meta.embedded.block.java'])

const variables = {
  scope: java([
    'storage.modifier.import',
    'storage.modifier.package',
  ]),
  settings: {
    foreground: code.variables,
  },
}

const italics = {
  scope: java([
    'keyword.other',
    'storage.modifier',
  ]),
  settings: {
    fontStyle: 'italic',
  },
}

export default [
  variables,
  italics,
]
