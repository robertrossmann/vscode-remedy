import {
  jsts,
  json,
  yaml,
  makefile,
  cc,
  css,
  cs,
  pug,
} from '@remedy/tools/tmscopes'
import { TMFontStyle, type TMRuleSetting, type TMRule } from '@remedy/types'

const settings: TMRuleSetting = {
  fontStyle: TMFontStyle.NORMAL,
}

const stringkeys: TMRule = {
  scope: [
    ...json(['support.type.property-name']),
    ...yaml(['entity.name.tag']),
  ],
  settings,
}

const language: TMRule = {
  scope: [
    'keyword.operator',
  ],
  settings,
}

const functions: TMRule = {
  scope: [
    ...jsts(['storage.type.function.arrow']),
    ...makefile(['support.function']),
  ],
  settings,
}

const classes: TMRule = {
  scope: [
    ...pug([
      'entity.other.attribute-name.class',
      'entity.other.attribute-name.id',
    ]),
  ],
  settings,
}

const constants: TMRule = {
  scope: [
    ...css(['keyword.other.unit']),
  ],
  settings,
}

const types: TMRule = {
  scope: [
    ...cs(['keyword.type']),
  ],
  settings,
}

const punctuation: TMRule = {
  scope: [
    ...cc(['storage.modifier.array.bracket.square']),
  ],
  settings,
}

export default [
  stringkeys,
  language,
  functions,
  classes,
  constants,
  types,
  punctuation,
]
