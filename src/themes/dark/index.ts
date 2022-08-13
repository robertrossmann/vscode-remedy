import * as ui from './ui'
import { code } from './code'
import * as colours from './colours'
import { mkui, mktokens, mksemantictokens } from '@remedy/generators'
import { type VSCTheme, ThemeType } from '@remedy/types'

const theme: VSCTheme = {
  name: 'Remedy - Dark (Straight)',
  type: ThemeType.DARK,
  colors: mkui({ ui, code }),
  tokenColors: mktokens({ code, colours }),
  semanticHighlighting: true,
  semanticTokenColors: mksemantictokens({ code, colours, tilts: false }),
}

export default theme
