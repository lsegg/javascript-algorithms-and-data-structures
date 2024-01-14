/* DOUBLY LINKED LISTS
  Insertion - O(1)
  Deletion - O(1)
  Searching - O(n)
  Accesing - O(n)
*/

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.previous = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  printAsArray() {
    let arr = [];
    let current = this.head;
    while (current) {
      arr.push(current.value);
      current = current.next;
    }
    console.log(arr);
  }

  // adds a new node at the end of the list
  push(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.previous = this.tail;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  // deletes the node at the end of the list
  pop() {
    if (!this.head) return undefined;
    let oldTail = this.tail;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = oldTail.previous;
      this.tail.next = null;
      oldTail.previous = null; // to avoid accessing the list through the deleted node
    }
    return oldTail;
  }

  // deletes the node at the beggining of the list
  shift() {
    if (!this.head) return undefined;
    let oldHead = this.head;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = oldHead.next;
      this.head.previous = null;
    }
    oldHead.next = null;
    return oldHead;
  }

  // adds a new node at the beggining of the list
  unshift(value) {
    const newNode = new Node(value);
    const oldHead = this.head;
    if (!oldHead) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      oldHead.previous = newNode;
      newNode.next = oldHead;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  //gets the node at the index position
  get(index) {
    if (index < 0 || index >= this.length) return undefined;
    let counter, current;
    if (index <= this.length / 2) {
      counter = 0;
      current = this.head;
      while (counter !== index) {
        current = current.next;
        counter++;
      }
    } else {
      counter = this.length - 1;
      current = this.tail;
      while (counter !== index) {
        current = current.previous;
        counter--;
      }
    }
    return current;
  }

  //sets the node's value at the index position
  set(index, value) {
    let node = this.get(index);
    if (!node) return false;
    node.value = value;
    return true;
  }

  // adds a new node at the index position
  insert(index, value) {
    if (index < 0 || index > this.length) return false;
    if (index === this.length) return !!this.push(value);
    if (index === 0) return !!this.unshift(value);

    let beforeNode = this.get(index - 1);
    let afterNode = beforeNode.next;
    let newNode = new Node(value);

    newNode.next = afterNode;
    afterNode.previous = newNode;
    newNode.previous = beforeNode;
    beforeNode.next = newNode;

    this.length++;
    return true;
  }

  // deletes the node at the index position
  remove(index) {
    if (index < 0 || index >= this.length) return undefined;
    if (index === this.length - 1) return !!this.pop();
    if (index === 0) return !!this.shift();

    let removedNode = this.get(index);
    let previousNode = removedNode.previous;
    let afterNode = removedNode.next;

    previousNode.next = afterNode;
    afterNode.previous = previousNode;
    removedNode.previous = null;
    removedNode.next = null;

    this.length--;
    return removedNode;
  }

  // reverses the direction of the list
  reverse() {
    let current = this.head;
    this.head = this.tail;
    this.tail = current;

    let next, previous;

    while (current) {
      next = current.next;
      previous = current.prev;
      current.next = previous;
      current.prev = next;
      current = next;
    }
    return this;
  }
}

let list = new DoublyLinkedList();
list.push(99);
list.push(100);
list.push(101);
list.pop();
list.unshift(98);
list.set(0, 24);
list.insert(1, 333);
list.printAsArray();
