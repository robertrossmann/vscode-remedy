import { mkui, mktokens } from '@remedy/generators'
import * as ui from '../dark/ui'
import * as code from '../dark/code'
import * as colours from '../dark/colours'

export default {
  name: 'Remedy - Dark (Tilted)',
  type: 'vs-dark',
  colors: mkui({ ui, code }),
  tokenColors: mktokens({ code, colours, tilts: true }),
}
