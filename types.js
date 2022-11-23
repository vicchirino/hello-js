"use strict"


/**
 * Primitive types
 * 
 * Boolean
 * Number
 * String
 * Null
 * Undefined
 */

/**
 * Non primitive types
 * 
 * Object
 */

typeof(1) // "number"
typeof("1") // "string"
typeof(true) // "boolean"
typeof(undefined) // "undefined" --> Means no value. When initialize. When missing value
typeof(null) // "object" --> Only a programer will set null. Not a program engine.

// Javascript dymanically language
// Java is statically language

var a = "moo"
typeof(a) // "string"
a = 1
typeof(a) // "number"

var b;
console.log(b)

var c = null
console.log(c) // null

console.log("Null == undefined?", null == undefined)


// Nan --> Not a number

typeof(NaN) // "number"
"abc" * 2 // NaN
NaN == NaN // false
isNaN(NaN) // true
isNaN(1) // false
isNaN("1") // false
isNaN("abc") // true JS is trying to coerce the value to a number

var a = NaN
a !== a // true
a = 1
a !== a // false
a = 'a'
a !== a // false
