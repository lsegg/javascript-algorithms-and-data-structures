/*
  Write a function called power which accepts a base and an exponent.
  The function should return the power of the base to the exponent.
  This function should mimic the functionality of Math.pow()  - do not worry about negative bases and exponents.
*/
function power(base, exp) {
  if (exp === 0) return 1;
  let expResult = base; //2

  function helperPow(multiplier) {
    expResult *= multiplier; //4

    if (multiplier < exp) helperPow(expResult, multiplier++);
  }

  helperPow(base, 1);
  return expResult;
}

console.log(power(2, 0)); // 1
console.log(power(2, 2)); // 4
console.log(power(2, 4)); // 16

/*
  Write a function factorial which accepts a number and returns the factorial of that number.
*/

function factorial(num) {
  if (num === 0 || num === 1) return 1;
  let factNum = num; //1

  function helperF(multiplier) {
    factNum *= multiplier;

    if (multiplier > 1) helperF(--multiplier);
  }

  helperF(num - 1);
  return factNum;
}

console.log(factorial(1)); // 1
console.log(factorial(2)); // 2
console.log(factorial(4)); // 24
console.log(factorial(7)); // 5040

/*
Write a function called productOfArray which takes in an array of numbers and returns the product of them all.
*/

function productOfArray(arr) {
  let result = 1;

  function helperProduct(num) {
    result *= num;

    if (arr.length > 0) {
      helperProduct(arr.shift(1));
    }
  }

  helperProduct(arr[0]);
  return result;
}

console.log(productOfArray([1, 2, 3])); // 6
console.log(productOfArray([1, 2, 3, 10])); // 60

/*
  Write a function called recursiveRange 
  which accepts a number and adds up all the numbers
  from 0 to the number passed to the function 
*/

function recursiveRange(num) {
  let result = 0;

  function helperSum(n) {
    result += n;
    if (n > 0) helperSum(--n);
  }

  helperSum(num);
  return result;
}

console.log(recursiveRange(6)); // 21
console.log(recursiveRange(10)); // 55

/*
  Write a recursive function called fib 
  which accepts a number and returns the nth number in the Fibonacci sequence.
*/

function fib(num) {
  if (num === 1 || num === 2) return 1;
  let prevFibA = 1;
  let prevFibB = 1;
  let nthFib = 1;

  function helperFib(n) {
    prevFibB = prevFibA;
    prevFibA = nthFib;
    nthFib = prevFibA + prevFibB;

    if (n < num) {
      helperFib(++n);
    }
  }

  helperFib(3);

  return nthFib;
}

console.log(fib(4)); // 3
console.log(fib(10)); // 55
console.log(fib(28)); // 317811
console.log(fib(35)); // 9227465
