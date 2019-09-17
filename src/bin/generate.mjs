import 'source-map-support/register'
import * as fs from 'fs'
import * as path from 'path'

const entrypoint = process.argv[2]
const outfile = process.argv[3]

const theme = require(path.resolve(process.cwd(), entrypoint)).default

// Generate the theme files
fs.writeFileSync(
  path.resolve(process.cwd(), outfile),
  `${JSON.stringify(theme, null, 2)}\n`,
)

export default {}
