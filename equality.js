// Non-Strict equality operator.
// Try to convert values to string/boolean/number and compare them.

'' == '0' // false
0 == '' // true
0 == '0' // true

// Strict equality operator

0 === '' // false
0 === '0' // false
0 === 0 // true

false == 'false' // false