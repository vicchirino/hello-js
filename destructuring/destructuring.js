// Destructuring. (ES6)
const arr = ['a', 'b', 'c'];
// const x=arr[0]
// const y=arr[1]
const [x, y] = arr;

console.log(x, y) // a b

const obj = {first: "Vic", last: "Chirino", age: 33}

const f = obj.first
const l = obj.last
console.log(f)
console.log(l)

// Destructuring
const {first: fi, last: la} = obj

console.log(fi)
console.log(la)


function func({x=0}) {
  console.log(x)
}
func({x: 1})
func({})