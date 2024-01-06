/* MAX BINARY HEAP
 */

class MaxBinaryHeap {
  constructor() {
    this.values = [];
  }

  bubbleUp(indexN = this.values.length - 1) {
    const n = this.values[indexN];
    const indexParent = Math.floor((indexN - 1) / 2);
    const parent = this.values[indexParent];

    if (n > parent) {
      this.values[indexParent] = n;
      this.values[indexN] = parent;
      this.bubbleUp(indexParent);
    }
  }

  insert(value) {
    this.values.push(value);
    this.bubbleUp();
    return this.values;
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
console.log(heap.values);
