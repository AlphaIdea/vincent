module.exports = {
    //ESLint will stop looking in parent folders once it finds a configuration with "root": true
    root: true,
    //Specifying Environments
    "env": {
        //enable all ECMAScript 6 features except for modules
        "es6": true,
        //Node.js global variables and Node.js scoping
        "node": true,
        //adds all of the Mocha testing global variables
        "mocha": true
    },
    /**
     * "off" or 0 - turn the rule off
     * "warn" or 1 - turn the rule on as a warning (doesn’t affect exit code)
     * "error" or 2 - turn the rule on as an error (exit code is 1 when triggered)
     */
    "rules": {
        //enforce consistent brace style for all control statements
        "curly": ["error", "all"],
        /*
         * require the use of === and !==
         * The "smart" option enforces the use of === and !== except for these cases:
         * Comparing two literal values
         * Evaluating the value of typeof
         * Comparing against null
         */
        "eqeqeq": ["error", "smart"],
        //disallow duplicate arguments in function definitions
        "no-dupe-args": ["error"],
        //disallow duplicate case labels
        "no-duplicate-case": ["error"],
        //disallow unnecessary boolean casts
        "no-extra-boolean-cast": ["error"],
        //disallow unreachable code after return, throw, continue, and break statements
        "no-unreachable": ["error"],
        //enforce getter and setter pairs in objects
        "accessor-pairs": ["error"],
        //disallow empty functions
        "no-empty-function": ["error"],
        //disallow unnecessary nested blocks
        "no-lone-blocks": ["error"],
        //disallow magic numbers
        "no-magic-numbers": ["warn", {"ignore": [0, 1], "ignoreArrayIndexes": true,  "detectObjects": true, "enforceConst": true }],
        //disallow variable redeclaration
        "no-redeclare": ["error"],
        /*
        disallow assignments where both sides are exactly the same
        check properties as well
         */
        "no-self-assign": ["error", { "props": true }],
        //disallow unnecessary concatenation of literals or template literals
        "no-useless-concat": ["error"],
        //disallow unnecessary escape characters
        "no-useless-escape": ["error"],
        //require parentheses around immediate function invocations
        "wrap-iife": ["error", "any", {"functionPrototypeMethods": true}],
        //require or disallow strict mode directives
        "strict": ["warn", "global"],
        //disallow unused variables
        "no-unused-vars": ["error"],
        //enforce consistent spacing inside array brackets
        "array-bracket-spacing": ["error"],
        //enforce consistent brace style for blocks
        "brace-style": ["warn", "1tbs", {"allowSingleLine": true}],
        //enforce consistent spacing inside computed property brackets
        "computed-property-spacing": ["warn"],
        //require or disallow named function expressions
        "func-names": ["warn", "as-needed"],
        //require parentheses when invoking a constructor with no arguments
        "new-parens": ["warn"],
        //disallow if statements as the only statement in else blocks
        "no-lonely-if": ["error"],
        //require parenthesis around regex literals
        "wrap-regex": ["error"],
        //disallow reassigning class members
        "no-const-assign": ["error"],
        //require or disallow method and property shorthand syntax for object literals
        "object-shorthand": ["error"],
        //require const declarations for variables that are never reassigned after declared
        "prefer-const": ["error"],
        //require template literals instead of string concatenation
        "prefer-template": ["error"],
        //require generator functions to contain yield
        "require-yield": ["error"],
        //require or disallow spacing around embedded expressions of template strings
        "template-curly-spacing": ["error"],
        //disallow unnecessary semicolons
        "no-extra-semi": ["error"]
    }
};