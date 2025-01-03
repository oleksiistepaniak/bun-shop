import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    files: ["**/*.{js,mjs,cjs,ts}"],
    rules: {
      "brace-style": ["error", "stroustrup", { allowSingleLine: false }],
      "semi": ["error", "always"],
    }
  },
  {
    languageOptions: { globals: globals.browser}
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
];
