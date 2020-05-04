import { mkui, mktokens, mksemantictokens } from '@remedy/generators'
import * as ui from '../bright/ui'
import * as code from '../bright/code'
import * as colours from '../bright/colours'

export default {
  name: 'Remedy - Bright (Tilted)',
  type: 'vs',
  colors: mkui({ ui, code }),
  tokenColors: mktokens({ code, colours, tilts: true }),
  semanticTokenColors: mksemantictokens({ code, tilts: true }),
}
