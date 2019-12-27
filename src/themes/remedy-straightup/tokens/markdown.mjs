import { code, colours } from '@remedy/palette'
import { markdown } from '@remedy/tools/tmscopes'

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
    'constant.other.reference.link',
    'markup.underline.link',
    'meta.link.reference',
  ]),
  settings: {
    foreground: code.links,
  },
}

const linktitles = {
  scope: markdown([
    'string.other.link.title',
  ]),
  settings: {
    foreground: code.headings,
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
  linktitles,
  bolds,
  italics,
]
