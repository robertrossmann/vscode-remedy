import { ui } from '../dark/ui.js'
import { code } from '../dark/code.js'
import { ThemeGen } from '@remedy/themegen'
import { ThemeType } from '@remedy/vscode-types'

const theme = new ThemeGen({
  name: 'Remedy - Dark (Tilted)',
  type: ThemeType.DARK,
  tilts: true,
  code,
  ui,
})

export default theme.build()
