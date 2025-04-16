import { type SemanticRules } from './semantic.js'
import { type TMRule } from './textmate.js'
import { type UIColours } from './UIColours.js'

enum ThemeType {
  LIGHT = 'vs',
  DARK = 'vs-dark',
  HIGH_CONTRAST = 'hc-black',
}

/** VSCode Theme definition */
interface Theme {
  name: string
  type: ThemeType
  semanticHighlighting: boolean
  colors: UIColours
  tokenColors: TMRule[]
  semanticTokenColors: SemanticRules
}

export {
  Theme,
  ThemeType,
}
