module.exports = {
  env: {
    commonjs: true,
    es2021: true,
    node: true,
  },
  extends: ['airbnb-base', 'prettier', 'prettier/standard'],
  parserOptions: {
    ecmaVersion: 12,
  },
  rules: {
    'no-param-reassign': ['error', { props: false }],
    'func-names': ['error', 'as-needed'],
  },
};
