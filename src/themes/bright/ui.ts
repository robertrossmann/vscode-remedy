import { base, foreground, normal, bright } from './colours'

const text = {
  primary: foreground,
  secondary: foreground.lighten(0.5).desaturate(0.4),
  dimmed: foreground.lighten(1.6).desaturate(0.5),
  contrast: base,
  complimentary: bright.yellow.darken(0.9).desaturate(0.3),
}

const background = {
  code: base.lighten(0.06),
  panel: base,
  drop: text.primary,
  hover: base.mix(text.primary, 0.3),
}

const border = background.panel.darken(0.2).desaturate(0.3)
const shadow = text.dimmed
const accent = normal.orange

const button = {
  primary: accent,
  secondary: normal.yellow,
}

const icon = {
  foreground: text.primary,
  inactive: text.dimmed,
  error: normal.red,
  success: normal.green,
}

const scm = {
  added: bright.green,
  modified: bright.blue,
  deleted: bright.red,
  conflicting: bright.yellow,
  untracked: normal.white,
  ignored: text.dimmed,
  merged: normal.magenta,
  conflicts: {
    current: bright.green,
    incoming: bright.blue,
    common: bright.white,
  },
}

const highlight = {
  line: text.primary,
  word: {
    highlight: text.primary,
    matches: normal.cyan,
    source: accent,
  },
  selection: text.primary,
  hover: text.primary,
  range: text.primary,
}

const problems = {
  error: normal.red,
  warning: normal.yellow,
  info: normal.blue,
  hint: normal.white,
}

const debug = {
  indicator: bright.blue,
  breakpoint: {
    active: bright.red,
    disabled: icon.inactive,
    unverified: normal.white,
  },
  frame: {
    normal: normal.blue,
    focused: bright.blue,
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
  button,
  background,
  border,
  shadow,
  text,
  accent,
  icon,
  scm,
  highlight,
  problems,
  debug,
  terminal,
}
