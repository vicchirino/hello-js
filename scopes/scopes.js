"use strict"

// What are the different scopes in javascript?

var vic = 1 // Global scope

function moo() {
  var foo = 1 // Function scope
}

console.log(foo) // ReferenceError: foo is not defined

for (var i = 0; i < 10; i++) {
  var j = 5 // Function scope
}
console.log(j) // 5

{
  var a = 1 // Block scope (ES6)
  let b = 2 // Only exist in block scope
  const c = 3 // Only exist in block scope
  c = 4 // TypeError: Assignment to constant variable.
}

console.log(a) // 1
console.log(b) // ReferenceError: b is not defined
console.log(c) // ReferenceError: c is not defined


for (let r = 0; r < 10; r++) {
  console.log(r) // 0, 1, 2, 3, 4, 5, 6, 7, 8, 9
}
console.log(r) // ReferenceError: i is not defined


