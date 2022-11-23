"use strict"

// What are function closures?
// The function that is returned keep reference to values that no longer exist in the scope.
// Closure set of variables that are still in memory even after the function
// that created them has finished executing.
// Can refer to variables in scopes outside of the function.

function sayHello(name) {
  var text = "Hello " + name
  return function() {
    console.log(text)
  }
}

var sayVictorHelloFunction = sayHello("Victor")
sayVictorHelloFunction()


// The closure doesn't copy the value of the variable, it copies the reference to the variable.
var foo = []
for (var i = 0; i < 10; i++) {
  foo[i] = function() {
    return i
  }
}

console.log(foo[0]()) // 10
console.log(foo[1]()) // 10
console.log(foo[2]()) // 10

var foo = []
for (var i = 0; i < 10; i++) {
  (function() {
    var y = i
    foo[i] = function() {
      return y
    }
  })()
}

console.log(foo[0]()) // 0
console.log(foo[1]()) // 1
console.log(foo[2]()) // 2

var foo = []

for (var i = 0; i < 10; i++) {
  (function(y) {
    foo[y] = function() {
      return y
    }
  })(i)
}

console.log(foo[0]()) // 0
console.log(foo[1]()) // 1
console.log(foo[2]()) // 2