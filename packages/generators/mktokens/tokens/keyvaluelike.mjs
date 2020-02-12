import {
  dotenv as dotenvscope,
  json as jsonscope,
  terraform as terraformscope,
  yaml as yamlscope,
} from '@remedy/tools/tmscopes'

function keyvaluelike({ code }) {
  const keys = {
    scope: [
      ...dotenvscope(['variable']),
      ...jsonscope(['support.type.property-name']),
      ...terraformscope(['source.terraform.embedded.source variable.other.terraform']),
      ...yamlscope(['entity.name.tag']),
    ],
    settings: {
      foreground: code.keyvaluelike.keys,
    },
  }

  const punctuation = {
    scope: [
      ...yamlscope(['entity.other.document.begin']),
      ...terraformscope(['entity.tag.embedded']),
    ],
    settings: {
      foreground: code.punctuation,
    },
  }

  return [
    keys,
    punctuation,
  ]
}

export default keyvaluelike
