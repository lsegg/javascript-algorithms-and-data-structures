/*DOUBLY LINKED LISTS
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
}

let list = new DoublyLinkedList();
list.push(99);
list.push(100);
list.push(101);
list.shift();
console.log(list.unshift(98));
