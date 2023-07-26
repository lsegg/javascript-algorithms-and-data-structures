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

/*
  Implement a function called 'areThereDuplicates' which accepts a variable number of arguments, and checks whether there are any duplicates among the arguments passed in.
  You can solve this using the frequency counter pattern OR the multiple pointers pattern.
  Restrictions:
    Time - O(n)
    Space - O(n)
  Bonus:
    Time - O(n log n)
    Space - O(1)
*/

// Time - O(n) Space - O(n)
function areThereDuplicates(...args) {
  args.sort();
  let start = 0;
  let next = 1;

  while (next < args.length) {
    if (args[start] === args[next]) {
      return true;
    }
    start++;
    next++;
  }
  return false;
}

console.log(areThereDuplicates(1, 2, 3)); // false
console.log(areThereDuplicates(1, 2, 2)); // true
console.log(areThereDuplicates("a", "b", "c", "a")); // true
console.log(areThereDuplicates("1", 1)); // false

/*
  Write a function called 'averagePair'.
  Given a sorted array of integers and a target average,
  determine if there is a pair of values in the array where the average of the pair equals the target average.
  There may be more than one pair that matches the average target.
  Bonus Constraints:
    Time: O(n)
    Space: O(1)
*/

function averagePair(sortedIntArr, targetAvg) {
  let start = 0;
  let end = sortedIntArr.length - 1;

  while (start < end) {
    const avg = (sortedIntArr[start] + sortedIntArr[end]) / 2;
    if (avg === targetAvg) {
      return true;
    }
    avg < targetAvg ? start++ : end--;
  }
  return false;
}

console.log(averagePair([1, 2, 3], 2.5)); // true
console.log(averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8)); // true
console.log(averagePair([-1, 0, 3, 4, 5, 6], 4.1)); // false
console.log(averagePair([], 4)); // false

/*
  Write a function called 'isSubsequence' which takes in two strings and checks whether the characters in the first string form a subsequence of the characters in the second string.
  In other words, the function should check whether the characters in the first string appear somewhere in the second string, without their order changing.
  Your solution MUST have AT LEAST the following complexities:
    Time Complexity - O(n + M)
    Space Complexity - O(1)
  */

function isSubsequence(str1, str2) {
  if (!str1) return true;
  let index1 = 0;
  let index2 = 0;

  while (index2 < str2.length) {
    if (str2[index2] === str1[index1]) index1++;
    if (index1 === str1.length) return true;
    index2++;
  }

  return false;
}

console.log(isSubsequence("hello", "hello world")); // true
console.log(isSubsequence("sing", "sting")); // true
console.log(isSubsequence("abc", "abracadabra")); // true
console.log(isSubsequence("abc", "acb")); // false (order matters)
