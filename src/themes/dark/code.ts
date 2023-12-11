import { foreground, normal, bright } from './colours'
import { type CodePalette } from '@remedy/types'

const plain = foreground.hex()
const comments = foreground.darken(0.5).desaturate(0.8).hex()
const punctuation = comments
const primitives = normal.yellow.hex()
const language = bright.magenta.hex()
const preprocessor = normal.cyan.hex()
const functions = bright.blue.hex()
const classes = bright.yellow.hex()
const types = bright.red.hex()
const variables = foreground.hex()
const dockblockVariables = normal.white.hex()
const constants = bright.red.hex()
const strings = bright.green.hex()
const escapes = normal.white.hex()

const regexp = {
  sequences: bright.cyan.hex(),
  ranges: bright.red.hex(),
  charsets: normal.red.hex(),
}

// Markdown & similar tokens in other source files
const decoratives = {
  raw: normal.yellow.hex(),
  quotes: comments,
  links: normal.cyan.hex(),
  headings: bright.red.hex(),
}

// JSON, YAML etc.
const keyvaluelike = {
  keys: bright.red.hex(),
}

const code: CodePalette = {
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
