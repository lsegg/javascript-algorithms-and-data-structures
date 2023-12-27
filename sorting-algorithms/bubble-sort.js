/*
  Bubble sort Big O
  Best: O(n)
  Avg: O(n^2)
  Worst: O(n^2)
*/

function swap(arr, idx1, idx2) {
  const temp = arr[idx1];
  arr[idx1] = arr[idx2];
  arr[idx2] = temp;
}

function bubbleSort(arr) {
  let noSwap;
  for (let i = arr.length; i > 0; i--) {
    noSwap = true;
    for (let j = 0; j < i - 1; j++) {
      // as the sort progresses, less comparisons are executed, the "-1" also avoids doing a last comparison against "undefined"

      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
        noSwap = false;
      }
    }
    if (noSwap) break; // avoid entire runs if the data is nearly sorted
  }

  return arr;
}

console.log(bubbleSort([37, 45, 29, 8]));
console.log(bubbleSort([8, 1, 2, 3, 4, 5, 6, 7]));
