class HashTable {
  constructor() {}
}

function positionAtAlphabet(char) {
  // map "a" to 1, "b" to 2, "c" to 3, etc.
  return char.charCodeAt(0) - 96;
}

function hash(strKey, hashArrLength) {
  let total = 0;
  for (let char of strKey) {
    let value = positionAtAlphabet(char);
    total = (total + value) % hashArrLength;
  }
  return total;
}
