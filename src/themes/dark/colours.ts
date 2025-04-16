import Color from 'color'
import { type ColourPalette } from '../../types/ColourPalette.js'

const base = new Color('#352B2A')
const normal = {
  black: new Color('#282A2E'),
  blue: new Color('#5F819D'),
  cyan: new Color('#5E8D87'),
  green: new Color('#8C9440'),
  magenta: new Color('#85678F'),
  red: new Color('#A54242'),
  white: new Color('#707880'),
  yellow: new Color('#DE935F'),
  // Extras
  orange: new Color('#eb684b'),
}

const bright = {
  black: new Color('#373B41'),
  blue: new Color('#81A2BE'),
  cyan: new Color('#8ABEB7'),
  green: new Color('#B5BD68'),
  magenta: new Color('#B294BB'),
  red: new Color('#CC6666'),
  white: new Color('#C5C8C6'),
  yellow: new Color('#F0C674'),
}

const foreground = bright.yellow.lighten(0.2)

const palette: ColourPalette = {
  base,
  foreground,
  normal,
  bright,
}

export {
  palette,
}
