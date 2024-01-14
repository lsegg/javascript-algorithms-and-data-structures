/* HASH TABLES (average case with a good hash)
  Insertion - O(1)
  Deletion - O(1)
  Access - O(1)
*/
class HashTable {
  constructor(size = 53) { // prime number
    this.keyMap = new Array(size);
  }

  _hash(strKey) {
    function positionAtAlphabet(char) {
      // map "a" to 1, "b" to 2, "c" to 3, etc.
      return char.charCodeAt(0) - 96;
    }

    let total = 0;
    let PRIME_NUMBER = 31; // the larger the better to avoid clustering
    let iterationsLimit = Math.min(strKey.length, 100); // time optimization

    for (let i = 0; i < iterationsLimit; i++) {
      let value = positionAtAlphabet(strKey[i]);
      total = (total * PRIME_NUMBER + value) % this.keyMap.length;
    }
    return total;
  }

  set(key, value) { //separate chaining
    let index = this._hash(key);
    if (!this.keyMap[index]) {
      this.keyMap[index] = [];
    }
    this.keyMap[index].push([key, value]);
  }

  get(key) {
    let index = this._hash(key);
    let storedData = this.keyMap[index];
    return storedData?.find((element) => element.includes(key))[1];
  }

  keys() {
    let keys = [];
    for (let i = 0; i < this.keyMap.length; i++) {
      let storedData = this.keyMap[i];
      if (storedData) {
        for (let j = 0; j < storedData.length; j++) {
          keys.push(storedData[j][0]);
        }
      }
    }
    return keys;
  }

  values() {
    let values = [];
    for (const storedData of this.keyMap) {
      if (storedData) {
        for (const [, value] of storedData) {
          values.push(value);
        }
      }
    }
    return values;
  }
}

let colors = new HashTable(17);
colors.set("maroon", "#800000");
colors.set("yellow", "#FFFF00");
colors.set("olive", "#808000");
colors.set("salmon", "#FA8072");
colors.set("lightCoral", "#F08080");
colors.set("mediumVioletRed", "#C71585");
colors.set("plum", "#DDA0DD");

console.log(colors.get("plum"));
console.log(colors.keys());
console.log(colors.values());
