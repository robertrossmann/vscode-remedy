## [3.0.1](https://github.com/robertrossmann/vscode-remedy/compare/3.0.0...3.0.1) (2019-10-31)


### Bug Fixes

* use correct link for Git Diff screenshot ([a826242](https://github.com/robertrossmann/vscode-remedy/commit/a826242))

# [3.0.0](https://github.com/robertrossmann/vscode-remedy/compare/2.2.1...3.0.0) (2019-10-31)


### Features

* add styles for GitLens extension 😍 ([cf8d1d9](https://github.com/robertrossmann/vscode-remedy/commit/cf8d1d9))
* add styles for LintLens extension ([997eb71](https://github.com/robertrossmann/vscode-remedy/commit/997eb71))
* make drop backgrounds more subtle ([a2ddcb9](https://github.com/robertrossmann/vscode-remedy/commit/a2ddcb9))
* make editor background more "colourless" ([8ca46f5](https://github.com/robertrossmann/vscode-remedy/commit/8ca46f5))
* make list items more prominent when selected / focused ([f6c27ac](https://github.com/robertrossmann/vscode-remedy/commit/f6c27ac))
* make status bar item hover more decent ([2296d0e](https://github.com/robertrossmann/vscode-remedy/commit/2296d0e))
* tweak bracket mach highlights ([afb6a48](https://github.com/robertrossmann/vscode-remedy/commit/afb6a48))
* use orange for all accents ([675b8d5](https://github.com/robertrossmann/vscode-remedy/commit/675b8d5))
* use text colour for line & selection highlights ([c71beec](https://github.com/robertrossmann/vscode-remedy/commit/c71beec))


### BREAKING CHANGES

* Orange is the new red. 😍

The reddish accents were great and all but the accents frequently clashed with diffs, errors and other things which are expected to be red by their very nature. Using a different accent we are free of those clashes. Don't worry, though, the orange still looks awesome! 🎨
* Previously, the current line highlight and selection highlight used the accent (red) colour. While it seemed like a good idea in the beginning due to various consistency reasons, it turned out to be rather a bad choice - red is also used in the diff view and selecting anything in the diff view, or simply trying to find the line where the cursor is currently placed by colour was almost impossible as they blended completely with the diff.

Changing the highlights to a very light variant of the base text colour improves the overal experience quite significantly. 🎨

## [2.2.1](https://github.com/robertrossmann/vscode-remedy/compare/2.2.0...2.2.1) (2019-10-23)


### Bug Fixes

* make black & white terminal colours more prominent ([3c3f2dd](https://github.com/robertrossmann/vscode-remedy/commit/3c3f2dd))

# [2.2.0](https://github.com/robertrossmann/vscode-remedy/compare/2.1.0...2.2.0) (2019-10-09)


### Features

* implement minimap's selectionHighlight ([d3c3463](https://github.com/robertrossmann/vscode-remedy/commit/d3c3463))

# [2.1.0](https://github.com/robertrossmann/vscode-remedy/compare/2.0.0...2.1.0) (2019-09-25)


### Bug Fixes

* treat curly braces as punctuation ([0f2d601](https://github.com/robertrossmann/vscode-remedy/commit/0f2d601))


### Features

* improve GraphQL syntax colouring ([1f4fd7e](https://github.com/robertrossmann/vscode-remedy/commit/1f4fd7e))
* improve italicising of language keywords ([f3564d3](https://github.com/robertrossmann/vscode-remedy/commit/f3564d3))

# [2.0.0](https://github.com/robertrossmann/vscode-remedy/compare/1.2.0...2.0.0) (2019-09-20)


### Bug Fixes

* remove invalid template variable from github release action ([64500ae](https://github.com/robertrossmann/vscode-remedy/commit/64500ae))


### Features

* offer non-italic version of the theme 💪 ([93eecb3](https://github.com/robertrossmann/vscode-remedy/commit/93eecb3))


### BREAKING CHANGES

* The theme has been split into two distinct versions:

- Remedy - Straight Up: A non-italic variant
- Remedy - Tilted: An italic variant that is best used with the Operator Mono font

As a side-effect, the italic variant should now italicise more languages without adding custom overrides into this theme, which means better consistency. 🎨

# [1.2.0](https://github.com/robertrossmann/vscode-remedy/compare/1.1.1...1.2.0) (2019-09-20)


### Features

* improve dotenv files' (.env) colour scheme ([bd521c2](https://github.com/robertrossmann/vscode-remedy/commit/bd521c2))

## [1.1.1](https://github.com/robertrossmann/vscode-remedy/compare/1.1.0...1.1.1) (2019-09-18)


### Bug Fixes

* commit generated & updated files upon release ([aaaaa66](https://github.com/robertrossmann/vscode-remedy/commit/aaaaa66))
