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

export default [
  attributes,
]
