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
}

let list = new SinglyLinkedList();
list.push("Hello :)");
list.push("Goodbye :(");
list.push("Hello again :D");
list.pop();
list.unshift("Hi :|");
console.log(list.get(0));
list.set(1, "Good Morning!");
console.log(list);
