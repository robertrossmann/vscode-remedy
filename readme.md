<div align="center">

![Remedy Icon][remedy-icon]

# VS Code - Remedy

![Built with GNU Make][make-badge]
[![Marketplace][marketplace-badge]][marketplace-link]

> A dark & bright theme with orange accents with roots in Base16 - Eighties colour theme

The theme features a orange accent throughout the UI. Code colours are based in the Base16 -
Eighties colours. My goal is to provide a very consistent colour coding for various tokens, so that
they look identical not just for a single language but also across all languages (ie. strings, type
annotations, classes, language keywords etc. have the same colour regardless of the language you
use). I believe I achieved that goal. 😍

> Best used with [Operator Mono][operator-link].

[![Showcase - Dark][screen-dark]][screen-dark]
[![Showcase - Bright][screen-bright]][screen-bright]

</div>

## Installation

Go to the [Marketplace][marketplace-link] and install the theme from there. Alternatively, open the Extensions view in
VS Code and search for `@id:robertrossmann.remedy`.

## Language support

Most languages should provide reasonably well-defined colouring, though due to the TextMate grammars
not really using a standardised way of tokenising the code there might be slight deviations (ie.
some parts of code will have generic white-ish colour or language tokens will not be italicised).
The following languages have been manually tweaked to provide best experience:

- C / C++
- C#
- Go
- GraphQL
- HTML & CSS & Less
- Pug
- Java
- JavaScript & React
- TypeScript & React
- Svelte
- JSON
- Make
- Markdown
- PHP
- Shell
- SQL
- YAML

## Screenshots

### UI

[![UI][screen-gui]][screen-gui]

### Peek View

[![Peek View][screen-peekview]][screen-peekview]

### Find & Replace

[![Find & Replace][screen-search]][screen-search]

### GitLens

[![GitLens][screen-gitlens]][screen-gitlens]

### Diffs

[![Diffs][screen-diff]][screen-diff]

## Additional resources

### Terminals

We have some terminal profiles and other goodies available for download as well. ❤️

- [MacOS Terminal](resources/terminal)
- [iTerm2](resources/iTerm2)
- [Slack](resources/slack)

## License

See the [LICENSE](LICENSE) file for information.

[make-badge]: https://img.shields.io/badge/Built%20with-GNU%20Make-brightgreen.svg?style=flat-square
[remedy-icon]: https://raw.githubusercontent.com/robertrossmann/vscode-remedy/master/resources/vscode-remedy-icon.png
[marketplace-badge]: https://img.shields.io/badge/Download%20On-Marketplace-brightgreen.svg?style=flat-square
[marketplace-link]: https://marketplace.visualstudio.com/items?itemName=robertrossmann.remedy
[operator-link]: https://www.typography.com/fonts/operator/styles/operatormono
[screen-dark]: https://user-images.githubusercontent.com/3058150/73192537-758f1f80-4129-11ea-82b6-730062082ebc.png
[screen-bright]: https://user-images.githubusercontent.com/3058150/74436488-d7a88e00-4e66-11ea-8d06-ce9129de16f1.png
[screen-gui]: https://raw.githubusercontent.com/robertrossmann/vscode-remedy/master/resources/screenshots/gui.png
[screen-peekview]: https://raw.githubusercontent.com/robertrossmann/vscode-remedy/master/resources/screenshots/peekview.png
[screen-search]: https://raw.githubusercontent.com/robertrossmann/vscode-remedy/master/resources/screenshots/search.png
[screen-gitlens]: https://raw.githubusercontent.com/robertrossmann/vscode-remedy/master/resources/screenshots/gitlens.png
[screen-diff]: https://raw.githubusercontent.com/robertrossmann/vscode-remedy/master/resources/screenshots/diff.png
