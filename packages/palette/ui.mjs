import { base, text, normal, bright } from './colours'

const background = {
  code: base.lighten(0.2).desaturate(0.1),
  panel: base,
  drop: text,
}

const border = background.panel.darken(0.2)
const accent = normal.orange

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

const highlight = {
  line: text,
  word: {
    current: text,
    source: accent,
  },
  selection: text,
  hover: text,
  range: text,
}

const problems = {
  error: normal.red,
  warning: normal.yellow,
  info: normal.blue,
  hint: normal.white,
}

const debug = {
  breakpoint: {
    active: bright.red,
    disabled: normal.red,
    unverified: normal.white,
  },
  frame: {
    normal: normal.green,
    focused: bright.green,
  },
  icon: {
    start: normal.orange,
    pause: normal.orange,
    continue: normal.orange,
    next: bright.blue,
    back: bright.blue,
    into: bright.blue,
    out: bright.blue,
    restart: bright.green,
    stop: normal.red,
  },
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
  highlight,
  problems,
  debug,
  terminal,
}
