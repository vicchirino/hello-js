## Structures

### Array

The most basic of all data structures, an array stores data in memory for later use. Each array has a fixed number of cells decided on its creation, and each cell has a corresponding numeric index used to select its data. Whenever you’d like to use the array, all you need are the desired indices, and you can access any of the data within.

- Advetages:
  - Simple to create and use.
  - Foundational building block for complex data structures
- Disadvantages:
  - Fixed size
  - Expensive to insert/delete or resequence values
  - Inefficient to sort

### Queue

Queues are conceptually similar to stacks; both are sequential structures, but queues process elements in the order they were entered rather than the most recent element.
As a result, queues can be thought of as a FIFO (First In, First Out) version of stacks. These are helpful as a buffer for requests, storing each request in the order it was received until it can be processed.

For a visual, consider a single-lane tunnel: the first car to enter is the first car to exit. If other cars should wish to exit, but the first stops, all cars will have to wait for the first to exit before they can proceed.

- Advetages:
  - Dynamic size
  - Orders data in the order it was received
  - Low runtime
- Disadvantages:
  - Can only retrieve the oldest element

### Linked List

Linked lists are a data structure which, unlike the previous three, does not use physical placement of data in memory. This means that, rather than indexes or positions, linked lists use a referencing system: elements are stored in nodes that contain a pointer to the next node, repeating until all nodes are linked.

This system allows efficient insertion and removal of items without the need for reorganization.

- Advetages:
  - Efficient insertion and removal of new elements
  - Less complex than restructuring an array
- Disadvantages:
  - Uses more memory than arrays
  - Inefficient to retrieve a specific element
  - Inefficient to traverse the list backward

### Trees

Trees are another relation-based data structure, which specialize in representing hierarchical structures. Like a linked list, nodes contain both elements of data and pointers marking its relation to immediate nodes.

Each tree has a “root” node, off of which all other nodes branch. The root contains references to all elements directly below it, which are known as its “child nodes”. This continues, with each child node, branching off into more child nodes.

Nodes with linked child nodes are called internal nodes while those without child nodes are external nodes. A common type of tree is the “binary search tree” which is used to easily search stored data.

These search operations are highly efficient, as its search duration is dependent not on the number of nodes but on the number of levels down the tree.

This type of tree is defined by four strict rules:

    1. The left subtree contains only nodes with elements lesser than the root.
    2. The right subtree contains only nodes with elements greater than the root.
    3. Left and right subtrees must also be a binary search tree. They must follow the above rules with the “root” of their tree.
    4. There can be no duplicate nodes, i.e. no two nodes can have the same value.

- Advetages:
  - Ideal for storing hierarchical relationships
  - Dynamic size
  - Quick at insert and delete operations
  - In a binary search tree, inserted nodes are sequenced immediately.
  - Binary search trees are efficient at searches; length is only O(height).

### Graphs

Graphs are a relation-based data structure helpful for storing web-like relationships. Each node, or vertex, as they’re called in graphs, has a title (A, B, C, etc.), a value contained within, and a list of links (called edges) it has with other vertices.

While hard to visualize at first, this structure is invaluable in conveying relationship charts in textual form, anything from circuitry to train networks.

- Advetages:
  - Can quickly convey visuals over text
  - Usable to model a diverse number of subjects so long as they contain a relational structure
- Disadvantages:
  - At a higher level, text can be time-consuming to convert to an image.
  - It can be difficult to see the existing edges or how many edges a given vertex has connected to it

## Hash Tables (Map)

Hash tables are a complex data structure capable of storing large amounts of information and retrieving specific elements efficiently. This data structure relies on the concept of key/value pairs, where the “key” is a searched string and the “value” is the data paired with that key.

Each searched key is converted from its string form into a numerical value, called a hash, using a predefined hash function. This hash then points to a storage bucket – a smaller subgroup within the table. It then searches the bucket for the originally entered key and returns the value associated with that key.

- Advetages:
  - Key can be in any form, while array’s indices must be integers
  - Highly efficient search function
  - Constant number of operations for each search
  - Constant cost for insertion or deletion operations
- Disadvantages:
  - Collisions: an error caused when two keys convert to the same hash code or two hash codes point to the same value.
  - These errors can be common and often require an overhaul of the hash function.
