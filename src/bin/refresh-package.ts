import * as fs from 'node:fs'
import * as path from 'node:path'
import pkg from '../../package.json' with { type: 'json'}
import { type Theme } from '@remedy/vscode-types'

const themefiles = process.argv.slice(2)
const metadata = await Promise.all(themefiles.map(async file => {
  const theme = (await import(`#themes/${path.basename(file)}`) as { default: Theme }).default

  return {
    label: theme.name,
    uiTheme: theme.type,
    path: `${file.replace('src/', './')}-color-theme.json`,
  }
}))

const themes = {
  found: metadata.map(theme => theme.label),
  current: pkg.contributes.themes.map(theme => theme.label),
}

if (themes.found.some(theme => !themes.current.includes(theme))) {
  pkg.contributes.themes = metadata

  fs.writeFileSync(
    import.meta.resolve('../../package.json'),
    `${JSON.stringify(pkg, null, 2)}\n`,
  )
}
