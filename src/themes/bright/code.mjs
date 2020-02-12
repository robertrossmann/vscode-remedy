import { foreground, normal, bright } from './colours'

const plain = foreground.hex()
const punctuation = bright.magenta.desaturate(0.6).hex()
const primitives = normal.yellow.darken(0.2).hex()
const comments = foreground.lighten(1).desaturate(0.6).hex()
const language = normal.magenta.hex()
const preprocessor = normal.cyan.hex()
const functions = normal.blue.hex()
const classes = bright.yellow.darken(0.3).desaturate(0.1).hex()
const types = bright.red.hex()
const variables = foreground.hex()
const dockblockVariables = normal.white.hex()
const constants = bright.red.hex()
const strings = normal.green.hex()
const escapes = normal.white.hex()

const regexp = {
  sequences: bright.cyan.hex(),
  ranges: bright.red.hex(),
  charsets: normal.red.hex(),
}

// Markdown & similar tokens in other source files
const raw = normal.yellow.hex()
const quotes = foreground.darken(0.3).desaturate(0.7).hex()
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
