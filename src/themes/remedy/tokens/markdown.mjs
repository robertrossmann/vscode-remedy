import { code, colours } from '@remedy/palette'
import { prescope } from '@remedy/tools'

const markdown = prescope.bind(null, [
  'text.html.markdown',
  'meta.embedded.block.markdown',
])

const quotes = {
  scope: markdown([
    'markup.quote',
  ]),
  settings: {
    fontStyle: 'italic',
    foreground: code.quotes,
  },
}

const raw = {
  scope: markdown([
    'markup.inline.raw',
  ]),
  settings: {
    foreground: code.raw,
  },
}

const links = {
  scope: markdown([
    'string.other.link',
    'meta.link.reference',
  ]),
  settings: {
    foreground: code.links,
  },
}

const bolds = {
  scope: markdown([
    'markup.bold',
  ]),
  settings: {
    fontStyle: 'bold',
    foreground: colours.bright.white.hex(),
  },
}

const italics = {
  scope: markdown([
    'markup.italic',
  ]),
  settings: {
    fontStyle: 'italic',
    foreground: colours.bright.white.hex(),
  },
}

export default [
  quotes,
  raw,
  links,
  bolds,
  italics,
]
