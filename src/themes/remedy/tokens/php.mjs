import { prescope } from '@remedy/tools'

const php = prescope.bind(null, ['source.php', 'meta.embedded.block.php'])

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
