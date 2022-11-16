
// All the array has to be iterated. O(n) time complexity.
function removeEven(array) {
  var odds = []
  for (let number of array) {
    if (number % 2 != 0) {
      odds.push(number)
    }
  }
  return odds
}

function removeEven2(array) {
  return array.filter(number => number % 2 != 0)
}

const array = [1,2,4,5,10,6,3]
const oddsArray = removeEven(array)
console.log(oddsArray) // [1,5,3]