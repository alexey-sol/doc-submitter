module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: [
        "next/core-web-vitals",
        "airbnb",
        "plugin:react/recommended",
        "plugin:import/typescript",
        "plugin:@typescript-eslint/recommended",
    ],
    ignorePatterns: ["node_modules/"],
    parser: "@typescript-eslint/parser",
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 2020,
        sourceType: "module",
    },
    plugins: [
        "@typescript-eslint",
        "react",
        "react-hooks",
        "import",
    ],
    settings: {
        "import/parsers": {
            "@typescript-eslint/parser": [".js", ".jsx", ".ts", ".tsx"],
        },
        "import/resolver": {
            alias: {
                extensions: [".js", ".jsx", ".ts", ".tsx", ".json"],
                map: [
                    ["@/components", "./components"],
                    ["@/pages", "./pages"],
                    ["@/utils", "./utils"],
                ],
            },
            node: {
                extensions: [".js", ".jsx", ".ts", ".tsx"],
                paths: ["./"],
            },
        },
    },
    rules: {
        "@typescript-eslint/explicit-module-boundary-types": ["off"],
        "@typescript-eslint/no-empty-function": "off",
        "@typescript-eslint/no-shadow": "error",
        "@typescript-eslint/no-unused-vars": ["error", { args: "none" }],
        "class-methods-use-this": "off",
        "consistent-return": "off",
        "import/extensions": "off",
        "import/no-extraneous-dependencies": ["error", {
            devDependencies: ["**/*.test.*", "**/*.spec.*", "**/jest.setup.*", "jest.config.*"],
        }],
        "import/no-unresolved": "error",
        "import/prefer-default-export": "off",
        indent: ["error", 4, { SwitchCase: 1 }],
        quotes: ["error", "double"],
        "lines-between-class-members": "off",
        "max-classes-per-file": "off",
        "max-len": ["error", { code: 100 }],
        "no-confusing-arrow": "off",
        "no-else-return": "off",
        "no-empty-function": "off",
        "no-param-reassign": ["error", {
            ignorePropertyModificationsFor: ["state"],
            props: true,
        }],
        "no-shadow": "off",
        "no-use-before-define": "off",
        "no-useless-constructor": "off",
        "react/jsx-filename-extension": ["warn", { extensions: [".tsx", ".ts"] }],
        "react/jsx-fragments": ["error", "element"],
        "react/jsx-indent": ["error", 4],
        "react/jsx-indent-props": ["error", 4],
        "react/jsx-props-no-spreading": "off",
        "react/react-in-jsx-scope": "off",
        "react/prop-types": "off",
        "react-hooks/rules-of-hooks": "error",
        "react-hooks/exhaustive-deps": "warn",
    },
};
