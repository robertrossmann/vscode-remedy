import { ui } from '../bright/ui.js'
import { code } from '../bright/code.js'
import { ThemeGen } from '@remedy/themegen'
import { ThemeType } from '@remedy/vscode-types'

const theme = new ThemeGen({
  name: 'Remedy - Bright (Tilted)',
  type: ThemeType.LIGHT,
  tilts: true,
  code,
  ui,
})

export default theme.build()
