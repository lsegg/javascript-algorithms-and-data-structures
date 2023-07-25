/*
  Write a function called 'same', which accepts two arrays.
  The function should return true if every value in the array has it's corresponding value squared in the second array.
  The frequency of values must be the same.
*/

// INITIAL NAIVE SOLUTION - 0(n^3)
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

// ________________________________________________________________________________________

/*
  Given two strings, write a function to determine if the second string is an anagram of the first.
*/

function isAnagram(str1, str2) {
  str1 = str1.replace(/\s+/g, "").toLowerCase();
  str2 = str2.replace(/\s+/g, "").toLowerCase();
  if (str1.length !== str2.length) return false;

  let frequencyCounter1 = {};
  let frequencyCounter2 = {};
  for (let char of str1) {
    frequencyCounter1[char] = (frequencyCounter1[char] || 0) + 1;
  }
  for (let char of str2) {
    frequencyCounter2[char] = (frequencyCounter2[char] || 0) + 1;
  }

  if (
    Object.keys(frequencyCounter1).length !==
    Object.keys(frequencyCounter2).length
  )
    return false;

  for (let key in frequencyCounter1) {
    if (frequencyCounter2[key] !== frequencyCounter1[key]) {
      return false;
    }
  }
  return true;
}

// Cleaner solution
function validAnagram(first, second) {
  if (first.length !== second.length) {
    return false;
  }

  const lookup = {};

  for (let letter of first) {
    // if letter exists, increment, otherwise set to 1
    lookup[letter] ? (lookup[letter] += 1) : (lookup[letter] = 1);
  }
  console.log(lookup);

  for (let letter of second) {
    // can't find letter or letter is zero then it's not an anagram
    if (!lookup[letter]) {
      return false;
    } else {
      lookup[letter] -= 1;
    }
  }

  return true;
}

console.log(isAnagram("dusty", "study")); // true
console.log(isAnagram("three", "apple")); // false
console.log(isAnagram("sandy", "andy")); // false
console.log(isAnagram("a gentleman", "elegant man")); // true
console.log(isAnagram("A decimal point", "Im a dot in place")); // true
console.log(validAnagram("anagrams", "nagaramm")); // false
