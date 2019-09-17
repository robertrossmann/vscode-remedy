'use strict'

module.exports = {
  parser: 'babel-eslint',

  extends: [
    '@strv/node/v12',
    '@strv/node/optional',
    '@strv/node/style',
  ],

  rules: {
    // If your editor cannot show these to you, occasionally turn this off and run the linter
    'no-warning-comments': 0,
  },
}
