// Call vs Apply vs Bind. Stabilize the value of this

"use strict"
function a(param1, param2) {
  console.log(this)
}
a.moo = 1
console.log(a.name)
console.log(a.moo)
console.log(a.toString())

a.call(1)
// a()

var func = {
  checkThis: function() {
    console.log(this)
    function checkOther() {
      console.log(this)
    }
    checkOther.call(this)
  }
}

func.checkThis()
func.checkThis.call({})

function lala(a,b,c) {
  console.log(this)
  console.log(a)
  console.log(b)
  console.log(c)
}

lala.call(1,2,3,4)
lala.apply(1,[2,3,4])

// Bind only with function expressiosn

var newFunc = function() {
  console.log(this)
}.bind(1)

newFunc()

var newFunc2 = function() {
  console.log(this)
}

newFunc2.bind(10)()