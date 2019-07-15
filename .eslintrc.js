// Configuration File for eslint js
module.exports = {
    env: {
      node: true,
      es6: true
    },
    globals: {
      document: false,
      navigator: false,
      window: false
    },
    parserOptions: {
      sourceType: "module",
      ecmaVersion: 2018
    },
    plugins: ["security"],
    rules: {
      "arrow-spacing": ["error", { before: true, after: true }], //Allow spacing between arrow of arrow function
      "block-spacing": ["error", "always"], //Allow Block spacing for block
      "brace-style": ["error", "1tbs", { allowSingleLine: true }], //Allow Single Line style for if else
      camelcase: ["error", { properties: "always" }], //Allow Camel Case for Variables
      "comma-dangle": [
        "error",
        {
          arrays: "never",
          objects: "never",
          imports: "never",
          exports: "never",
          functions: "never"
        }
      ], //Don't allow trailing comma
      "comma-spacing": ["error", { before: true, after: true }], //Allow comma spacing before and after
      "comma-style": ["error", "last"], //Allow Comma in last
      curly: ["error", "multi"], //Allow curly braces for multi block
      "dot-location": ["error", "object"], //Allow new line in object properties dot
      "eol-last": ["error", "always"], //Allow new line at end of file
      eqeqeq: ["error", "always", { null: "ignore" }], //Allow equal value and type
      "func-call-spacing": ["error", "never"], //Don't allow function call spacing
      "handle-callback-err": "error", //Allow handilation of error
      "key-spacing": ["error", { beforeColon: true, afterColon: true }], //Allow spacing between two keys
      "keyword-spacing": ["error", { before: true, after: true }], //Allow spacing between keywords
      "new-parens": "error", //Don't Allow constructor to be invoked with ();
      "no-class-assign": "error", //Don't Allow class to be assign any value in its object
      "no-compare-neg-zero": "error", //Don't Allow Condition to be compared with -0
      "no-unused-vars": "off", //Allow Unused varible
      "no-constant-condition": "error", //Don't Allow a constant keyword to be in condition
      "no-console": "off", //Allow Console
      "no-cond-assign": "error", //Don't Allow to assign anything in condition
      "no-const-assign": "error", //Don't Allow to modify a variable declared with const
      "no-delete-var": "error", //Don't Allow for deleting variable
      "no-dupe-args": "error", //Don't Allow duplicate argument in two or more functions
      "no-dupe-class-members": "error", //Don't Allow same class members name
      "no-dupe-keys": "error", //Don't Allow duplicate key in an object
      "no-duplicate-case": "error", //Don't Allow duplicate case of switch statement
      "no-eval": "error", //Don't Allow use of eval method
      "no-ex-assign": "error", //Don't Allow to assign anything in catch()
      "no-extend-native": "error", //Don't Allow to extends native or builtin object
      "no-extra-bind": "error", //Don't Allow to bind function and don't use this keyword in that function
      "no-extra-boolean-cast": "error", //Don't Allow to cast boolean multiple times
      "no-extra-parens": ["error", "functions"], //Don't Allow Extra parentheses in function
      "no-fallthrough": "error", //Don't Allow Switch case to be fall through
      "no-floating-decimal": "error", //Don't Allow dot in integer value
      "no-func-assign": "error", //Don't Allow reassigning of function with same identifier
      "no-global-assign": "error", //Don't Allow global assigning
      "no-implied-eval": "error", //Don't Allow setTimeout() to pass method in string
      "no-iterator": "error" //Don't Allow to use iterator
    },
    extends: ["eslint:recommended", "plugin:security/recommended"]
  };