// FOR EACH //
Array.prototype.myEach = function () {
  // Place your code here.
};

// MAP //
Array.prototype.myMap = function (callbackFn) {
  const result = [];
  for (let i = 0; i < this.length; i++) {
    if (this[i] === undefined) continue;
    result[i] = callbackFn(this[i]);
  }
  return result;
};

console.log("Testing map!");
const array1 = [1, 4, , 9, 16];
// pass a function to map
const map1 = array1.map((x) => x * 2);
console.log(map1);
// expected output: Array [2, 8, 18, 32]
console.log("Testing myMap!");
const map2 = array1.myMap((x) => x * 2);
console.log(map2);
console.log("--------");

// SOME //
Array.prototype.mySome = function () {
  // Place your code here.
};

// REDUCE //
Array.prototype.myReduce = function () {
  // Place your code here.
};

// INCLUDES //
Array.prototype.myIncludes = function () {
  // Place your code here.
};

// INDEXOF //
Array.prototype.myIndexOf = function () {
  // Place your code here.
};

// PUSH //
Array.prototype.myPush = function () {
  // Place your code here.
};

// LASTINDEXOF //
Array.prototype.myLastIndexOf = function () {
  // Place your code here.
};

// KEYS //
Object.myKeys = function () {
  // Place your code here.
};

// VALUES //
Object.myValues = function () {
  // Place your code here.
};
