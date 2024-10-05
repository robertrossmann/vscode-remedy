export default {
  extends: [
    '@commitlint/config-conventional',
  ],
  rules: {
    'body-leading-blank': [2, 'always'],
    'body-max-line-length': [0],
    'footer-max-line-length': [0],
  },
}
