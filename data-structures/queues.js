/*QUEUE (FIFO)
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

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  // adds a new node at the end of the queue
  enqueue(value) {
    const newNode = new Node(value);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    this.size++;
    return this;
  }

  // deletes the node at the beggining of the queue
  dequeue() {
    if (!this.first) return null;
    const removedFirst = this.first;
    this.first = removedFirst.next;
    this.size--;
    if (this.size === 0) {
      this.tail = null;
    }
    return removedFirst;
  }
}

let queue = new Queue();
queue.enqueue("FIRST");
queue.enqueue("SECOND");
queue.enqueue("THIRD");
queue.enqueue("FOURTH");
queue.dequeue();
queue.dequeue();
console.log(queue);
