module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: ["airbnb-base", "prettier"],
    parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
    },
    rules: {
        "import/extensions": ["error", "always"],
        "no-new": "off",

        "lines-between-class-members": [
            "error",
            "always",
            { exceptAfterSingleLine: true },
        ],
    },
};
