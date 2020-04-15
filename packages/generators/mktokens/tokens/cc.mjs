import { cc as cscope } from '@remedy/tools/tmscopes'

function cc({ code }) {
  const punctuation = {
    scope: cscope([
      'storage.modifier.array.bracket.square',
    ]),
    settings: {
      foreground: code.punctuation,
    },
  }

  const primitives = {
    scope: cscope([
      'keyword.other.unit',
    ]),
    settings: {
      foreground: code.primitives,
    },
  }

  return [
    punctuation,
    primitives,
  ]
}


export default cc
