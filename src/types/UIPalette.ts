import type * as Color from 'color'

interface UIPalette {
  text: {
    primary: Color
    secondary: Color
    dimmed: Color
    contrast: Color
    complimentary: Color
  }

  background: {
    code: Color
    panel: Color
    drop: Color
    hover: Color
  }

  border: Color
  shadow: Color
  accent: Color

  button: {
    primary: Color
    secondary: Color
  }

  icon: {
    foreground: Color
    inactive: Color
    error: Color
    success: Color
  }

  scm: {
    added: Color
    modified: Color
    deleted: Color
    conflicting: Color
    untracked: Color
    ignored: Color
    conflicts: {
      current: Color
      incoming: Color
      common: Color
    }
  }

  highlight: {
    line: Color
    word: {
      highlight: Color
      matches: Color
      source: Color
    }
    selection: Color
    hover: Color
    range: Color
  }

  problems: {
    error: Color
    warning: Color
    info: Color
    hint: Color
  }

  debug: {
    indicator: Color
    breakpoint: {
      active: Color
      disabled: Color
      unverified: Color
    }
    frame: {
      normal: Color
      focused: Color
    }
    icon: {
      start: Color
      pause: Color
      continue: Color
      next: Color
      back: Color
      into: Color
      out: Color
      restart: Color
      stop: Color
    }
  }

  terminal: {
    normal: {
      black: Color
      blue: Color
      cyan: Color
      green: Color
      magenta: Color
      red: Color
      white: Color
      yellow: Color
    }
    bright: {
      black: Color
      blue: Color
      cyan: Color
      green: Color
      magenta: Color
      red: Color
      white: Color
      yellow: Color
    }
  }
}

export {
  UIPalette,
}
