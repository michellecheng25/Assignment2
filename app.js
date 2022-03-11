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
Object.myKeys = function () {
  // Place your code here.
};

// VALUES //
Object.myValues = function () {
  // Place your code here.
};
