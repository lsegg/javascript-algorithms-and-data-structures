/* GRAPHS
 */

class Graph {
  // Undirected
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }

  addEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1]?.push(vertex2);
    this.adjacencyList[vertex2]?.push(vertex1);
  }

  removeEdge(vertex1, vertex2) {
    let edges1 = this.adjacencyList[vertex1];
    let edges2 = this.adjacencyList[vertex2];

    edges1?.splice(edges1.indexOf(vertex2), 1);
    edges2?.splice(edges2.indexOf(vertex1), 1);
  }

  removeVertex(vertex) {
    this.adjacencyList[vertex].forEach((v) => this.removeEdge(v, vertex));
    delete this.adjacencyList[vertex];
  }

  depthFirstRecursive(start) {
    let results = [],
      visited = {};
    const adjacencyList = this.adjacencyList;

    (function DFS(vertex) {
      if (!vertex) return null;
      visited[vertex] = true;
      results.push(vertex);
      adjacencyList[vertex].forEach((neighbour) => {
        if (!visited[neighbour]) {
          return DFS(neighbour);
        }
      });
    })(start);
    return results;
  }

  depthFirstIterative(start) {
    let stack = [],
      results = [],
      visited = {},
      currentVertex;
    visited[start] = true;
    stack.push(start);

    while (stack.length) {
      currentVertex = stack.pop();
      results.push(currentVertex);
      let neighbours = this.adjacencyList[currentVertex];

      neighbours.forEach((neighbour) => {
        if (!visited[neighbour]) {
          visited[neighbour] = true;
          stack.push(neighbour);
        }
      });
    }
    return results;
  }

  breadthFirst(start) {
    let queue = [],
      results = [],
      visited = {},
      currentVertex;
    visited[start] = true;
    queue.push(start);

    while (queue.length) {
      currentVertex = queue.shift();
      results.push(currentVertex);
      let neighbours = this.adjacencyList[currentVertex];

      neighbours.forEach((neighbour) => {
        if (!visited[neighbour]) {
          visited[neighbour] = true;
          queue.push(neighbour);
        }
      });
    }
    return results;
  }
}

let flights = new Graph();
flights.addVertex("Tokyo");
flights.addVertex("San Francisco");
flights.addVertex("Dallas");
flights.addVertex("Aspen");
flights.addVertex("Hong Kong");
flights.addVertex("Los Angeles");
flights.addEdge("Tokyo", "Dallas");
flights.addEdge("Tokyo", "Hong Kong");
flights.addEdge("Dallas", "Aspen");
flights.addEdge("Dallas", "Hong Kong");
flights.addEdge("Dallas", "Los Angeles");
flights.addEdge("Hong Kong", "Los Angeles");
flights.removeVertex("Hong Kong");
console.log(flights.adjacencyList);

//          A
//        /   \
//       B     C
//       |     |
//       D --- E
//        \   /
//          F

let g = new Graph();
g.addVertex("A");
g.addVertex("B");
g.addVertex("C");
g.addVertex("D");
g.addVertex("E");
g.addVertex("F");
g.addEdge("A", "B");
g.addEdge("A", "C");
g.addEdge("B", "D");
g.addEdge("C", "E");
g.addEdge("D", "E");
g.addEdge("D", "F");
g.addEdge("E", "F");
console.log(g.adjacencyList);
console.log(g.depthFirstRecursive("A"));
console.log(g.depthFirstIterative("A"));
console.log(g.breadthFirst("A"));
