import * as fs from 'node:fs/promises'
import * as path from 'node:path'
import { type Theme } from '@remedy/vscode-types'

const themename = process.argv[2]
const outfile = process.argv[3]

if (!themename || !outfile) {
  throw new Error('Usage: generate <entrypoint> <outfile>')
}

const theme = (await import(`#themes/${themename}`) as { default: Theme }).default
const data = `${JSON.stringify(theme, null, 2)}\n`
const destination = path.resolve(process.cwd(), outfile)

await fs.writeFile(destination, data)
