// FOR EACH //
Array.prototype.myEach = function () {
  // Place your code here.
};

// MAP //
Array.prototype.myMap = function () {
  // Place your code here.
};

// SOME //
Array.prototype.mySome = function () {
  // Place your code here.
};

// REDUCE //
Array.prototype.myReduce = function () {
  // Place your code here.
};

// INCLUDES //
Array.prototype.myIncludes = function (searchElement, fromIndex) {
  var fromIndex = fromIndex == undefined ? 0 : fromIndex;
  for (let i = fromIndex; i < this.length; i++) {
    if (this[i] === undefined) continue;
    if (this[i] === searchElement) return true;
  }
  return false;
};

const array1 = [1, 2, 3];

console.log(array1.includes(2));
// expected output: true

const pets = ["cat", "dog", "bat"];

console.log(pets.includes("cat"));
// expected output: true

console.log(pets.includes("at"));
// expected output: false

console.log(array1.myIncludes(2));
// expected output: true

console.log(pets.myIncludes("cat"));
// expected output: true

console.log(pets.myIncludes("at"));
// expected output: false

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
Object.myKeys = function (obj) {
  const result = [];
  for (let key in obj) {
    result.push(key);
  }
  return result;
};

const object1 = {
  a: "somestring",
  b: 42,
  c: false,
};

console.log(Object.keys(object1));
// expected output: Array ["a", "b", "c"]

console.log(Object.myKeys(object1));
// expected output: Array ["a", "b", "c"]

// VALUES //
Object.myValues = function (obj) {
  const result = [];
  for (let key in obj) {
    result.push(obj[key]);
  }
  return result;
};

const object1 = {
  a: "somestring",
  b: 42,
  c: false,
};

console.log(Object.values(object1));
// expected output: Array ["somestring", 42, false]

console.log(Object.myValues(object1));
// expected output: Array ["somestring", 42, false]
