/*
  Quick sort 
  Best: O(n log n)
  Avg: O(n log n)
  Worst: O(n^2) // when the pivot chosen is the minimum or the maximum element every single time.
  */

function swap(arr, idx1, idx2) {
  [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
}

function pivot(arr, start = 0, end = arr.length + 1) {
  let pivot = arr[start];
  let swapIdx = start;
  for (let i = start + 1; i <= end; i++) {
    if (arr[i] < pivot) {
      swapIdx++;
      swap(arr, i, swapIdx);
    }
  }
  swap(arr, start, swapIdx);
  return swapIdx;
}

console.log(pivot([4, 8, 2, 1, 5, 7, 6, 3]));

function quickSort(arr, left = 0, right = arr.length - 1) {
  if (left < right) {
    let pivotIndex = pivot(arr, left, right);
    //left
    quickSort(arr, left, pivotIndex - 1);
    //right
    quickSort(arr, pivotIndex + 1, right);
  }
  return arr;
}

console.log(quickSort([4, 6, 9, 1, 2, 5, 3]));
