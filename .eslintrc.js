module.exports = {
    root: true,
    "extends": "eslint:recommended",
    "env": {
        "es6": true,
        "node": true,
        "browser": true
    },
    "globals": {},
    "rules": {
        "no-console": "warn",
        "no-cond-assign": "error",
        "curly": ["error", "all"],
        "no-multi-spaces": "error",
        "no-param-reassign": "error",
        "no-return-assign": "error",
        "no-useless-escape": "error",
        "vars-on-top": "error",
        "array-bracket-spacing": ["error", "never"],
        "block-spacing": "error",
        "brace-style": ["error", "1tbs"],
        "camelcase": "error",
        "comma-dangle": ["error", "never"],
        "comma-spacing": ["error", { "before": false, "after": true }],
        "eol-last": ["error", "always"],
        "func-call-spacing": ["error", "never"],
        "indent": ["error", 4],
        "jsx-quotes": ["error", "prefer-double"],
        "key-spacing": ["error", { "align": "value" }],
        "line-comment-position": ["error", { "position": "above" }],
        "linebreak-style": ["error", "unix"],
        "max-depth": ["error", 4],
        "max-len": ["error", 120],
        "max-nested-callbacks": ["error", 3],
        "max-statements-per-line": ["error", { "max": 1 }],
        "new-cap": "warn",
        "newline-after-var": ["error", "always"],
        "newline-before-return": "error",
        "newline-per-chained-call": ["error", { "ignoreChainWithDepth": 3 }],
        "no-inline-comments": "error",
        "no-mixed-operators": "error",
        "no-mixed-spaces-and-tabs": "error",
        "no-multiple-empty-lines": "error",
        "no-tabs": "error",
        "no-trailing-spaces": "error",
        "no-undef": "error",
        "no-underscore-dangle": "error",
        "no-unused-vars": ["warn", { "vars": "all", "args": "after-used" }],
        "no-whitespace-before-property": "error",
        "object-curly-newline": ["error", { "minProperties": 1 }],
        "object-curly-spacing": ["error", "always"],
        "object-property-newline": "error",
        "one-var-declaration-per-line": ["error", "always"],
        "one-var": ["error", "never"],
        "operator-assignment": ["error", "always"],
        "padded-blocks": ["error", "never"],
        "quotes": ["error", "single"],
        "semi-spacing": "error",
        "semi": ["error", "always"],
        "space-before-blocks": "error",
        "space-before-function-paren": ["error", "never"],
        "space-in-parens": ["error", "never"],
        "space-infix-ops": "error",
        "space-unary-ops": "error",
        "spaced-comment": ["error", "always"],
        "unicode-bom": "error",
        "wrap-regex": "error",
        "require-jsdoc": ["error", {
            "require": {
                "FunctionDeclaration": true,
                "MethodDefinition": true,
                "ClassDeclaration": true
            }
        }],
        "valid-jsdoc": ["error", {
            "prefer": {
                "arg": "param",
                "argument": "param",
                "class": "constructor",
                "return": "return",
                "virtual": "abstract"
            },
            "preferType": {
                "Boolean": "boolean",
                "Number": "number",
                "Object": "object",
                "String": "string"
            },
            "requireReturn": false,
            "matchDescription": ".+",
            "requireParamDescription": false,
            "requireReturnDescription": false
        }]
    },
    "parserOptions": {
        "sourceType": "module"
    }
};
