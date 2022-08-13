import * as ui from '../dark/ui'
import { code } from '../dark/code'
import * as colours from '../dark/colours'
import { mkui, mktokens, mksemantictokens } from '@remedy/generators'
import { type VSCTheme, ThemeType } from '@remedy/types'

const theme: VSCTheme = {
  name: 'Remedy - Dark (Tilted)',
  type: ThemeType.DARK,
  colors: mkui({ ui, code }),
  tokenColors: mktokens({ code, colours, tilts: true }),
  semanticHighlighting: true,
  semanticTokenColors: mksemantictokens({ code, colours, tilts: true }),
}

export default theme
