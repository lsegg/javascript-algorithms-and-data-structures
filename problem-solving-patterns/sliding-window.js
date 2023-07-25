/*
  Write a function called 'maxSubarraySum', which accepts an array of integers and a number called n.
  The function should calculate the maximum sum of n consecutive elements in the array.
*/

// Initial proposal - O(n^2)
function maxSubarraySum(intArray, n) {
  if (n > intArray.length) return null;
  let maxSum = -Infinity;

  for (let i = 0; i < intArray.length - n + 1; i++) {
    let tempSum = 0;
    for (let j = 0; j < n; j++) {
      tempSum += intArray[i + j];
    }
    if (tempSum > maxSum) {
      maxSum = tempSum;
    }
  }

  return maxSum;
}

//Sliding Window Pattern proposal - O(n)
function maxSubarraySum(intArray, n) {
  if (n > intArray.length) return null;

  let maxSum = 0;
  let tempSum = 0;

  for (let i = 0; i < n; i++) {
    maxSum += intArray[i];
  }

  tempSum = maxSum;

  for (let i = n; i < intArray.length; i++) {
    tempSum = tempSum - intArray[i - n] + intArray[i];
    maxSum = Math.max(maxSum, tempSum);
  }

  return maxSum;
}

console.log(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 2)); // 10
console.log(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 4)); // 17
console.log(maxSubarraySum([4, 2, 1, 6], 1)); // 6
console.log(maxSubarraySum([4, 2, 1, 6, 2], 4)); // 13
console.log(maxSubarraySum([], 4)); // null
console.log(maxSubarraySum([2, 6, 9, 2, 1, 8, 5, 6, 3], 3)); // 19