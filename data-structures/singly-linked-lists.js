/*SINGLY LINKED LISTS
  Insertion - O(1)
  Deletion - Best O(1) worst O(n)
  Searching - O(n)
  Accesing - O(n)
*/

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

// let first = new Node("Hi ");
// first.next = new Node("there! ");
// first.next.next = new Node("How ");
// first.next.next.next = new Node("are ");
// first.next.next.next.next = new Node("you?");
// console.log(first);

class SinglyLinkedList {
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
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  // deletes the node at the end of the list
  pop() {
    if (!this.head) return undefined;
    let current = this.head;
    let before = this.head;
    while (current.next) {
      before = current;
      current = current.next;
    }
    before.next = null;
    this.tail = before;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return current;
  }

  // deletes the node at the beggining of the list
  shift() {
    if (!this.head) return undefined;
    const oldHead = this.head;
    this.head = oldHead.next;
    this.length--;
    if (this.length === 0) {
      this.tail = null;
    }
    return oldHead;
  }

  // adds a new node at the beggining of the list
  unshift(value) {
    const newNode = new Node(value);
    const currentHead = this.head;
    if (!currentHead) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = currentHead;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  //gets the node at the index position
  get(index) {
    if (index < 0 || index > this.length) return undefined;
    let counter = 0;
    let currentNode = this.head;
    while (counter !== index) {
      currentNode = currentNode.next;
      counter++;
    }
    return currentNode;
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
    let currentNode = this.get(index);
    let newNode = new Node(value);

    newNode.next = currentNode;
    beforeNode.next = newNode;

    this.length++;
    return true;
  }

  // deletes the node at the index position
  remove(index) {
    if (index < 0 || index >= this.length) return undefined;
    if (index === this.length - 1) return !!this.pop();
    if (index === 0) return !!this.shift();

    let previousNode = this.get(index - 1);
    const removedNode = this.get(index);

    previousNode.next = removedNode.next;

    this.length--;
    return removedNode;
  }

  // reverses the direction of the list
  reverse() {
    let current = this.head;
    this.head = this.tail;
    this.tail = current;
    let next = null,
      previous = null;
    for (let i = 0; i < this.length; i++) {
      next = current.next;
      current.next = previous;
      previous = current;
      current = next;
    }
    return this;
  }
}

let list = new SinglyLinkedList();
list.push("Hello :)");
list.push("Goodbye :(");
list.push("Hello again :D");
list.pop();
list.unshift("Hi :|");
console.log(list.get(0));
list.set(1, "Good Morning!");
list.printAsArray();
list.reverse();
list.printAsArray();
