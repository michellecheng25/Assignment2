// FOR EACH //
Array.prototype.myEach = function(callbackFn) {
  for (let i = 0; i < this.length; i++) {   // "this" keyword refers to the array being called.
    if (this[i] === undefined) continue;
    // callbackFn can take up to 3 input parameters:
    // element
    // element, index
    // element, index, array
    callbackFn(this[i], i, this);   // callbackFn is "console.log(x,i,myArray)" 
  }
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
Array.prototype.myReduce = function (callbackFn, initialValue) {
  var result;
  for (let i = 0; i < this.length; i++) {
    if (this[i] === undefined) continue;
    if (i === 0) {
      if (initialValue === undefined) result = this[i];
      else result = initialValue + this[i];
    } else result = callbackFn(result, this[i], i, this);
  }
  return result;
};

const array2 = [1, 2, 3, 4];

// 0 + 1 + 2 + 3 + 4
const initialValue = 0;
const sumWithInitial = array2.reduce(
  (previousValue, currentValue) => previousValue + currentValue,
  initialValue
);

console.log(sumWithInitial);
// expected output: 10

const sumWithInitial2 = array2.myReduce(
  (previousValue, currentValue) => previousValue + currentValue,
  initialValue
);

console.log(sumWithInitial2);

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
Array.prototype.myIndexOf = function (searchElement, fromIndex) {
  var fromIndex = fromIndex == undefined ? 0 : fromIndex;
  for (let i = fromIndex; i < this.length; i++) {
    if (this[i] === undefined) continue;
    if (this[i] === searchElement) return i;
  }
  return -1;
};

const beasts = ["ant", "bison", "camel", "duck", "bison"];

console.log(beasts.indexOf("bison"));
// expected output: 1

// start from index 2
console.log(beasts.indexOf("bison", 2));
// expected output: 4

console.log(beasts.indexOf("giraffe"));
// expected output: -1

console.log(beasts.myIndexOf("bison"));
// expected output: 1

// start from index 2
console.log(beasts.myIndexOf("bison", 2));
// expected output: 4

console.log(beasts.myIndexOf("giraffe"));
// expected output: -1

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
Array.prototype.myLastIndexOf = function (searchElement, fromIndex) {
  var fromIndex = fromIndex == undefined ? this.length : fromIndex;
  for (let i = fromIndex; i >= 0; i--) {
    if (this[i] === undefined) continue;
    if (this[i] === searchElement) return i;
  }
  return -1;
};

const animals = ["Dodo", "Tiger", "Penguin", "Dodo"];

console.log(animals.lastIndexOf("Dodo"));
// expected output: 3

console.log(animals.lastIndexOf("Tiger"));
// expected output: 1

console.log(animals.myLastIndexOf("Dodo"));
// expected output: 3

console.log(animals.myLastIndexOf("Tiger"));
// expected output: 1

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
