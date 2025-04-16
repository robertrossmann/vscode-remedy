import { TMFontStyle, type TMRule } from '@remedy/vscode-types'
import { type ThemeInfo } from '../../index.js'

function common(info: ThemeInfo): TMRule[] {
  const primitives = {
    name: 'Primitive values',
    scope: [
      'entity.name.tag',
      'constant.numeric',
      'constant.language',
      'support.type.builtin',
      'support.type.primitive',
      'support.constant',
    ],
    settings: {
      foreground: info.code.primitives,
    },
  }

  const comments = {
    name: 'Comments',
    scope: [
      'comment',
      'punctuation.definition.comment',
    ],
    settings: {
      foreground: info.code.comments,
    },
  }

  const language = {
    name: 'Language tokens',
    scope: [
      'keyword',
      'storage',
      // Re-specified due to conflict with 'storage.type' scope
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
    settings: {
      foreground: info.code.language,
    },
  }

  const preprocessor = {
    name: 'Preprocessor & directives',
    scope: [
      'punctuation.definition.directive',
      'keyword.control.directive',
      'entity.name.function.preprocessor',
      'entity.name.function.directive',
      'entity.name.label',
    ],
    settings: {
      foreground: info.code.preprocessor,
    },
  }

  const functions = {
    name: 'Functions',
    scope: [
      'entity.name.function',
      'support.function',
    ],
    settings: {
      foreground: info.code.functions,
    },
  }

  const classes = {
    name: 'Classes & namespaces',
    scope: [
      'entity.name.type.class',
      'entity.name.type.namespace',
      'entity.other.inherited-class',
      'storage.type.namespace',
      'support.class',
      'support.other.namespace',
    ],
    settings: {
      foreground: info.code.classes,
    },
  }

  const types = {
    name: 'Types & type annotations',
    scope: [
      'storage.type',
      'entity.name.type',
      // PHP uses this in docblock type annotations
      'keyword.other.type',
      'support.type',
    ],
    settings: {
      foreground: info.code.types,
    },
  }

  const variables = {
    name: 'Variables',
    scope: [
      'variable',
    ],
    settings: {
      foreground: info.code.variables,
    },
  }

  const constants = {
    name: 'Constants & language-provided variables',
    scope: [
      'constant',
      'variable.language',
    ],
    settings: {
      foreground: info.code.constants,
    },
  }

  const punctuation = {
    name: 'Punctuation',
    scope: [
      'punctuation',
      'meta.brace.angle',
      'meta.brace.round',
      'meta.brace.square',
      'meta.brace.curly',
      'meta.brackets',
    ],
    settings: {
      foreground: info.code.punctuation,
    },
  }

  const strings = {
    name: 'Strings',
    scope: [
      'string',
    ],
    settings: {
      foreground: info.code.strings,
    },
  }

  const escapes = {
    name: 'Escape sequences',
    scope: [
      'constant.character.escape',
    ],
    settings: {
      foreground: info.code.escapes,
    },
  }

  const regexps = {
    name: 'Regular expressions',
    scope: [
      'string.regexp',
      'string.regexp punctuation.definition',
    ],
    settings: {
      foreground: info.code.regexp.sequences,
    },
  }

  const regexpranges = {
    name: 'Regular expressions character classes',
    scope: [
      'string.regexp constant.other.character-class',
    ],
    settings: {
      foreground: info.code.regexp.ranges,
    },
  }

  const regexpsets = {
    name: 'Regular expressions character sets',
    scope: [
      'string.regexp constant.other.character-class.set',
    ],
    settings: {
      foreground: info.code.regexp.charsets,
    },
  }

  const headings = {
    name: 'Headings & sections',
    scope: [
      'entity.name.section',
      'punctuation.definition.heading',
    ],
    settings: {
      fontStyle: TMFontStyle.BOLD,
      foreground: info.code.decoratives.headings,
    },
  }

  const docblocks = {
    name: 'Docblock Variables',
    scope: [
      'variable.other.jsdoc',
      'meta.other.type.phpdoc',
      'comment.block.javadoc variable.parameter',
    ],
    settings: {
      foreground: info.code.dockblockVariables,
    },
  }

  const links = {
    name: 'Links',
    scope: [
      'variable.other.link',
    ],
    settings: {
      foreground: info.code.decoratives.links,
    },
  }

  return [
    primitives,
    comments,
    language,
    preprocessor,
    punctuation,
    classes,
    types,
    functions,
    variables,
    constants,
    strings,
    escapes,
    regexps,
    regexpranges,
    regexpsets,
    headings,
    docblocks,
    links,
  ]
}

export default common
