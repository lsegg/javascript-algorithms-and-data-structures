/*
  Merge sort 
  Big O => O(n log(n))
  O(log n) for decompositions + O(n) for comparisons per decompositions
  */

function merge(sortedArr1, sortedArr2) {
  let mergedArr = [];
  let i = 0,
    j = 0;
  while (i < sortedArr1.length && j < sortedArr2.length) {
    sortedArr1[i] < sortedArr2[j]
      ? (mergedArr.push(sortedArr1[i]), ++i)
      : (mergedArr.push(sortedArr2[j]), ++j);
  }
  i === sortedArr1.length && j < sortedArr2.length
    ? mergedArr.push(...sortedArr2.slice(j))
    : mergedArr.push(...sortedArr1.slice(i));
  return mergedArr;
}

console.log(merge([1, 10, 14, 50], [2, 14, 99, 100]));

function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  let middle = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, middle));
  let right = mergeSort(arr.slice(middle));
  return merge(left, right);
}

console.log(mergeSort([10, 24, 76, 73, 72, 9]));
