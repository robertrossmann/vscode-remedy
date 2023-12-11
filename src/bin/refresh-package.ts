/* eslint-disable import/no-unused-modules */
import 'source-map-support/register'
import 'tsconfig-paths/register'
import * as fs from 'fs'
import * as path from 'path'
import * as pkg from '../../package.json'
import { type VSCTheme } from '@remedy/types'

const themefiles = process.argv.slice(2)
const metadata = themefiles.map(file => {
  // eslint-disable-next-line
  const theme = require(path.resolve(process.cwd(), file)).default as VSCTheme

  return {
    label: theme.name,
    uiTheme: theme.type,
    path: `${file.replace('src/', './')}-color-theme.json`,
  }
})

const themes = {
  found: metadata.map(theme => theme.label),
  current: pkg.contributes.themes.map(theme => theme.label),
}

if (themes.found.some(theme => !themes.current.includes(theme))) {
  pkg.contributes.themes = metadata

  fs.writeFileSync(
    path.resolve(__dirname, '../../package.json'),
    `${JSON.stringify(pkg, null, 2)}\n`,
  )
}
