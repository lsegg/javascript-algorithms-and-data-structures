/*
  Given an array of integers and a number, write a function called 'maxSubarraySum'
  which finds the maximum sum of a subarray with the length of the number passed to the function.
  Note that a subarray must consist of consecutive elements from the original array.
  In the first example below, [100, 200, 300] is a subarray of the original array, but [100, 300] is not.
  Constraints:
    Time Complexity - O(N)
    Space Complexity - O(1)
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

// console.log(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 2)); // 10
// console.log(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 4)); // 17
// console.log(maxSubarraySum([4, 2, 1, 6], 1)); // 6
// console.log(maxSubarraySum([4, 2, 1, 6, 2], 4)); // 13
// console.log(maxSubarraySum([], 4)); // null
// console.log(maxSubarraySum([2, 6, 9, 2, 1, 8, 5, 6, 3], 3)); // 19
// console.log(maxSubarraySum([100, 200, 300, 400], 2)); // 700
// console.log(maxSubarraySum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4)); // 39
// console.log(maxSubarraySum([-3, 4, 0, -2, 6, -1], 2)); // 5
// console.log(maxSubarraySum([3, -2, 7, -4, 1, -1, 4, -2, 1], 2)); // 5
// console.log(maxSubarraySum([2, 3], 3)); // null

/*
  Write a function called 'minSubArrayLen' which accepts two parameters:
  an array of positive integers and a positive integer.
  This function should return the minimal length of a contiguous subarray of which
  the sum is greater than or equal to the integer passed to the function.
  If there isn't one, return 0 instead.
  Time Complexity - O(n)
  Space Complexity - O(1)
*/

function minSubArrayLen(arr, n) {
  // Border cases
  if (arr.length === 0) return 0;
  if (arr.length === 1) {
    if (arr[0] >= n) {
      return 1;
    } else return 0;
  }

  // Generate the starting size of the window and the edges
  let left = 0;
  let right = 0;
  let window = 0;
  let minSub = Infinity;

  while (left < arr.length) {
    // if current window doesn't add up to the given sum then move the window to right
    if (window < n && right < arr.length) {
      window += arr[right];
      right++;
    } else if (window >= n) {
      // if current window adds up to at least the sum given then we can shrink the window
      minSub = minSub < right - left ? minSub : right - left;
      window -= arr[left];
      left++;
    } else {
      // to avoid an infinite loop in case we reach the end
      break;
    }
  }
  return minSub === Infinity ? 0 : minSub;
}

// console.log(minSubArrayLen([2, 3, 1, 2, 4, 3], 7)); // 2 -> because [4,3] is the smallest subarray
// console.log(minSubArrayLen([2, 1, 6, 5, 4], 9)); // 2 -> because [5,4] is the smallest subarray
// console.log(minSubArrayLen([3, 1, 7, 11, 2, 9, 8, 21, 62, 33, 19], 52)); // 1 -> because [62] is greater than 52
// console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 39)); // 3
// console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 55)); // 5
// console.log(minSubArrayLen([4, 3, 3, 8, 1, 2, 3], 11)); // 2
// console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 95)); // 0

/*
  Write a function called 'findLongestSubstring',
  which accepts a string and returns the length of the longest substring with all distinct characters.
  Time Complexity - O(n)
*/

function findLongestSubstring(str) {
  let longest = 0;
  let frequencyCounter = {};
  let start = 0;

  for (let index = 0; index < str.length; index++) {
    const char = str[index];
    if (frequencyCounter[char]) {
      start = Math.max(start, frequencyCounter[char]);
    }
    // index - beginning of substring + 1 (to include current in count)
    longest = Math.max(longest, index - start + 1);
    // store the index of the next char so as to not double count
    frequencyCounter[char] = index + 1;
  }
  return longest;
}

console.log(findLongestSubstring("")); // 0
console.log(findLongestSubstring("rithmschool")); // 7
console.log(findLongestSubstring("thisisawesome")); // 6
console.log(findLongestSubstring("thecatinthehat")); // 7
console.log(findLongestSubstring("bbbbbb")); // 1
console.log(findLongestSubstring("longestsubstring")); // 8
console.log(findLongestSubstring("thisishowwedoit")); // 6
