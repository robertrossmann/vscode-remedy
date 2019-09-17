'use strict'

module.exports = {
  compact: false,
  comments: false,
  sourceMaps: 'inline',
  plugins: [
    '@babel/syntax-object-rest-spread',
    ['@babel/transform-modules-commonjs', {
      allowTopLevelThis: false,
      noInterop: true,
    }],
  ],
  ignore: [
    '**/node_modules',
  ],
}
