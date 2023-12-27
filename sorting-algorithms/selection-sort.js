//Selection sort (O(n^2))

function swap(arr, idx1, idx2) {
  [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
}

function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let smallestIdx = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[smallestIdx]) {
        smallestIdx = j;
      }
    }
    if (i !== smallestIdx) {
      swap(arr, i, smallestIdx);
    }
  }

  return arr;
}

console.log(selectionSort([5, 3, 4, 1, 2]));
console.log(selectionSort([34, 22, 10, 19, 17]));
