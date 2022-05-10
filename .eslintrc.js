module.exports = {
  "env": {
    "browser": true,
    "es2021": true
  },
  "extends": [
    "airbnb-base",
    'eslint:recommended'
  ],
  "parserOptions": {
    "ecmaVersion": "latest"
  },
  "rules": {
    'semi': ['error', 'always'],
    'quotes': ['error', 'single', { "allowTemplateLiterals": true }],
    'linebreak-style': ["error", "windows"],
    "no-param-reassign": 0,
    "no-restricted-globals": 0,
    'no-use-before-define': ["error", { "functions": false }],
    'max-len': ["error", { "code": 120 }]
  },
};
