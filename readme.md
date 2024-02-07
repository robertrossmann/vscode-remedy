<div align="center">

![Remedy Icon][remedy-icon]

# VS Code - Remedy

![Built with GNU Make][make-badge] [![Marketplace][marketplace-badge]][marketplace-link]

> A dark & bright theme with orange accents with roots in Base16 - Eighties colour theme.
> Best used with [Operator Mono][operator-link].

[![Showcase - Dark][screen-dark]][screen-dark]
[![Showcase - Bright][screen-bright]][screen-bright]

</div>

## Features

- very strong colour coding consistency not just for a single language but across all languages (ie. strings, variables, interfaces etc. are always the same colour)
- consistent UI colours across the whole VS Code UI - panels have the same background colour, hovers behave the same way, git decorations look the same regardless of where they are displayed etc.
- (optional) language tokens (`for`, `while`, `return` etc.) and strings are italicised for some extra swag (works best with the Operator Mono font)

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
[screen-dark]: https://github.com/robertrossmann/vscode-remedy/assets/3058150/e5c82f9d-f6e9-4038-b2a9-1b311a8267d5
[screen-bright]: https://github.com/robertrossmann/vscode-remedy/assets/3058150/c516d441-2b83-4bdf-9a98-85bbd82af4ba
