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
    let newNode = new Node(value);
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
  shift() {}
}

let list = new SinglyLinkedList();
list.push("Hello :)");
list.push("Goodbye :(");
list.push("Hello again :D");
console.log(list.pop());
console.log(list);
