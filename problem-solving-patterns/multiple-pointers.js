/*
  Write a function called 'sumZero', which accepts a SORTED array of integers.
  The function should find the FIRST pair where the sum is O.
  Return an array that includes both values that sum to zero or undefined if a pair does not exist.
*/

// O(n)
function sumZero(sortedIntArr) {
  let startPointer = 0;
  let endPointer = sortedIntArr.length - 1;

  while (startPointer < endPointer) {
    const num1 = sortedIntArr[startPointer];
    const num2 = sortedIntArr[endPointer];
    const sum = num1 + num2;
    if (sum === 0) return [num1, num2];
    sum > 0 ? endPointer-- : startPointer++;
  }

  return undefined; // this explicit return is not really necessary
}

console.log(sumZero([-3, -2, -1, 0, 1, 2, 3])); // [-3, 3]
console.log(sumZero([-2, 0, 1, 3])); // undefined
console.log(sumZero([1, 2, 3])); // undefined
console.log(sumZero([-4, -3, -2, -1, 0, 1, 2, 5])); // [-2, 2]

/*
  Implement a function called "countUniqueValues", which accepts a SORTED array and counts the unique values in the array.
  There can be negative numbers.
*/

function countUniqueValues(sortedIntArr) {
  let count = 0;

  for (let index = 0; index < sortedIntArr.length; index++) {
    if (sortedIntArr[index] !== sortedIntArr[index + 1]) count++;
  }

  return count;
}

console.log(countUniqueValues([1, 1, 1, 1, 1, 2])); // 2
console.log(countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13])); // 7
console.log(countUniqueValues([])); // 0
console.log(countUniqueValues([1, 1, 1, 1, 1, 2])); // 2
console.log(countUniqueValues([-2, -1, -1, 0, 1])); // 4
console.log(countUniqueValues([1, 1, 2, 3, 3, 4, 5, 6, 6, 7])); // 7
