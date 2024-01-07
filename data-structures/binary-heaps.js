/* MAX BINARY HEAP
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
