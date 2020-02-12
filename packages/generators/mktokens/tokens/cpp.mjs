import { cpp as cppscope } from '@remedy/tools/tmscopes'

function cpp({ code }) {
  const language = {
    scope: cppscope([
      'storage.type.namespace.definition',
    ]),
    settings: {
      foreground: code.language,
    },
  }

  const classes = {
    scope: cppscope([
      'entity.name.type.namespace',
    ]),
    settings: {
      foreground: code.classes,
    },
  }

  return [
    classes,
    language,
  ]
}

export default cpp
