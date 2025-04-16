import { type UIColourPalette } from './UIColourPalette'

type HexaColour = string

enum ThemeType {
  LIGHT = 'vs',
  DARK = 'vs-dark',
  HIGH_CONTRAST = 'hc-black',
}

interface TMRule {
  name?: string
  scope: string[]
  settings: TMRuleSetting
}

interface TMRuleSetting {
  foreground?: HexaColour
  fontStyle?: TMFontStyle
}

enum TMFontStyle {
  NORMAL = '',
  ITALIC = 'italic',
  BOLD = 'bold',
}

interface SemanticRuleSetting {
  foreground: HexaColour
  bold: boolean
  italic: boolean
  underline: boolean
}

interface SemanticRules {
  [target: string]: SemanticRuleSetting | TMRuleSetting | HexaColour
}

interface VSCTheme {
  name: string
  type: ThemeType
  colors: UIColourPalette
  semanticHighlighting: boolean
  tokenColors: TMRule[]
  semanticTokenColors: SemanticRules
}

export {
  VSCTheme,
  ThemeType,
  TMRule,
  TMRuleSetting,
  TMFontStyle,
  SemanticRules,
  SemanticRuleSetting,
}
