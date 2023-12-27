/*
  Insertion sort Big O
  Best: O(n)
  Avg: O(n^2)
  Worst: O(n^2)
*/

function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let currentValue = arr[i];
    for (let j = i - 1; j >= 0 && arr[j] > currentValue; j--) {
      arr[j + 1] = arr[j];
      arr[j] = currentValue;
    }
  }

  return arr;
}

console.log(insertionSort([2, 1, 9, 76, 4]));
console.log(insertionSort([5, 3, 4, 1, 2]));
console.log(insertionSort([3, 44, 38, 5, 47, 15]));
