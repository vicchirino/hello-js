// Stack

function Stack() {
  this.count = 0
  this.storage = {}

  this.push = function(value) {
    this.storage[this.count] = value
    this.count++
  }

  this.pop = function() {
    if (this.count === 0) {
      return undefined
    }

    this.count--
    const result = this.storage[this.count]
    delete this.storage[this.count]
    return result
  }

  this.peek = function() {
    return this.storage[this.count - 1]
  }

  this.size = function() {
    return this.count
  }

  this.isEmpty = function() {
    return this.count === 0
  }
}

// exp only accepts {, }, (, ), [, and ]. O(n) time complexity.
function isBalanced(exp) {
  var myStack = new Stack()
  for (var i = 0; i < exp.length; i++) {
    // For every closing parenthesis check for its opening parenthesis in stack
    if (exp[i] === '}' || exp[i] === ')' || exp[i] === ']') {
      if(myStack.isEmpty()) {
        return false
      }
      let output = myStack.pop()
			// If you can't find the opening parentheses for any closing one then returns false.
      if (((exp[i] === '}') && (output !== '{')) || ((exp[i] === ')') && (output !== '(')) || ((exp[i] === ']') && (output !== '['))) {
        return false
      }
    } else {
			// For each opening parentheses, push it into stack
      myStack.push(exp[i])
    }
  }
  // after complete traversal of string exp, if there's any opening parentheses left
	// in stack then also return false.
  if (myStack.isEmpty() == false) {
		return false
	}
	// At the end return true if you haven't encountered any of the above false conditions.
	return true
}

var inputString = "{[()]}"
console.log(inputString)
console.log(isBalanced(inputString))

inputString = "{[([({))]}}"
console.log(inputString)
console.log(isBalanced(inputString))