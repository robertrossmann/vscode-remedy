import { code } from '@remedy/palette'
import { html } from '@remedy/tools/tmscopes'

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
