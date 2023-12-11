/* eslint-disable import/no-unused-modules */
import 'source-map-support/register'
import 'tsconfig-paths/register'
import * as fs from 'fs/promises'
import * as path from 'path'
import { type VSCTheme } from '@remedy/types'

const entrypoint = process.argv[2]
const outfile = process.argv[3]

if (!entrypoint || !outfile) {
  throw new Error('Usage: generate <entrypoint> <outfile>')
}

// eslint-disable-next-line node/no-unsupported-features/es-syntax
import(path.resolve(process.cwd(), entrypoint))
  .then(async ({ default: theme }: { default: VSCTheme }) => {
    const data = `${JSON.stringify(theme, null, 2)}\n`
    const destination = path.resolve(process.cwd(), outfile)

    await fs.writeFile(destination, data)
  })
  .catch((err: Error) => {
    throw err
  })
