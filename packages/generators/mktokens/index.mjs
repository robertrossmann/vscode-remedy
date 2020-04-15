import * as tokens from './tokens'

function mktokens({ code, colours, tilts = false }) {
  return [
    ...tokens.common({ code }),
    ...tokens.cc({ code }),
    ...tokens.cpp({ code }),
    ...tokens.csharp({ code }),
    ...tokens.css({ code, colours }),
    ...tokens.html({ code }),
    ...tokens.java({ code }),
    ...tokens.javascript({ code }),
    ...tokens.keyvaluelike({ code }),
    ...tokens.makefile({ code, colours }),
    ...tokens.markdown({ code, colours }),
    ...tokens.shell({ code }),
    ...tilts ? tokens.tilted : [],
  ]
}

export {
  mktokens,
}
