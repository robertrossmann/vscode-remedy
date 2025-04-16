import { TMFontStyle, type SemanticRules } from '@remedy/vscode-types'
import Color from 'color'
import { type ThemeInfo } from '../index.js'

function mksemantictokens(info: ThemeInfo): SemanticRules {
  return {
    class: info.code.classes,
    comment: info.code.comments,
    enum: info.code.types,
    enumMember: info.code.primitives,
    // TODO
    // event: '#ff0000',

    function: info.code.functions,
    method: info.code.functions,
    interface: info.code.types,
    keyword: info.code.language,
    label: info.code.preprocessor,
    macro: info.code.preprocessor,
    namespace: info.code.classes,
    number: info.code.primitives,
    operator: info.code.language,
    parameter: {
      foreground: info.code.variables,
      fontStyle: info.tilts ? TMFontStyle.ITALIC : TMFontStyle.NORMAL,
    },

    property: info.code.variables,
    regexp: info.code.regexp.sequences,
    string: info.code.strings,
    struct: info.code.types,
    type: info.code.types,
    typeParameter: info.code.types,
    variable: info.code.variables,

    'property.readonly': new Color(info.code.variables).mix(new Color(info.code.comments), 0.5),
    'variable.readonly': new Color(info.code.variables).mix(new Color(info.code.comments), 0.5),
    'variable.defaultLibrary': info.code.primitives,

    // '*.deprecated': ui.problems.error.hex(),
    // '*.readonly': '#ff0000',
    // '*.static': '#ff0000',
    // '*.abstract': '#ff0000',
    // '*.async': '#ff0000',
    // '*.modification': '#ff0000',
    // '*.documentation': '#ff0000',
    // '*.defaultLibrary': '#ff0000',
  }
}

export {
  mksemantictokens,
}
