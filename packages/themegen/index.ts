import { type Theme, type ThemeType } from '@remedy/vscode-types'
import { type CodeColourPalette } from './types/CodeColours.js'
import { type UIColourPalette } from './types/UIColourPalette.js'
import { mkui } from './gen/mkui.js'
import { mksemantictokens } from './gen/mksemantictokens.js'
import { mktextmatetokens } from './gen/mtextmatetokens.js'

interface ThemeInfo {
  name: string
  type: ThemeType
  code: CodeColourPalette
  ui: UIColourPalette
  tilts: boolean
}

class ThemeGen {
  readonly info: ThemeInfo

  constructor(info: ThemeInfo) {
    this.info = info
  }

  build(): Theme {
    return {
      name: this.info.name,
      type: this.info.type,
      semanticHighlighting: true,
      colors: mkui(this.info),
      semanticTokenColors: mksemantictokens(this.info),
      tokenColors: mktextmatetokens(this.info),
    }
  }
}

export {
  ThemeGen,
  type ThemeInfo,
  type ThemeType,
  type CodeColourPalette,
  type UIColourPalette,
}
