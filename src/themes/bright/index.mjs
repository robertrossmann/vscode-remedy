import { mkui, mktokens } from '@remedy/generators'
import * as ui from './ui'
import * as code from './code'
import * as colours from './colours'

export default {
  name: 'Remedy - Bright (Straight)',
  type: 'vs',
  colors: mkui({ ui, code }),
  tokenColors: mktokens({ code, colours }),
}
