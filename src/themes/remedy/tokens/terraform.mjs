import { code } from '@remedy/palette'
import { prescope } from '@remedy/tools'

const terraform = prescope.bind(null, ['source.terraform', 'meta.embedded.block.terraform'])

const punctuation = {
  scope: terraform([
    'entity.tag.embedded',
  ]),
  settings: {
    foreground: code.punctuation,
  },
}

const variables = {
  scope: terraform([
    'source.terraform.embedded.source variable.other.terraform',
  ]),
  settings: {
    foreground: code.keyvaluelike.keys,
  },
}

const italics = {
  scope: terraform([
    'storage.type.function',
  ]),
  settings: {
    fontStyle: 'italic',
  },
}

export default [
  punctuation,
  variables,
  italics,
]
