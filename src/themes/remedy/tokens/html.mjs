import { code } from '@remedy/palette'
import { prescope } from '@remedy/tools'

const html = prescope.bind(null, [
  'text.html',
  'meta.embedded.block.html',
])

const attributes = {
  scope: html([
    'entity.other.attribute-name',
  ]),
  settings: {
    foreground: code.constants,
  },
}

const italics = {
  scope: html([
    'entity.other.attribute-name',
  ]),
  settings: {
    fontStyle: 'italic',
  },
}

export default [
  attributes,
  italics,
]
