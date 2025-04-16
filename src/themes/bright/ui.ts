import { palette } from './colours.js'
import { type UIColourPalette } from '@remedy/themegen'

const text = {
  primary: palette.foreground,
  secondary: palette.foreground.lighten(0.5).desaturate(0.4),
  dimmed: palette.foreground.lighten(1.6).desaturate(0.5),
  contrast: palette.base,
  complimentary: palette.bright.yellow.darken(0.9).desaturate(0.3),
}

const background = {
  code: palette.base.lighten(0.06),
  panel: palette.base,
  drop: text.primary,
  hover: palette.base.mix(text.primary, 0.3),
}

const border = background.panel.darken(0.2).desaturate(0.3)
const shadow = text.dimmed
const accent = palette.normal.orange

const button = {
  primary: accent,
  secondary: palette.normal.yellow,
}

const icon = {
  foreground: text.primary,
  inactive: text.dimmed,
  error: palette.normal.red,
  success: palette.normal.green,
}

const scm = {
  added: palette.bright.green,
  modified: palette.bright.blue,
  deleted: palette.bright.red,
  conflicting: palette.bright.yellow,
  untracked: palette.normal.white,
  ignored: text.dimmed,
  merged: palette.normal.magenta,
  conflicts: {
    current: palette.bright.green,
    incoming: palette.bright.blue,
    common: palette.bright.white,
  },
}

const highlight = {
  line: text.primary,
  word: {
    highlight: text.primary,
    matches: palette.normal.cyan,
    source: accent,
  },
  selection: text.primary,
  hover: text.primary,
  range: text.primary,
}

const problems = {
  error: palette.normal.red,
  warning: palette.normal.yellow,
  info: palette.normal.blue,
  hint: palette.normal.white,
}

const debug = {
  indicator: palette.bright.blue,
  breakpoint: {
    active: palette.bright.red,
    disabled: icon.inactive,
    unverified: palette.normal.white,
  },
  frame: {
    normal: palette.normal.blue,
    focused: palette.bright.blue,
  },
  icon: {
    start: palette.normal.orange,
    pause: palette.normal.orange,
    continue: palette.normal.orange,
    next: palette.bright.blue,
    back: palette.bright.blue,
    into: palette.bright.blue,
    out: palette.bright.blue,
    restart: palette.bright.green,
    stop: palette.normal.red,
  },
}

const terminal = {
  normal: {
    black: palette.normal.black,
    blue: palette.normal.blue,
    cyan: palette.normal.cyan,
    green: palette.normal.green,
    magenta: palette.normal.magenta,
    red: palette.normal.red,
    white: palette.normal.white,
    yellow: palette.normal.yellow,
  },
  bright: {
    black: palette.bright.black,
    blue: palette.bright.blue,
    cyan: palette.bright.cyan,
    green: palette.bright.green,
    magenta: palette.bright.magenta,
    red: palette.bright.red,
    white: palette.bright.white,
    yellow: palette.bright.yellow,
  },
}

const ui: UIColourPalette = {
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

export {
  ui,
}
