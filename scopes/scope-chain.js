"use strict"

// What is the scope chain?
// The scope chain is the order in which the javascript engine looks for a variable
// in the different scopes.

function foo() {
  console.log(myvar)
}

function goo() {
  var myvar = 1
  foo()
}

goo()