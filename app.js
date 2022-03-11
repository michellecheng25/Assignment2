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
Array.prototype.mySome = function (callbackFn) {
  for (let i = 0; i < this.length; i++) {
    if (this[i] === undefined) continue;
    let result = callbackFn(this[i], i, this);
    if (result == true) return true;
  }
  return false;
};

const array = [1, 2, 3, 4, 5];
// checks whether an element is even
const even = (element) => element % 2 === 0;
console.log(array.some(even));
// expected output: true
console.log(array.mySome(even));


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
Array.prototype.myPush = function (...args) {
  let args_index = 0; // Index of new element
  let length = this.length; // Length of "this" array
  // The last element of "this" array is at length - 1
  for (let i = length; i < length + args.length; i++) {
    this[i] = args[args_index]; // Add new element to end of "this" array
    args_index++;
  }
  return this.length; // Return new length of "this" array

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