import * as os from 'node:os'
import * as fs from 'node:fs/promises'
import * as url from 'node:url'

const catalog = new Map<string, string>()
const data = await fetch('https://raw.githubusercontent.com/microsoft/vscode-docs/refs/heads/main/api/references/theme-color.md')
const file = await data.text()
const destfile = url.fileURLToPath(import.meta.resolve('../VSCColorContributions.ts'))
const filter = /^\s?-\s?`(?<token>.*)`\s?:\s?(?<description>.*)$/iu

for (const line of file.split(os.EOL)) {
  const matches = filter.exec(line)

  if (matches?.groups?.token && matches.groups.description) {
    catalog.set(matches.groups.token, matches.groups.description)
  }
}

const sorted = [...catalog.entries()].sort(([current], [next]) => current.localeCompare(next))

const template = `
/* eslint-disable @stylistic/max-len */
import { type ColorInstance } from 'color'

/**
 * Source: https://raw.githubusercontent.com/microsoft/vscode-docs/refs/heads/main/api/references/theme-color.md
 */
interface VSCColorContributions {
${sorted
  .map(([token, description]) => `  /** ${description.trim()} */\n  '${token.trim()}'?: ColorInstance\n`)
  .join('')}
}

export {
  VSCColorContributions,
}
`

await fs.writeFile(destfile, template.trim())
