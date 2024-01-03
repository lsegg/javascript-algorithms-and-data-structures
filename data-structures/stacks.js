/*STACK (LIFO)
  Insertion - O(1)
  Deletion - O(1)
  Searching - O(n)
  Accesing - O(n)
*/

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  // adds a new node at the beggining of the stack
  push(value) {
    const newNode = new Node(value);
    const currentFirst = this.first;
    if (!currentFirst) {
      this.first = newNode;
      this.last = newNode;
    } else {
      newNode.next = currentFirst;
      this.first = newNode;
    }
    return ++this.size;
  }

  // deletes the node at the beggining of the stack
  pop() {
    if (!this.first) return null;
    const firstRemoved = this.first;
    this.first = firstRemoved.next;
    if (this.size === 0) {
      this.tail = null;
    }
    this.size--;
    return firstRemoved;
  }
}

let stack = new Stack();
stack.push("FIRST");
stack.push("SECOND");
stack.push("THIRD");
stack.push("FOURTH");
stack.pop();
stack.pop();
console.log(stack);
