// DIJKSTRA'S ALGORITHM

class PriorityQueue {
  constructor() {
    this.values = [];
  }

  enqueue(val, priority) {
    this.values.push({ val, priority });
    this.sort();
  }

  dequeue() {
    return this.values.shift();
  }

  sort() {
    this.values.sort((a, b) => a.priority - b.priority);
  }
}

class WeightedGraph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }

  addEdge(vertex1, vertex2, weight) {
    this.adjacencyList[vertex1]?.push({ node: vertex2, weight });
    this.adjacencyList[vertex2]?.push({ node: vertex1, weight });
  }

  findShortestPath(start, end) {
    const nodesByshortestKnownDistance = new PriorityQueue();
    const distances = {};
    const previous = {};
    let path = []; // to return at end
    let smallestDistanceNode;

    // setting initial state of trackers
    for (let vertex in this.adjacencyList) {
      distances[vertex] = vertex === start ? 0 : Infinity;
      nodesByshortestKnownDistance.enqueue(
        vertex,
        vertex === start ? 0 : Infinity
      );
      previous[vertex] = null;
    }

    // as long as there is something to visit
    while (nodesByshortestKnownDistance.values.length) {
      smallestDistanceNode = nodesByshortestKnownDistance.dequeue().val;
      if (smallestDistanceNode === end) {
        // build up shortest path
        while (previous[smallestDistanceNode]) {
          path.push(smallestDistanceNode);
          smallestDistanceNode = previous[smallestDistanceNode];
        }
        break;
      }
      if (
        smallestDistanceNode ||
        distances[smallestDistanceNode] !== Infinity
      ) {
        for (let neighbour in this.adjacencyList[smallestDistanceNode]) {
          // find neighbouring node
          let nextNode = this.adjacencyList[smallestDistanceNode][neighbour];
          // calculate distance to it
          let currentDistance =
            distances[smallestDistanceNode] + nextNode.weight;
          let nextNeighbour = nextNode.node;
          if (currentDistance < distances[nextNeighbour]) {
            // update new smallest distance to neighbour
            distances[nextNeighbour] = currentDistance;
            // update how we got to neighbour
            previous[nextNeighbour] = smallestDistanceNode;
            // enqueue in priority queue with new priority
            nodesByshortestKnownDistance.enqueue(
              nextNeighbour,
              currentDistance
            );
          }
        }
      }
    }
    return path.concat(smallestDistanceNode).reverse();
  }
}

var graph = new WeightedGraph();
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addVertex("F");

graph.addEdge("A", "B", 4);
graph.addEdge("A", "C", 2);
graph.addEdge("B", "E", 3);
graph.addEdge("C", "D", 2);
graph.addEdge("C", "F", 4);
graph.addEdge("D", "E", 3);
graph.addEdge("D", "F", 1);
graph.addEdge("E", "F", 1);

console.log(graph.findShortestPath("A", "E")); // ["A", "C", "D", "F", "E"]
