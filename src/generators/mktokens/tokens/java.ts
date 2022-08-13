import type { InputParams } from './InputParams'
import { java as javascope } from '@remedy/tools/tmscopes'
import type { TMRule } from '@remedy/types'

function java({ code }: InputParams): TMRule[] {
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
