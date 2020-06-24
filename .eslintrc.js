module.exports = {
  root: true,
  
  env: {
    browser: true,
    es2020: true,
    node: true,
  },

  extends: [
    'plugin:vue/essential',
    'airbnb-base',
  ],

  parserOptions: {
    ecmaVersion: 11,
    sourceType: 'module',
    parser: 'babel-eslint',
  },

  plugins: [
    'vue',
  ],

  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'prefer-destructuring': ['error', { object: true, array: false }],
    'no-unused-expressions': 0,
  },
};
