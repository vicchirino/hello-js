/**
 *  Comparision       | Array                      | Linked List                    |
 *  --------------------------------------------------------------------------------|
 *  Memory allocation | Static, during compilation | Dynamic, during runtime        |
 *                    | and secuencial             | and non-secuencial             |
 *  --------------------------------------------------------------------------------|
 *  Get element       | Read from index, faster in | Read through all node in       |
 *                    | speed                      | queue until get element. Slower|
 *  --------------------------------------------------------------------------------|
 *  Add/Delete        | Slower due sequencial and  | Faster due dynamic allocation  |
 *  element           | static memory              | require minor memory overhead  |
 *  --------------------------------------------------------------------------------|
 *  Spatial structure | 1 dimension or             | Unilateral/bilateral           |
 *                    | multi-dimension            | or circular linked list        |
 *  --------------------------------------------------------------------------------|
 */


function Node(element) {
  // Data in the node
  this.element = element
  // Pointer to next node
  this.next = null
}

function LinkedList() {
  var length = 0
  var head = null
  this.size = function() {
    return length
  }
  this.head = function() {
    return head
  }
  this.add = function(element) {
    var node = new Node(element)
    if(head === null) {
      head = node
    } else {
      var currentNode = head
      while (currentNode.next) {
        currentNode = currentNode.next
      }
      currentNode.next = node
    }
    length++
  }
  this.remove = function(element) {
    var currentNode = head
    var previousNode
    if(currentNode.element === element) {
      head = currentNode.next
    } else {
      while(currentNode.element !== element) {
        previousNode = currentNode
        currentNode = currentNode.next
      }
      previousNode.next = currentNode.next
    }
    length--
  }
  this.isEmpty = function() {
    return length === 0
  }
  this.indexOf = function(element) {
    var currentNode = head
    var index = -1
    while(currentNode) {
      index++
      if(currentNode.element === element) {
        return index
      }
      currentNode = currentNode.next
    }
    return -1
  }
  this.elementAt = function(index) {
    var currentNode = head
    var count = 0
    while(count < index) {
      count++
      currentNode = currentNode.next
    }
    return currentNode.element
  }
  this.addAt = function(index, element) {
    var node = new Node(element)
    var currentNode = head
    var previousNode
    var currentIndex = 0
    if(index > length) {
      return false
    }
    if(index === 0) {
      node.next = currentNode
      head = node
    } else {
      while(currentIndex < index) {
        currentIndex++
        previousNode = currentNode
        currentNode = currentNode.next
      }
      node.next = currentNode
      previousNode.next = node
    }
    length++
  }
  this.removeAt = function(index) {
    var currentNode = head
    var previousNode
    var currentIndex = 0
    if(index < 0 || index >= length) {
      return null
    }
    if(index === 0) {
      head = currentNode.next
    } else {
      while(currentIndex < index) {
        currentIndex++
        previousNode = currentNode
        currentNode = currentNode.next
      }
      previousNode.next = currentNode.next
    }
    length--
    return currentNode.element
  }
  this.printList = function() {
    if (this.isEmpty()) {
      console.log("Empty List");
      return false;
    } else {
      let temp = head;
      while (temp != null) {
        process.stdout.write(String(temp.element));
        process.stdout.write(" -> ");
        temp = temp.next;
      }
      console.log("null");
      return true;
    }
  }
}

// O(n)
function reverse(list) {
  let previousNode = null;
  let currentNode = list.head(); // The current node
  let nextNode = null; // The next node in the list
  //Reversal
  while (currentNode != null) {
    nextNode = currentNode.next;
    currentNode.next = previousNode;
    previousNode = currentNode;
    currentNode = nextNode;
  }

  //Set the last element as the new head node
  return list.addAt(0, previousNode.element);
}

let list = new LinkedList();
list.add(4);
list.add(9);
list.add(6);
list.add(1)
// list.addAt(0, 0);
list.printList()
reverse(list);
list.printList()

module.exports = LinkedList