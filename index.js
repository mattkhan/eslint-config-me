import reactRefreshPlugin from "eslint-plugin-react-refresh";
import reactHooksPlugin from "eslint-plugin-react-hooks";
import tsParser from "@typescript-eslint/parser";
import importPlugin from "eslint-plugin-import";
import a11yPlugin from "eslint-plugin-jsx-a11y";
import reactPlugin from "eslint-plugin-react";
import ts from "@typescript-eslint/eslint-plugin";
import js from "@eslint/js";
import globals from "globals";

export default [
  {
    files: ["**/*.{ts,tsx}"],
    plugins: {
      react: reactPlugin,
      "react-hooks": reactHooksPlugin,
      "react-refresh": reactRefreshPlugin,
      "@typescript-eslint": ts,
      import: importPlugin,
      a11y: a11yPlugin,
    },
    rules: {
      ...js.configs.recommended.rules,
      ...ts.configs.recommended.rules,
      ...reactHooksPlugin.configs.recommended.rules,
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true },
      ],
    },
    languageOptions: {
      parser: tsParser,
      sourceType: "module",
      globals: {
        ...globals.browser,
      },
    },
  },
];
