//Linear Search (O(n))
function linearSearch(arr, value) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === value) {
      return i;
    }
  }
  return -1;
}

console.log(linearSearch([10, 15, 20, 25, 30], 15)); // 1
console.log(linearSearch([9, 8, 7, 6, 5, 4, 3, 2, 1, 0], 4)); // 5
console.log(linearSearch([100], 100)); // 0
console.log(linearSearch([1, 2, 3, 4, 5], 6)); // -1
console.log(linearSearch([9, 8, 7, 6, 5, 4, 3, 2, 1, 0], 10)); // -1
console.log(linearSearch([100], 200)); // -1

//Binary Search (O(log n))
function binarySearch(sortedNumArr, value) {
  let left = 0;
  let right = sortedNumArr.length - 1;

  while (left < right) {
    let middle = parseInt((right + left) / 2);
    if (right - left === 1) return -1;
    if (sortedNumArr[middle] === value) {
      return middle;
    }
    if (sortedNumArr[middle] < value) {
      left = middle;
    }
    if (sortedNumArr[middle] > value) {
      right = middle;
    }
  }
  return -1;
}

console.log(binarySearch([1, 2, 3, 4, 5], 2)); // 1
console.log(binarySearch([1, 2, 3, 4, 5], 3)); // 2
console.log(binarySearch([1, 2, 3, 4, 5], 5)); // 4
console.log(binarySearch([1, 2, 3, 4, 5], 6)); // -1
console.log(
  binarySearch(
    [
      5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98,
      99,
    ],
    10
  )
); // 2
console.log(
  binarySearch(
    [
      5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98,
      99,
    ],
    95
  )
); // 16
console.log(
  binarySearch(
    [
      5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98,
      99,
    ],
    100
  )
); // -1

//Naive String Search (O(log n))
function naiveStringSearch(str, sub) {
  var counter = 0;
  for (var i = 0; i < str.length; i++) {
    for (var j = 0; j < sub.length; j++) {
      if (sub[j] !== str[i + j]) break; // we use for loop instead of 'for.. of' to be able to add up indexes.
      if (j === sub.length - 1) counter++;
    }
  }
  return counter;
}

console.log(naiveStringSearch("lorie loled", "lol")); // 1
