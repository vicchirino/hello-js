var arr1 = [1, 2, 3];
var arr2 = [4, 5, 6, ...arr1];

console.log(arr2)  // [4, 5, 6, 1, 2, 3]

var arr3 = [1, 2, 3];
var arr4 = [...arr3] // [1, 2, 3]
var arr5 = arr3 // [1, 2, 3]
arr3[0] = -1
console.log(arr3) // [-1, 2, 3]
console.log(arr4) // [1, 2, 3]
console.log(arr5) // [-1, 2, 3]