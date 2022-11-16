/**
 * Graph
 * 
 * Graphs, sometimes known as networks, refer to sets of nodes with linkages (or
 * edges). We can further divide graphs into two groups (i.e. directed graphs and 
 * undirected graphs), according to whether the linkages have direction. We use 
 * graphs in our daily lives without even realizing it. Graphs help calculate the best
 * route in navigation apps or recommend friends with whom we might like to
 * connect.
 * 
 */
 const LinkedList = require('./linked-list.js');


class Graph {
  constructor(vertices) {
    this.vertices = vertices;
    this.list = []

    var it;
    for(it = 0; it < vertices; it++) {
      let temp = new LinkedList();
      this.list.push(temp);
    }
  }

  addEdge(source, destination) {
    if (source < this.vertices && destination < this.vertices) {
      this.list[source].addAt(0, destination)
    }
    return this
  }

  printGraph() {
    console.log(">>Adjacency List of Directed Graph<<");
    var i;
    for (i = 0; i < this.list.length; i++) {
      process.stdout.write("|" + String(i) + "| => ");
      let temp = this.list[i].head();
      while (temp != null) {
        process.stdout.write("[" + String(temp.element) + "] -> ");
        temp = temp.next;
      }
      console.log("null ");
    }
  }

  strGraph() {
    let str = "";
    var i;
    for (i = 0; i < this.list.length; i++) {
      str = str + "|" + String(i) + "| => ";
      let temp = this.list[i].head();
      while (temp != null) {
        str += ("[" + String(temp.element) + "] -> ");
        temp = temp.next;
      }
      str += "null ";
    }
    return str;
  }
}


 function bfs(graph, root) {
  var nodesLen = {};
  for (var i = 0; i < graph.length; i++) {
    nodesLen[i] = Infinity;
  }
  nodesLen[root] = 0;
  var queue = [root];
  var current;
  while (queue.length != 0) {
    current = queue.shift();

    var curConnected = graph[current];
    var neighborIdx = [];
    var idx = curConnected.indexOf(1);
    while (idx != -1) {
      neighborIdx.push(idx);
      idx = curConnected.indexOf(1, idx + 1);
    }
    for (var j = 0; j < neighborIdx.length; j++) {
      if (nodesLen[neighborIdx[j]] == Infinity) {
        nodesLen[neighborIdx[j]] = nodesLen[current] + 1;
        queue.push(neighborIdx[j]);
      }
    }
  }
  return nodesLen;
}

var graph = [
  [0, 1, 1, 1, 0],
  [0, 0, 1, 0, 0],
  [1, 1, 0, 0, 0],
  [0, 0, 0, 1, 0],
  [0, 1, 0, 0, 0]
];
console.log(bfs(graph, 1));

// O(E) since we may have to traverse E edges.
function removeEdge(graph, source, dest){
  if(graph.list.length == 0){
    return graph;
  }
  
  if(source >= graph.list.length || source < 0){
    return graph;
  }
  
  if(dest >= graph.list.length || dest < 0){
    return graph;
  }
  
  graph.list[source].remove(dest);
  return graph;
}

let g = new Graph(5);
g.addEdge(0, 1);
g.addEdge(0, 2);
g.addEdge(1, 3);
g.addEdge(2, 4);
g.addEdge(4, 0);
console.log("Before removing edge")
g.printGraph();

removeEdge(g, 1, 3);

console.log("\nAfter removing edge")
g.printGraph();