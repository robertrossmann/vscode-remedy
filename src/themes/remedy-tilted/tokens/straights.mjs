import {
  jsts,
  json,
  yaml,
  makefile,
  css,
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

const functions = {
  scope: [
    ...jsts(['storage.type.function.arrow']),
    ...makefile(['support.function']),
  ],
  settings,
}

const constants = {
  scope: [
    ...css(['keyword.other.unit']),
  ],
  settings,
}

export default [
  stringkeys,
  functions,
  constants,
]
