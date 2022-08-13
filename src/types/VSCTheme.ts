import type { UIColourPalette } from './UIColourPalette'

type HEXAColour = string

enum ThemeType {
  LIGHT = 'vs',
  DARK = 'vs-dark',
  HIGH_CONTRAST = 'hc-black',
}

enum TMFontStyle {
  NORMAL = '',
  ITALIC = 'italic',
  BOLD = 'bold',
}

interface TMRuleSetting {
  foreground?: HEXAColour
  fontStyle?: TMFontStyle
}

interface TMRule {
  name?: string
  scope: string[]
  settings: TMRuleSetting
}

interface SemanticRuleSetting {
  foreground: HEXAColour
  bold: boolean
  italic: boolean
  underline: boolean
}

interface SemanticRules {
  [target: string]: SemanticRuleSetting | TMRuleSetting | HEXAColour
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
