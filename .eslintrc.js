module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: 'airbnb-base',
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
		"eol-last": [2, "always"],
    indent: [2, "tab"],
    "linebreak-style": [2, "unix"],
    "no-mixed-spaces-and-tabs": [2, "smart-tabs"],
    quotes: [2, "single"],
    semi: [2, "always", { avoidEscape: true, allowTemplateLiterals: true }],
  },
};
