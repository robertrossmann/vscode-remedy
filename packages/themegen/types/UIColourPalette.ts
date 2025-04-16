import { type ColorInstance } from 'color'

interface UIColourPalette {
  text: {
    primary: ColorInstance
    secondary: ColorInstance
    dimmed: ColorInstance
    contrast: ColorInstance
    complimentary: ColorInstance
  }

  background: {
    code: ColorInstance
    panel: ColorInstance
    drop: ColorInstance
    hover: ColorInstance
  }

  border: ColorInstance
  shadow: ColorInstance
  accent: ColorInstance

  button: {
    primary: ColorInstance
    secondary: ColorInstance
  }

  icon: {
    foreground: ColorInstance
    inactive: ColorInstance
    error: ColorInstance
    success: ColorInstance
  }

  scm: {
    added: ColorInstance
    modified: ColorInstance
    deleted: ColorInstance
    conflicting: ColorInstance
    untracked: ColorInstance
    ignored: ColorInstance
    merged: ColorInstance
    conflicts: {
      current: ColorInstance
      incoming: ColorInstance
      common: ColorInstance
    }
  }

  highlight: {
    line: ColorInstance
    word: {
      highlight: ColorInstance
      matches: ColorInstance
      source: ColorInstance
    }
    selection: ColorInstance
    hover: ColorInstance
    range: ColorInstance
  }

  problems: {
    error: ColorInstance
    warning: ColorInstance
    info: ColorInstance
    hint: ColorInstance
  }

  debug: {
    indicator: ColorInstance
    breakpoint: {
      active: ColorInstance
      disabled: ColorInstance
      unverified: ColorInstance
    }
    frame: {
      normal: ColorInstance
      focused: ColorInstance
    }
    icon: {
      start: ColorInstance
      pause: ColorInstance
      continue: ColorInstance
      next: ColorInstance
      back: ColorInstance
      into: ColorInstance
      out: ColorInstance
      restart: ColorInstance
      stop: ColorInstance
    }
  }

  terminal: {
    normal: {
      black: ColorInstance
      blue: ColorInstance
      cyan: ColorInstance
      green: ColorInstance
      magenta: ColorInstance
      red: ColorInstance
      white: ColorInstance
      yellow: ColorInstance
    }
    bright: {
      black: ColorInstance
      blue: ColorInstance
      cyan: ColorInstance
      green: ColorInstance
      magenta: ColorInstance
      red: ColorInstance
      white: ColorInstance
      yellow: ColorInstance
    }
  }
}

export {
  UIColourPalette,
}
