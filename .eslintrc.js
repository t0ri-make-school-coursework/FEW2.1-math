module.exports = {
  parser:  '@typescript-eslint/parser',
  env: {
    browser: true,
    es6: true,
  },
  extends:  [
    'plugin:@typescript-eslint/recommended',  // Uses the recommended rules from the @typescript-eslint/eslint-plugin
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  rules: {
    "semi": 0,
    "no-extend-native": 0,
    "no-undef": 0,
  },
};
