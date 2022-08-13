import type { InputParams } from './InputParams'
import { markdown as markdownscope } from '@remedy/tools/tmscopes'
import type { TMRule } from '@remedy/types'

function markdown({ code, colours }: InputParams): TMRule[] {
  const quotes = {
    scope: markdownscope([
      'markup.quote',
    ]),
    settings: {
      fontStyle: 'italic',
      foreground: code.decoratives.quotes,
    },
  }

  const raw = {
    scope: markdownscope([
      'markup.inline.raw',
    ]),
    settings: {
      foreground: code.decoratives.raw,
    },
  }

  const links = {
    scope: markdownscope([
      'constant.other.reference.link',
      'markup.underline.link',
      'meta.link.reference',
    ]),
    settings: {
      foreground: code.decoratives.links,
    },
  }

  const linktitles = {
    scope: markdownscope([
      'string.other.link.title',
    ]),
    settings: {
      foreground: code.decoratives.headings,
    },
  }

  const languages = {
    scope: markdownscope([
      'fenced_code.block.language',
    ]),
    settings: {
      foreground: code.punctuation,
    },
  }

  const bolds = {
    scope: markdownscope([
      'markup.bold',
    ]),
    settings: {
      fontStyle: 'bold',
      foreground: colours.bright.white.hex(),
    },
  }

  const italics = {
    scope: markdownscope([
      'markup.italic',
    ]),
    settings: {
      fontStyle: 'italic',
      foreground: colours.bright.white.hex(),
    },
  }

  return [
    quotes,
    raw,
    links,
    linktitles,
    languages,
    bolds,
    italics,
  ]
}

export default markdown
