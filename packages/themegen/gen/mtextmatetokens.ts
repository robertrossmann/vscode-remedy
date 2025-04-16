import { type TMRule } from '@remedy/vscode-types'
import { type ThemeInfo } from '../index.js'
import * as textmate from './textmate/index.js'

function mktextmatetokens(info: ThemeInfo): TMRule[] {
  return [
    ...textmate.common(info),
    ...textmate.cc(info),
    ...textmate.cpp(info),
    ...textmate.csharp(info),
    ...textmate.css(info),
    ...textmate.html(info),
    ...textmate.pug(info),
    ...textmate.java(info),
    ...textmate.javascript(info),
    ...textmate.keyvaluelike(info),
    ...textmate.makefile(info),
    ...textmate.markdown(info),
    ...textmate.shell(info),
    ...info.tilts ? textmate.tilted : [],
  ]
}

export {
  mktextmatetokens,
}
