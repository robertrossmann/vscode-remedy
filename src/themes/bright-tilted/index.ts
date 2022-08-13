import * as ui from '../bright/ui'
import { code } from '../bright/code'
import * as colours from '../bright/colours'
import { mkui, mktokens, mksemantictokens } from '@remedy/generators'
import { type VSCTheme, ThemeType } from '@remedy/types'

const theme: VSCTheme = {
  name: 'Remedy - Bright (Tilted)',
  type: ThemeType.LIGHT,
  colors: mkui({ ui, code }),
  tokenColors: mktokens({ code, colours, tilts: true }),
  semanticHighlighting: true,
  semanticTokenColors: mksemantictokens({ code, colours, tilts: true }),
}

export default theme
