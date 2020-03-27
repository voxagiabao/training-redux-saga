module.exports = {
  parser: "babel-eslint",
  parserOptions: {
    ecmaVersion: 7,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "airbnb",
    "prettier",
  ],
  rules: {
    "react/prop-types": 1,
    "react/jsx-max-props-per-line": 1,
    "linebreak-style": 0,
    "import/no-extraneous-dependencies": 0,
    "react/require-default-props": 0,
    "class-methods-use-this": 0,
    "react/jsx-filename-extension": 0,
    "react/jsx-one-expression-per-line": 0,
    "react/forbid-prop-types": 0,
    "comma-dangle": 0,
    "arrow-parens": 0,
    "prettier/prettier": "error",
    "react/prefer-stateless-function": [0, { ignorePureComponents: true }],
    "no-unused-vars": 1,
    "import/order": 1,
    "import/extensions": 0,
    "no-use-before-define": 0,
    "no-param-reassign": 0,
    "import/no-useless-path-segments": 0,
    "import/prefer-default-export": 0,
    "react/no-array-index-key": 1,
    "react/jsx-curly-brace-presence": 1,
  },
  plugins: ["prettier"],
  env: {
    es6: true,
    browser: true,
    node: true,
  },
};
