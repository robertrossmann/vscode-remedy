import {
  css,
  jsts,
  makefile,
} from '@remedy/tools/tmscopes'

const settings = {
  fontStyle: 'italic',
}

const comments = {
  scope: [
    'comment',
    'punctuation.definition.comment',
  ],
  settings,
}

const preprocessor = {
  scope: [
    'punctuation.definition.directive',
    'entity.name.function.preprocessor',
    'entity.name.function.directive',
  ],
  settings,
}

const strings = {
  scope: [
    'string',
  ],
  settings,
}

const language = {
  scope: [
    'keyword',
    'keyword.operator.expression',
    'keyword.operator.new',
    'storage.modifier',
    'storage.type.class',
    'storage.type.enum',
    'storage.type.function',
    'storage.type.interface',
    'storage.type.internaldeclaration',
    'storage.type.modifier',
    'storage.type.namespace',
    'storage.type.property',
    'storage.type.trait',
    'storage.type.type',
  ],
  settings,
}

const attributes = {
  scope: [
    'entity.other.attribute-name',
  ],
  settings,
}

const overrides = {
  scope: [
    ...css(['entity.name.tag']),
    ...jsts(['storage.type.js', 'storage.type.ts', 'storage.type.tsx']),
    ...makefile(['meta.scope.prerequisites']),
  ],
  settings,
}

export default [
  comments,
  preprocessor,
  strings,
  language,
  attributes,
  overrides,
]
