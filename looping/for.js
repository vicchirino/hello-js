let array = [1, 2, 3]

array.forEach(function(value) {
  console.log(value)
})

for (let i = 0; i < array.length; i++) {
  console.log("1fst",array[i])
  continue // skip the rest of the loop
  console.log("2nd",array[i])
  break // break the loop
}

// for-in is all about looping OBJECTS.

var obj = {a: 1, b: 2}
for (let prop in obj) {
  console.log(prop)
}

var array2 = [10, 20, 30]
for (let index in array2) {
  console.log(index)
  console.log(typeof(index))
}

// for-of is all about looping ARRAYS.

var array3 = [10, 20, 30]
for (let value of array2) {
  console.log(value)
  console.log(typeof(value))
}