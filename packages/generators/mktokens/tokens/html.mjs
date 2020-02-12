import { html as htmlscope } from '@remedy/tools/tmscopes'

function html({ code }) {
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
  ]
}

export default html
