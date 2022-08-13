import {
  css,
  jsts,
  pug,
  makefile,
} from '@remedy/tools/tmscopes'
import { TMFontStyle, type TMRuleSetting, type TMRule } from '@remedy/types'

const settings: TMRuleSetting = {
  fontStyle: TMFontStyle.ITALIC,
}

const comments: TMRule = {
  scope: [
    'comment',
    'punctuation.definition.comment',
  ],
  settings,
}

const preprocessor: TMRule = {
  scope: [
    'punctuation.definition.directive',
    'entity.name.function.preprocessor',
    'entity.name.function.directive',
  ],
  settings,
}

const strings: TMRule = {
  scope: [
    'string',
  ],
  settings,
}

const language: TMRule = {
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

const attributes: TMRule = {
  scope: [
    'entity.other.attribute-name',
  ],
  settings,
}

const overrides: TMRule = {
  scope: [
    ...css(['entity.name.tag']),
    ...jsts(['storage.type.js', 'storage.type.ts', 'storage.type.tsx']),
    ...makefile(['meta.scope.prerequisites']),
    ...pug(['storage.type.import.include']),
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
