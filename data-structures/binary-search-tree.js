/*BINARY SEARCH TREE
  Insertion - O(1)
  Searching - O(log n) // Best and Avg, worst case not guaranteed
 */

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
    //to accept duplicated values we can add a this.frequency property
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    let newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
      return this;
    }
    let currentNode = this.root;
    while (true) {
      if (value === currentNode.value) return undefined; // Duplicated values are not allowed;
      if (value < currentNode.value) {
        if (currentNode.left === null) {
          currentNode.left = newNode;
          return this;
        }
        currentNode = currentNode.left;
      } else {
        if (currentNode.right === null) {
          currentNode.right = newNode;
          return this;
        }
        currentNode = currentNode.right;
      }
    }
  }

  find(value) {
    let currentNode = this.root;
    while (currentNode) {
      if (value === currentNode.value) return currentNode;
      if (value < currentNode.value) {
        currentNode = currentNode.left;
      } else if (value > currentNode.value) {
        currentNode = currentNode.right;
      }
    }
    return undefined;
  }

  // TREEE TRAVERSAL VALID FOR ALL TREES, NOT ONLY BINARY SEARCH ONES

  // Breath First Search
  bfs() {
    let node = this.root,
      visited = [],
      queue = [];
    queue.push(node);

    while (queue.length) {
      node = queue.shift();
      visited.push(node.value);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    return visited;
  }

  // Depth First Search
  dfsPreOrder() {
    let visited = [];

    function traverse(node) {
      visited.push(node);
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    }

    traverse(this.root);
    return visited.map((node) => node.value);
  }
  dfsPostOrder() {
    let visited = [];

    function traverse(node) {
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
      visited.push(node);
    }

    traverse(this.root);
    return visited.map((node) => node.value);
  }
  dfsInOrder() {
    let visited = [];

    function traverse(node) {
      if (node.left) traverse(node.left);
      visited.push(node);
      if (node.right) traverse(node.right);
    }

    traverse(this.root);
    return visited.map((node) => node.value);
  }
}

//        10
//     6     15
//   3  8      20

let bst = new BinarySearchTree();
bst.insert(10);
bst.insert(6);
bst.insert(15);
bst.insert(3);
bst.insert(8);
bst.insert(20);
console.log(bst.bfs()); // [ 10, 6, 15, 3, 8, 20 ]
console.log(bst.dfsPreOrder()); // [ 10, 6, 3, 8, 15, 20 ]
console.log(bst.dfsPostOrder()); // [ 3, 8, 6, 20, 15, 10 ]
console.log(bst.dfsInOrder()); // [ 3, 8, 6, 10, 15, 20 ]
