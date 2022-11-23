"use strict"
// What is variable hoisting?
// Hoisting the variable declaration to the top of the scope

console.log(ar);
var ar = 1

foo()

function foo() {
  var ar = 2
  console.log(ar)
  ar = 1
}