module.exports = {
  parser: 'babel-eslint',
  extends: [
    'airbnb', 'prettier', 'prettier/react'
  ],
  plugins: [
    'react', 'react-native', 'jsx-a11y', 'prettier', 'import'
  ],
  settings: {
    'import/resolver': 'reactnative'
  },
  env: {
    jest: true
  },
  rules: {
    'no-return-assign': 0,
    'react/jsx-filename-extension': [
      2, {
        extensions: ['.js']
      }
    ],
    'react-native/no-unused-styles': 2,
    'react-native/split-platform-components': 2,
    'react-native/no-inline-styles': 2,
    'react-native/no-color-literals': 2,
    'max-len' : [
      2, 100
    ],
    'global-require': 0,
    'prettier/prettier': [
      'error', {
        printWidth: 80,
        tabWidth: 2,
        singleQuote: true,
        trailingComma: 'all'
      }
    ]
  },
  globals: {
    '__DEV__': true,
    'device' : false,
    'expect' : false,
    'waitFor' : false,
    'element' : false,
    'by' : false,
  }
}
