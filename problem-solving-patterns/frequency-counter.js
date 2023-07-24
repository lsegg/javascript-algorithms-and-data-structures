/*
  Write a function called 'same', which accepts two arrays.
  The function should return true if every value in the array has it's corresponding value squared in the second array.
  The frequency of values must be the same.
*/

// INITIAL NAIVE SOLUTION - 0(n^2)
function checkArrValues(arr) {
  return !arr.every((element) => {
    return typeof element === "number";
  });
}

function same(arr1, arr2) {
  // check type array
  const invalidType = !Array.isArray(arr1) || !Array.isArray(arr2);
  if (invalidType) return null;
  // check type number
  const invalidValues = checkArrValues(arr1) || checkArrValues(arr2);
  if (invalidValues) return null;
  // check arrays lengths
  if (!(arr1.length === arr2.length)) return false;

  // if valid, check every element
  let sqFound = 0;
  for (const num of arr1) {
    let found = false;
    for (const sqNum of arr2) {
      if (num * num === sqNum) {
        found = true;
        arr2.splice(arr2.indexOf(sqNum), 1);
      }
    }
    if (found) sqFound++;
  }

  // return true or false or null if input invalid
  if (!(sqFound === arr1.length)) {
    return false;
  }

  return true;
}

// NAIVE SOLUTION REFACTORED - 0(n^2)
function same(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let num of arr1) {
    let correctIndex = arr2.indexOf(num ** 2); // second loop in indexOf
    if (correctIndex === -1) {
      return false;
    }
    arr2.splice(correctIndex, 1);
  }
  return true;
}

// FREQUENCY COUNTER PATTERN SOLUTION - 0(n)
function same(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  let frequencyCounter1 = {};
  let frequencyCounter2 = {};
  for (let val of arr1) {
    frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
  }
  for (let val of arr2) {
    frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
  }
  console.log(frequencyCounter1);
  console.log(frequencyCounter2);
  for (let key in frequencyCounter1) {
    if (!(key ** 2 in frequencyCounter2)) {
      return false;
    }
    if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
      return false;
    }
  }
  return true;
}

console.log(same([1, 2, 3], [4, 1, 9])); // true
console.log(same([1, 2, 3], [1, 9])); // false
console.log(same([1, 2, 1], [4, 4, 1])); // false (must be same frequency)
console.log(same([], [])); // true
console.log(same([1, 2, 3], "1,4,9")); // null (invalid)
console.log(same([1, 2, 3, 2], [9, 1, 4, 4])); // true
console.log(same([1, 2, 3, 2, 5], [9, 1, 4, 4, 11])); // false
