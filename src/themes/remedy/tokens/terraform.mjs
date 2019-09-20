import { code } from '@remedy/palette'
import { terraform } from '@remedy/tools/tmscopes'

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
