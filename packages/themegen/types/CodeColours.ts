import { type ColorInstance } from 'color'

interface CodeColourPalette {
  plain: ColorInstance
  comments: ColorInstance
  punctuation: ColorInstance
  primitives: ColorInstance
  language: ColorInstance
  preprocessor: ColorInstance
  functions: ColorInstance
  classes: ColorInstance
  types: ColorInstance
  variables: ColorInstance
  dockblockVariables: ColorInstance
  constants: ColorInstance
  strings: ColorInstance
  escapes: ColorInstance

  /** Regexp sequences and tokens */
  regexp: {
    sequences: ColorInstance
    ranges: ColorInstance
    charsets: ColorInstance
  }

  /** Markdown & similar tokens in other source files */
  decoratives: {
    raw: ColorInstance
    quotes: ColorInstance
    links: ColorInstance
    headings: ColorInstance
  }

  /** JSON, YAML etc. */
  keyvaluelike: {
    keys: ColorInstance
  }
}

export {
  CodeColourPalette,
}
