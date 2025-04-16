import { ui } from './ui.js'
import { code } from './code.js'
import { ThemeGen } from '@remedy/themegen'
import { ThemeType } from '@remedy/vscode-types'

const theme = new ThemeGen({
  name: 'Remedy - Bright (Straight)',
  type: ThemeType.LIGHT,
  tilts: false,
  code,
  ui,
})

export default theme.build()
