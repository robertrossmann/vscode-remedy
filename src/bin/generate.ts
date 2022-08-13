/* eslint-disable import/no-unused-modules */
import 'source-map-support/register'
import 'tsconfig-paths/register'
import * as fs from 'fs'
import * as path from 'path'
import type { VSCTheme } from '@remedy/types'

const entrypoint = process.argv[2]
const outfile = process.argv[3]

if (!entrypoint || !outfile) {
  throw new Error('Usage: generate <entrypoint> <outfile>')
}

import(path.resolve(process.cwd(), entrypoint))
  .then(({ default: theme }: { default: VSCTheme }) => {
    const data = `${JSON.stringify(theme, null, 2)}\n`
    const destination = path.resolve(process.cwd(), outfile)

    fs.writeFileSync(destination, data)
  })
  .catch((err: Error) => {
    throw err
  })
