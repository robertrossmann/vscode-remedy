import { TMFontStyle, type TMRule } from '@remedy/vscode-types'
import { type ThemeInfo } from '../../index.js'
import { markdown as markdownscope } from './scopes/tmscopes.js'

function markdown(info: ThemeInfo): TMRule[] {
  const quotes = {
    scope: markdownscope([
      'markup.quote',
    ]),
    settings: {
      fontStyle: TMFontStyle.ITALIC,
    },
  }

  const raw = {
    scope: markdownscope([
      'markup.inline.raw',
    ]),
    settings: {
      foreground: info.code.decoratives.raw,
    },
  }

  const links = {
    scope: markdownscope([
      'constant.other.reference.link',
      'markup.underline.link',
      'meta.link.reference',
    ]),
    settings: {
      foreground: info.code.decoratives.links,
    },
  }

  const linktitles = {
    scope: markdownscope([
      'string.other.link.title',
    ]),
    settings: {
      foreground: info.code.decoratives.headings,
    },
  }

  const languages = {
    scope: markdownscope([
      'fenced_info.code.block.language',
    ]),
    settings: {
      foreground: info.code.punctuation,
    },
  }

  const bolds = {
    scope: markdownscope([
      'markup.bold',
    ]),
    settings: {
      fontStyle: 'bold',
      foreground: info.code.decoratives.headings,
    },
  }

  const italics = {
    scope: markdownscope([
      'markup.italic',
    ]),
    settings: {
      fontStyle: TMFontStyle.ITALIC,
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
