import { text, normal, bright } from './colours'

const plain = text.hex()
const punctuation = bright.magenta.darken(0.3).desaturate(0.8).hex()
const primitives = normal.yellow.hex()
const comments = text.darken(0.5).desaturate(0.85).hex()
const language = bright.magenta.hex()
const preprocessor = normal.cyan.hex()
const functions = bright.blue.hex()
const classes = bright.yellow.hex()
const types = bright.red.hex()
const variables = text.hex()
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
const raw = normal.yellow.hex()
const quotes = text.darken(0.3).desaturate(0.7).hex()
const links = normal.cyan.hex()
const headings = bright.red.hex()

// JSON, YAML etc.
const keyvaluelike = {
  keys: bright.red.hex(),
}

export {
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
  raw,
  quotes,
  links,
  headings,
  keyvaluelike,
}
