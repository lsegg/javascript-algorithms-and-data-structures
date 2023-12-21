function sumRange(num) {
  //base case
  if (num === 1) return 1;
  //recursion
  return num + sumRange(num - 1);
}

function factorial(num) {
  if (num === 1) return 1;
  return num * factorial(num - 1);
}