import { code } from '@remedy/palette'
import { jsts } from '@remedy/tools/tmscopes'

const builtins = {
  scope: jsts([
    'support.variable.object',
    'support.type.object.module',
  ]),
  settings: {
    foreground: code.primitives,
  },
}

const language = {
  scope: [
    'source.js storage.type.js',
    'source.ts storage.type.ts',
    'meta.embedded.block.javascript storage.type.js',
    'meta.embedded.block.typescript storage.type.ts',
    ...jsts([
      'storage.type.class',
      'storage.type.function',
    ]),
  ],
  settings: {
    foreground: code.language,
  },
}

const classes = {
  scope: jsts([
    'new.expr entity.name.type',
  ]),
  settings: {
    foreground: code.classes,
  },
}

const types = {
  scope: [
    'source.ts meta.type.annotation entity.name.type',
    'meta.embedded.block.typescript meta.type.annotation entity.name.type',
  ],
  settings: {
    foreground: code.types,
  },
}

const attributes = {
  scope: jsts([
    // JSX element attributes
    'meta.tag.attributes entity.other.attribute-name',

    'variable.other.constant.property',
  ]),
  settings: {
    foreground: code.constants,
  },
}

export default [
  builtins,
  language,
  classes,
  attributes,
  types,
]
