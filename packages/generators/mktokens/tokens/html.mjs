import { html as htmlscope } from '@remedy/tools/tmscopes'

function html({ code, colours }) {
  const ids = {
    scope: htmlscope([
      'meta.attribute.id string.quoted',
    ]),
    settings: {
      foreground: colours.normal.green.hex(),
    },
  }
  const attributes = {
    scope: htmlscope([
      'entity.other.attribute-name',
    ]),
    settings: {
      foreground: code.constants,
    },
  }

  return [
    attributes,
    ids,
  ]
}

export default html
