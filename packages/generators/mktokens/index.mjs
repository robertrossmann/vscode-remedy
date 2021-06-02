import * as color from 'color'
import * as tokens from './tokens'

function mktokens({ code, colours, tilts = false }) {
  return [
    ...tokens.common({ code }),
    ...tokens.cc({ code }),
    ...tokens.cpp({ code }),
    ...tokens.csharp({ code }),
    ...tokens.css({ code, colours }),
    ...tokens.html({ code, colours }),
    ...tokens.java({ code }),
    ...tokens.javascript({ code }),
    ...tokens.keyvaluelike({ code }),
    ...tokens.makefile({ code, colours }),
    ...tokens.markdown({ code, colours }),
    ...tokens.shell({ code }),
    ...tilts ? tokens.tilted : [],
  ]
}

function mksemantictokens({ code, tilts = false }) {
  return {
    class: code.classes,
    comment: code.comments,
    enum: code.types,
    enumMember: code.primitives,
    // TODO
    // event: '#ff0000',

    function: code.functions,
    interface: code.types,
    keyword: code.language,
    label: code.preprocessor,
    macro: code.preprocessor,
    member: code.functions,
    namespace: code.classes,
    number: code.primitives,
    operator: code.language,
    parameter: {
      foreground: code.variables,
      fontStyle: tilts ? 'italic' : '',
    },

    property: code.variables,
    regexp: code.regexp.sequences,
    string: code.strings,
    struct: code.types,
    type: code.types,
    typeParameter: code.types,
    variable: code.variables,

    'property.readonly': color(code.variables).mix(color(code.comments), 0.5).hex(),
    'variable.readonly': color(code.variables).mix(color(code.comments), 0.5).hex(),
    'variable.defaultLibrary': code.primitives,

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
  mktokens,
  mksemantictokens,
}
