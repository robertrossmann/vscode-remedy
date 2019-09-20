import { php } from '@remedy/tools/tmscopes'

const italics = {
  scope: php([
    'keyword.other.namespace',
    'keyword.other.use',
    'storage.type.trait',
    'storage.type.class',
    'storage.type.function',
    'storage.modifier',
    'keyword.other.new',
  ]),
  settings: {
    fontStyle: 'italic',
  },
}

export default [
  italics,
]
