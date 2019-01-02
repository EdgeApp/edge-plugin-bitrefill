module.exports = {
  extends: [
    'standard',
    'plugin:flowtype/recommended',
    'plugin:react/recommended'
  ],
  settings: {
    react: {
      pragma: 'React', // Pragma to use, default to 'React'
      version: '16.2.0', // React version, default to the latest React stable release
      flowVersion: '0.66' // Flow version
    }
  },
  globals: {
    fetch: true
  },
  parser: 'babel-eslint',
  plugins: ['flowtype', 'standard', 'react'],
  rules: {
    camelcase: 'warn',
    'flowtype/generic-spacing': 'off',
    'flowtype/require-valid-file-annotation': [2, 'always'],
    'flowtype/semi': [2, 'never'],
    'no-throw-literal': 'error',
    'no-var': 'error',
    'prefer-const': 'error',
    'react/jsx-indent-props': ['error', 2],
    'react/jsx-no-duplicate-props': ['error', { ignoreCase: true }],
    'react/no-string-refs': 0,
    'react/no-typos': 'error',
    'react/prop-types': 0,
    'react/self-closing-comp': ['error', { component: true }]
  }
}
