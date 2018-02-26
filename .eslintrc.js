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
         *
         * Objects evaluate to true
         * Undefined evaluates to false
         * Null evaluates to false
         * Booleans evaluate to the value of the boolean
         * Numbers evaluate to false if +0, -0, or NaN, otherwise true
         * Strings evaluate to false if an empty string '', otherwise true
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
        "no-empty-function": ["warn"],
        //disallow unnecessary nested blocks
        "no-lone-blocks": ["error"],
        //disallow magic numbers
        "no-magic-numbers": ["warn", {
            "ignore": [-1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 60, 24, 200, 406],
            "ignoreArrayIndexes": true,
            "detectObjects": true,
            "enforceConst": true
        }],
        //disallow variable redeclaration
        "no-redeclare": ["error"],
        /*
        disallow assignments where both sides are exactly the same
        check properties as well
         */
        "no-self-assign": ["error", {"props": true}],
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
        "brace-style": ["error", "stroustrup", {"allowSingleLine": true}],
        //enforce consistent spacing inside computed property brackets
        "computed-property-spacing": ["warn"],
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
        //require or disallow spacing around embedded expressions of template strings
        "template-curly-spacing": ["error"],
        //disallow unnecessary semicolons
        "no-extra-semi": ["error"],
        //disallow Object constructors
        "no-new-object": ["error"],
        //require quotes around object literal property names
        "quote-props": ["error", "as-needed", {"numbers": true}],
        //Prefer destructuring from arrays and objects
        "prefer-destructuring": ["error"],
        //Disallow Functions in Loops
        "no-loop-func": ["error"],
        //Suggest using the rest parameters instead of arguments
        "prefer-rest-params": ["error"],
        //Suggest using the spread operator instead of .apply()
        "prefer-spread": ["error"],
        //Disallow arrow functions where they could be confused with comparisons
        "no-confusing-arrow": ["error"],
        //Disallow duplicate imports
        "no-duplicate-imports": ["error", {"includeExports": true}],
        //Disallow Use of Chained Assignment Expressions
        "no-multi-assign": ["error"],
        //enforce variables to be declared either together or separately in functions
        "one-var": ["error", {"initialized": "never", "uninitialized": "always"}],
        //require or disallow newlines around variable declarations
        "one-var-declaration-per-line": ["error", "initializations"],
        //disallow nested ternary expressions
        "no-nested-ternary": ["error"],
        //disallow ternary operators when simpler alternatives exist
        "no-unneeded-ternary": ["error"],
        //Disallow mixes of different operators
        "no-mixed-operators": ["error"],
        //Disallow return before else
        "no-else-return": ["error"],
        //Requires or disallows a whitespace (space or tab) beginning a comment
        "spaced-comment": ["error"],
        //require a newline after each call in a method chain
        "newline-per-chained-call": ["error", {"ignoreChainWithDepth": 5}],
        //disallow whitespace before properties
        "no-whitespace-before-property": ["error"],
        //Disallow Primitive Wrapper Instances
        "no-new-wrappers": ["error"]
    }
};