/*
  Radix sort Big O
  Best: O(nk)
  Avg: O(nk)
  Worst: O(nk)
  with k = average number of digits.
*/

function getDigit(num, place) {
  //Math
  return Math.floor((Math.abs(num) / Math.pow(10, place)) % 10); // 10 is the base, it could be parameterized
  // Changing type
  // const str = num.toString();
  // return parseInt(str[str.length - place - 1]);
}

// console.log(getDigit(3456, 2));

function digitCount(num) {
  if (num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num))) + 1;
}

// console.log(digitCount(1)); // 1
// console.log(digitCount(25)); // 2
// console.log(digitCount(314)); // 3

function mostDigits(nums) {
  let maxDigits = 0;
  for (let num of nums) {
    maxDigits = Math.max(maxDigits, digitCount(num));
  }
  return maxDigits;
}

// console.log(mostDigits([1234, 56, 7])); // 4
// console.log(mostDigits([1, 1, 11111, 1])); // 5
// console.log(mostDigits([12, 34, 56, 78])); // 2

function radixSort(nums) {
  let maxDigits = mostDigits(nums);
  for (let k = 0; k < maxDigits; k++) {
    let buckets = Array.from({ length: 10 }, () => []);
    for (let i = 0; i < nums.length; i++) {
      let digit = getDigit(nums[i], k);
      buckets[digit].push(nums[i]);
    }
    nums = [].concat(...buckets);
  }
  return nums;
}

console.log(
  radixSort([1556, 4, 3556, 593, 408, 4386, 902, 7, 8157, 86, 9637, 29])
);
