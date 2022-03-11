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
