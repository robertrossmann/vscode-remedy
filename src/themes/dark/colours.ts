import * as color from 'color'

const base = color('#352B2A')
const normal = {
  black: color('#282A2E'),
  blue: color('#5F819D'),
  cyan: color('#5E8D87'),
  green: color('#8C9440'),
  magenta: color('#85678F'),
  red: color('#A54242'),
  white: color('#707880'),
  yellow: color('#DE935F'),
  // Extras
  orange: color('#eb684b'),
}

const bright = {
  black: color('#373B41'),
  blue: color('#81A2BE'),
  cyan: color('#8ABEB7'),
  green: color('#B5BD68'),
  magenta: color('#B294BB'),
  red: color('#CC6666'),
  white: color('#C5C8C6'),
  yellow: color('#F0C674'),
}

const foreground = bright.yellow.lighten(0.2)

export {
  base,
  foreground,
  normal,
  bright,
}
