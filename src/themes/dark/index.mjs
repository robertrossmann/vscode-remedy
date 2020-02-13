import { mkui, mktokens } from '@remedy/generators'
import * as ui from './ui'
import * as code from './code'
import * as colours from './colours'

export default {
  name: 'Remedy - Dark (Straight)',
  type: 'vs-dark',
  colors: mkui({ ui, code }),
  tokenColors: mktokens({ code, colours }),
}
