import type * as Color from 'color'

/** A single TextMate rule definition */
interface TMRule {
  name?: string
  /** List of TextMate scopes to which this rule applies */
  scope: string[]
  /** Settings for this rule */
  settings: TMRuleSetting
}

/** Settings for a TextMate rule */
interface TMRuleSetting {
  /** Foreground colour for tokens matched by this rule */
  foreground?: Color
  /** Font style for tokens matched by this rule */
  fontStyle?: TMFontStyle
}

enum TMFontStyle {
  NORMAL = '',
  ITALIC = 'italic',
  BOLD = 'bold',
}

export {
  TMRule,
  TMRuleSetting,
  TMFontStyle,
}
