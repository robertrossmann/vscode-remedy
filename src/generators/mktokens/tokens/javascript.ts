import { type InputParams } from './InputParams'
import { jsts as jstsscope } from '@remedy/tools/tmscopes'
import { type TMRule } from '@remedy/types'

function javascript({ code }: InputParams): TMRule[] {
  const builtins = {
    scope: jstsscope([
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
      'source.tsx storage.type.tsx',
      'meta.embedded.block.javascript storage.type.js',
      'meta.embedded.block.typescript storage.type.ts',
      'meta.embedded.block.svelte storage.type.js',
      'meta.embedded.block.svelte storage.type.ts',
      ...jstsscope([
        'storage.type.class',
        'storage.type.function',
      ]),
    ],
    settings: {
      foreground: code.language,
    },
  }

  const classes = {
    scope: jstsscope([
      'new.expr entity.name.type',
    ]),
    settings: {
      foreground: code.classes,
    },
  }

  const types = {
    scope: [
      'source.ts meta.type.annotation entity.name.type',
      'source.tsx meta.type.annotation entity.name.type',
      'meta.embedded.block.typescript meta.type.annotation entity.name.type',
      'meta.embedded.block.typescriptreact meta.type.annotation entity.name.type',
    ],
    settings: {
      foreground: code.types,
    },
  }

  const attributes = {
    scope: jstsscope([
      // JSX element attributes
      'meta.tag.attributes entity.other.attribute-name',
      // Svelte element attributes
      'meta.attribute entity.other.attribute-name',

      'variable.other.constant.property',
    ]),
    settings: {
      foreground: code.constants,
    },
  }

  return [
    builtins,
    language,
    classes,
    attributes,
    types,
  ]
}

export default javascript
