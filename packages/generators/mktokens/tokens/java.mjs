import { java as javascope } from '@remedy/tools/tmscopes'

function java({ code }) {
  const variables = {
    scope: javascope([
      'storage.modifier.import',
      'storage.modifier.package',
    ]),
    settings: {
      foreground: code.variables,
    },
  }

  return [
    variables,
  ]
}

export default java
