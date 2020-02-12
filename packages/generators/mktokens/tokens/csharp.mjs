import { cs as csscope } from '@remedy/tools/tmscopes'

function csharp({ code }) {
  const classes = {
    scope: csscope([
      'entity.name.type.namespace',
    ]),
    settings: {
      foreground: code.classes,
    },
  }

  const types = {
    scope: csscope([
      'keyword.type',
    ]),
    settings: {
      foreground: code.types,
    },
  }
  return [
    classes,
    types,
  ]
}

export default csharp
