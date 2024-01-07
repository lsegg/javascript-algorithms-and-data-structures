/* MAX BINARY HEAP
  Insertion - O(log n)
  Deletion - O(log n)
  Searching - O(n)
*/

class MaxBinaryHeap {
  constructor() {
    this.values = [];
  }

  bubbleUp(index = this.values.length - 1) {
    const element = this.values[index];

    while (index > 0) {
      const parentIndex = Math.floor((index - 1) / 2); // Binary heap property
      const parent = this.values[parentIndex];

      if (element <= parent) break;

      this.values[parentIndex] = element;
      this.values[index] = parent;
      index = parentIndex;
    }
  }

  insert(value) {
    this.values.push(value);
    this.bubbleUp();
    return this.values;
  }

  sinkDown(indexParent = 0) {
    const length = this.values.length;
    let parent = this.values[indexParent];

    while (true) {
      const indexLeftChild = 2 * indexParent + 1; // Binary heap property
      const indexRightChild = 2 * indexParent + 2; // Binary heap property
      let indexToSwap = null;

      if (indexLeftChild < length) {
        const left = this.values[indexLeftChild];
        if (left > parent) {
          indexToSwap = indexLeftChild;
        }
      }

      if (indexRightChild < length) {
        const right = this.values[indexRightChild];
        if (
          (indexToSwap === null && right > parent) ||
          (indexToSwap !== null && right > this.values[indexToSwap])
        ) {
          indexToSwap = indexRightChild;
        }
      }

      if (indexToSwap === null) break;

      this.values[indexParent] = this.values[indexToSwap];
      this.values[indexToSwap] = parent;
      indexParent = indexToSwap;
    }
  }

  extractMax() {
    const max = this.values[0];
    const end = this.values.pop();
    if (this.values.length > 0) {
      this.values[0] = end;
      this.sinkDown();
    }
    return max;
  }
}

//          41
//     39      33
//  18  27   12

// represented as
// [41, 39, 33, 18, 27, 12]
//  0   1   2   3   4   5

let heap = new MaxBinaryHeap();
heap.values = [41, 39, 33, 18, 27, 12];
heap.insert(55); // [55, 39, 41, 18, 27, 12, 33]
heap.insert(1); // [55, 39, 41, 18, 27, 12, 33, 1]
heap.insert(45); // [55, 45, 41, 39, 27, 12, 33, 1, 18];
heap.extractMax(); // [45, 39, 41, 18, 27, 12, 33, 1];
console.log(heap.values);

class Node {
  constructor(value, priority) {
    this.value = value;
    this.priority = priority;
  }
}

class PriorityQueue {
  constructor() {
    this.values = [];
  }

  bubbleUp() {
    let idx = this.values.length - 1;
    const element = this.values[idx];
    while (idx > 0) {
      let parentIdx = Math.floor((idx - 1) / 2);
      let parent = this.values[parentIdx];
      if (element.priority >= parent.priority) break;
      this.values[parentIdx] = element;
      this.values[idx] = parent;
      idx = parentIdx;
    }
  }

  enqueue(val, priority) {
    let newNode = new Node(val, priority);
    this.values.push(newNode);
    this.bubbleUp();
  }

  sinkDown() {
    let idx = 0;
    const length = this.values.length;
    const element = this.values[0];
    while (true) {
      let leftChildIdx = 2 * idx + 1;
      let rightChildIdx = 2 * idx + 2;
      let leftChild, rightChild;
      let swap = null;

      if (leftChildIdx < length) {
        leftChild = this.values[leftChildIdx];
        if (leftChild.priority < element.priority) {
          swap = leftChildIdx;
        }
      }
      if (rightChildIdx < length) {
        rightChild = this.values[rightChildIdx];
        if (
          (swap === null && rightChild.priority < element.priority) ||
          (swap !== null && rightChild.priority < leftChild.priority)
        ) {
          swap = rightChildIdx;
        }
      }
      if (swap === null) break;
      this.values[idx] = this.values[swap];
      this.values[swap] = element;
      idx = swap;
    }
  }

  dequeue() {
    const min = this.values[0];
    const end = this.values.pop();
    if (this.values.length > 0) {
      this.values[0] = end;
      this.sinkDown();
    }
    return min;
  }
}

let ER = new PriorityQueue();
ER.enqueue("Common cold", 5);
ER.enqueue("Gunshot wound", 1);
ER.enqueue("High fever", 4);
ER.enqueue("Broken arm", 2);
ER.enqueue("Twisted foot", 3);
console.log(ER);
// [
//   { value: "Gunshot wound", priority: 1 },
//   { value: "Broken arm", priority: 2 },
//   { value: "High fever", priority: 4 },
//   { value: "Common cold", priority: 5 },
//   { value: "Twisted foot", priority: 3 },
// ];
ER.dequeue(); // [{ value: "Broken arm", priority: 2 }, { value: "Twisted foot", priority: 3 }, { value: "High fever", priority: 4 }, { value: "Common cold", priority: 5 }]
ER.dequeue(); // [{ value: "Twisted foot", priority: 3 }, { value: "Common cold", priority: 5 }, { value: "High fever", priority: 4 }]
ER.dequeue(); // [{ value: "High fever", priority: 4 }, { value: "Common cold", priority: 5 }]
ER.dequeue(); // [{ value: "Common cold", priority: 5 }]
ER.dequeue(); // []
