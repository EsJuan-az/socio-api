import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import eslintConfigPrettier from "eslint-config-prettier";

export default [
  {files: ["./**/*.{js,mjs,cjs,ts}"]},
  {languageOptions: { globals: globals.browser }},
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  {
    ignores: ['node_modules', 'dist', 'public'],
  },
  eslintConfigPrettier,
  {
    env: {
      node: true,
    },
    rules: {
      "no-unused-vars": ["error"],
      "no-undef": ["warn"],
      "semi": ["error"],
      "comma-dangle": ["error", "always-multiline"],
      "no-console": ["warn"],
    },
    settings: {
      'import/resolver': {
        typescript: {} // Usa el resolutor de TypeScript para resolver los alias
      }
    },
  },
];