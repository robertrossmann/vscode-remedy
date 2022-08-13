// import type * as Color from 'color'

interface CodePalette {
  plain: string
  comments: string
  punctuation: string
  primitives: string
  language: string
  preprocessor: string
  functions: string
  classes: string
  types: string
  variables: string
  dockblockVariables: string
  constants: string
  strings: string
  escapes: string

  /** Regexp sequences and tokens */
  regexp: {
    sequences: string
    ranges: string
    charsets: string
  }

  /** Markdown & similar tokens in other source files */
  decoratives: {
    raw: string
    quotes: string
    links: string
    headings: string
  }

  /** JSON, YAML etc. */
  keyvaluelike: {
    keys: string
  }
}

export {
  CodePalette,
}
