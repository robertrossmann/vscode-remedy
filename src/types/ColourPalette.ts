import { type ColorInstance } from 'color'

interface ColourPalette {
  base: ColorInstance
  foreground: ColorInstance
  normal: {
    black: ColorInstance
    blue: ColorInstance
    cyan: ColorInstance
    green: ColorInstance
    magenta: ColorInstance
    red: ColorInstance
    white: ColorInstance
    yellow: ColorInstance
    // Extras
    orange: ColorInstance
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

export {
  ColourPalette,
}
