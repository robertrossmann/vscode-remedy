import type * as Color from 'Color'

interface ColourPalette {
  normal: {
    black: Color
    blue: Color
    cyan: Color
    green: Color
    magenta: Color
    red: Color
    white: Color
    yellow: Color
    // Extras
    orange: Color
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

export {
  ColourPalette,
}
