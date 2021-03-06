module.exports = {
    "env": {
        "browser": true,
        "es2020": true
    },
    "extends": [
        //"eslint:recommended",
        "plugin:vue/vue3-recommended",
        //"plugin:@typescript-eslint/recommended"
    ],
    "parserOptions": {
        "ecmaVersion": 11,
        "parser": "@typescript-eslint/parser",
        "sourceType": "module"
    },
    "plugins": [
        "vue",
        "@typescript-eslint"
    ],
    "rules": {
    }
};
