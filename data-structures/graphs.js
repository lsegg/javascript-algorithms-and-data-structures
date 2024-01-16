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
