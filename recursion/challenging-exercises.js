/*
  Write a recursive function called reverse which accepts a string and returns a new string in reverse.
*/
function reverse(str) {
  if (str.length <= 1) return str;
  return reverse(str.slice(1)) + str[0];
}

console.log(reverse("awesome")); // 'emosewa'
console.log(reverse("rithmschool")); // 'loohcsmhtir'

/*
  Write a recursive function called isPalindrome which returns 
  true if the string passed to it is a palindrome}.
*/
function isPalindrome(str) {
  const len = str.length;
  if (len <= 1) return true;

  return str[0] === str[len - 1] && isPalindrome(str.slice(1, len - 1));
}

console.log(isPalindrome("awesome")); // false
console.log(isPalindrome("foobar")); // false
console.log(isPalindrome("tacocat")); // true
console.log(isPalindrome("amanaplanacanalpanama")); // true
console.log(isPalindrome("amanaplanacanalpandemonium")); // false

/*
  Write a recursive function called someRecursive which accepts an array and a callback.
  The function returns true if a single value in the array returns true when passed to the callback.
  Otherwise it returns false.
*/
function someRecursive(arr, callback) {
  if (arr.length === 0) return false;

  if (callback(arr[0])) {
    return true;
  }

  return someRecursive(arr.slice(1), callback);
}

// sample callback
const isOdd = (val) => val % 2 !== 0;

console.log(someRecursive([1, 2, 3, 4], isOdd)); // true
console.log(someRecursive([4, 6, 8, 9], isOdd)); // true
console.log(someRecursive([4, 6, 8], isOdd)); // false
console.log(someRecursive([4, 6, 8], (val) => val > 10)); // false

/*
  Write a recursive function called flatten which accepts an array of arrays and returns a new array with all values flattened.
*/

const includesArray = (data) => {
  return data.some((e) => Array.isArray(e));
};

function flatten(oldArr) {
  return oldArr.reduce(function (newArr, current) {
    return newArr.concat(Array.isArray(current) ? flatten(current) : current);
  }, []);
}

console.log(flatten([1, 2, 3, [4, 5]])); // [1, 2, 3, 4, 5]
console.log(flatten([1, [2, [3, 4], [[5]]]])); // [1, 2, 3, 4, 5]
console.log(flatten([[1], [2], [3]])); // [1,2,3]
console.log(flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]])); // [1,2,3]

/*
  Write a recursive function called capitalizeFirst.
  Given an array of strings, capitalize the first letter of each string in the array.
*/

function capitalizeFirst(array) {
  if (array.length === 0) {
    return [];
  }
  const lastElement = array[array.length - 1];
  const capitalizedLast = [lastElement[0].toUpperCase() + lastElement.slice(1)];
  return [...capitalizeFirst(array.slice(0, -1)), ...capitalizedLast];
}

console.log(capitalizeFirst(["car", "taco", "banana"])); // ['Car','Taco','Banana']
