/**
 * A hash table is a key-value data structure.
 * Due to the lightning speed of querying a value through a key,
 * hash tables are commonly used in map, dictionary or
 * object data structures.
 * As shown in the graph above, the hash table uses a hash function
 * to convert keys into a list of numbers, and these numbers serve
 * as the values of corresponding keys.
 * To get value using a key is fast; time complexity can achieve O(1).
 * The same keys must return the same values, which is the basis of the hash function.
 */

function hash(string, max) {
  var hash = 0
  for (var i = 0; i < string.length; i++) {
    hash += string.charCodeAt(i)
  }
  return hash % max
}

function HashTable() {
  let storage = []
  const storageLimit = 4

  this.add = function(key, value) {
    var index = hash(key, storageLimit)
    if (storage[index] === undefined) {
      storage[index] = [
        [key, value]
      ]
    } else {
      var inserted = false
      for (var i = 0; i < storage[index].length; i++) {
        if (storage[index][i][0] === key) {
          storage[index][i][1] = value
          inserted = true
        }
      }
      if (inserted === false) {
        storage[index].push([key, value])
      }
    }
  }

  this.remove = function (key) {
    var index = hash(key, storageLimit);
    if (storage[index].length === 1 && storage[index][0][0] === key) {
      delete storage[index];
    } else {
      for (var i = 0; i < storage[index]; i++) {
        if (storage[index][i][0] === key) {
          delete storage[index][i];
        }
      }
    }
  }

  this.lookup = function (key) {
    var index = hash(key, storageLimit);
    if (storage[index] === undefined) {
      return undefined;
    } else {
      for (var i = 0; i < storage[index].length; i++) {
        if (storage[index][i][0] === key) {
          return storage[index][i][1];
        }
      }
    }
  }
}

var ht = new HashTable()
ht.add('beau', 'person')
ht.add('fido', 'dog')
ht.add('rex', 'dinosour')
ht.add('tux', 'penguin')
console.log(ht)
console.log(ht.lookup('tux'))