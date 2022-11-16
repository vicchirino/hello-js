function Queue() {
  var collection = []
  var print = function() {
    console.log(collection)
  }
  this.enqueue = function(element) {
    collection.push(element)
  }
  this.dequeue = function() {
    return collection.shift()
  }
  this.front = function() {
    return collection[0]
  }
  this.isEmpty = function() {
    return collection.length === 0
  }
  this.size = function() {
    return collection.length
  }
}

function PriorityQueue() {
  var collection = []
  this.print = function() {
    console.log(collection)
  }
  this.enqueue = function(element) {
    if (this.isEmpty()) {
      collection.push(element)
    } else {
      var added = false
      for (var i = 0; i < collection.length; i++) {
        if (element[1] < collection[i][1]) {
          collection.splice(i, 0, element)
          added = true
          break
        }
      }
      if (!added) {
        collection.push(element)
      }
    }
  }
  this.dequeue = function() {
    var value = collection.shift()
    return value[0]
  }
  this.front = function() {
    return collection[0]
  }
  this.size = function() {
    return collection.length
  }
  this.isEmpty = function() {
    return collection.length === 0
  }
}

var pQ = new PriorityQueue()
pQ.enqueue(['Beau Carnes', 2])
pQ.enqueue(['Quincy Larson', 3])
pQ.enqueue(['Ewa Mitulska-Wójcik', 1])
pQ.enqueue(['Briana Swift', 2])
pQ.print()

// Generate binary numbers from 1 to n in the form of a string using a queue. O(n) time complexity.
function findBin(n) {
  let result = []
  let myQueue = new Queue()
  var s1, s2
  myQueue.enqueue('1')
  for (var i = 0; i < n; i++) {
    result.push(myQueue.dequeue())
    s1 = result[i] + '0'
    s2 = result[i] + '1'
    myQueue.enqueue(s1)
    myQueue.enqueue(s2)
  }
  return result
}

console.log(findBin(10))
