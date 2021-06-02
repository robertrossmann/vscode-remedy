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

const settings = {
  fontStyle: '',
}

const stringkeys = {
  scope: [
    ...json(['support.type.property-name']),
    ...yaml(['entity.name.tag']),
  ],
  settings,
}

const language = {
  scope: [
    'keyword.operator',
  ],
  settings,
}

const functions = {
  scope: [
    ...jsts(['storage.type.function.arrow']),
    ...makefile(['support.function']),
  ],
  settings,
}

const classes = {
  scope: [
    ...pug([
      'entity.other.attribute-name.class',
      'entity.other.attribute-name.id',
    ]),
  ],
  settings,
}

const constants = {
  scope: [
    ...css(['keyword.other.unit']),
  ],
  settings,
}

const types = {
  scope: [
    ...cs(['keyword.type']),
  ],
  settings,
}

const punctuation = {
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
