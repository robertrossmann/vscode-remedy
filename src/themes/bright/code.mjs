import { foreground, normal, bright } from './colours'

const plain = foreground.hex()
const punctuation = bright.magenta.lighten(0.15).desaturate(0.5).hex()
const primitives = normal.yellow.hex()
const comments = foreground.lighten(1.6).desaturate(0.5).hex()
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
const quotes = comments
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
