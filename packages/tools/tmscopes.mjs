import { mkscope } from './prescope'

const cpp = mkscope(['source.cpp', 'meta.embedded.block.cpp'])
const cs = mkscope(['source.cs', 'meta.embedded.block.csharp'])
const css = mkscope(['source.css', 'meta.embedded.block.css', 'meta.embedded.block.less'])
const dotenv = mkscope(['source.env'])
const html = mkscope(['text.html', 'meta.embedded.block.html'])
const java = mkscope(['source.java', 'meta.embedded.block.java'])
const jsts = mkscope([
  'source.js',
  'source.ts',
  'meta.embedded.block.javascript',
  'meta.embedded.block.typescript',
])
const json = mkscope(['source.json', 'meta.embedded.block.json'])
const makefile = mkscope(['source.makefile', 'meta.embedded.block.makefile'])
const markdown = mkscope(['text.html.markdown', 'meta.embedded.block.markdown'])
const php = mkscope(['source.php', 'meta.embedded.block.php'])
const shell = mkscope(['source.shell', 'meta.embedded.block.shellscript'])
const terraform = mkscope(['source.terraform', 'meta.embedded.block.terraform'])
const yaml = mkscope(['source.yaml', 'meta.embedded.block.yaml'])

export {
  cpp,
  cs,
  css,
  dotenv,
  html,
  java,
  jsts,
  json,
  makefile,
  markdown,
  php,
  shell,
  terraform,
  yaml,
}
