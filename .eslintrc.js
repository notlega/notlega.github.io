module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: "eslint:recommended",
  overrides: [],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  rules: {
    "array-bracket-spacing": [2, "never"],
    camelcase: [1, { allow: ["[a-z]+[_][a-z]+"] }],
    curly: [2, "multi-line"],
    "eol-last": [2, "always"],
    eqeqeq: [2, "smart"],
    indent: [2, "tab"],
    "keyword-spacing": [2, { before: true, after: true }],
    "linebreak-style": [2, "unix"],
    "no-mixed-spaces-and-tabs": [2, "smart-tabs"],
    "no-tabs": [2, { allowIndentationTabs: true }],
    "object-curly-spacing": [2, "always"],
    "operator-linebreak": [
      2,
      "after",
      { overrides: { "?": "before", ":": "before" } },
    ],
    quotes: [2, "single"],
    semi: [2, "always", { avoidEscape: true, allowTemplateLiterals: true }],
    "space-unary-ops": 2,
  },
};
