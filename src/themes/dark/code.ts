import { palette } from './colours.js'
import { type CodeColourPalette } from '@remedy/themegen'

const plain = palette.foreground
const comments = palette.foreground.darken(0.5).desaturate(0.8)
const punctuation = comments
const primitives = palette.normal.yellow
const language = palette.bright.magenta
const preprocessor = palette.normal.cyan
const functions = palette.bright.blue
const classes = palette.bright.yellow
const types = palette.bright.red
const variables = palette.foreground
const dockblockVariables = palette.normal.white
const constants = palette.bright.red
const strings = palette.bright.green
const escapes = palette.normal.white

const regexp = {
  sequences: palette.bright.cyan,
  ranges: palette.bright.red,
  charsets: palette.normal.red,
}

// Markdown & similar tokens in other source files
const decoratives = {
  raw: palette.normal.yellow,
  quotes: comments,
  links: palette.normal.cyan,
  headings: palette.bright.red,
}

// JSON, YAML etc.
const keyvaluelike = {
  keys: palette.bright.red,
}

const code: CodeColourPalette = {
  plain,
  punctuation,
  primitives,
  comments,
  language,
  preprocessor,
  functions,
  classes,
  types,
  variables,
  dockblockVariables,
  constants,
  strings,
  escapes,
  regexp,
  decoratives,
  keyvaluelike,
}

export {
  code,
}
