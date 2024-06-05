import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";


export default [
  {
    languageOptions: { 
      globals: globals.browser 
    }
  },
  {
    ignores: ["*.config.*"]
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
];