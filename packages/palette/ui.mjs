import { base, text, normal, bright } from './colours'

const background = {
  code: base.lighten(0.2),
  panel: base,
}

const border = background.panel.darken(0.2)
const accent = bright.red

const scm = {
  added: bright.green,
  modified: bright.blue,
  deleted: bright.red,
  conflicting: bright.yellow,
  untracked: normal.white,
  ignored: text.darken(0.6).desaturate(0.8),
  conflicts: {
    current: bright.green,
    incoming: bright.blue,
    common: bright.white,
  },
}

const problems = {
  error: normal.red,
  warning: normal.yellow,
  info: normal.blue,
  hint: normal.white,
}

const debug = {
  frame: normal.green,
  focusedFrame: bright.green,
}

const terminal = {
  normal: {
    black: normal.black,
    blue: normal.blue,
    cyan: normal.cyan,
    green: normal.green,
    magenta: normal.magenta,
    red: normal.red,
    white: normal.white,
    yellow: normal.yellow,
  },
  bright: {
    black: bright.black,
    blue: bright.blue,
    cyan: bright.cyan,
    green: bright.green,
    magenta: bright.magenta,
    red: bright.red,
    white: bright.white,
    yellow: bright.yellow,
  },
}

export {
  background,
  border,
  text,
  accent,
  scm,
  problems,
  debug,
  terminal,
}
