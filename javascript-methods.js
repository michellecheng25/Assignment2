// FOR EACH //
Array.prototype.myEach = function (callbackFn) {
  for (let i = 0; i < this.length; i++) {
    // "this" keyword refers to the array being called.
    if (this[i] === undefined) continue;
    // callbackFn can take up to 3 input parameters:
    // element
    // element, index
    // element, index, array
    callbackFn(this[i], i, this); // callbackFn is "console.log(x,i,myArray)"
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

// SOME //
Array.prototype.mySome = function (callbackFn) {
  for (let i = 0; i < this.length; i++) {
    if (this[i] === undefined) continue;
    let result = callbackFn(this[i], i, this);
    if (result == true) return true;
  }
  return false;
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

// INCLUDES //
Array.prototype.myIncludes = function (searchElement, fromIndex) {
  var fromIndex = fromIndex == undefined ? 0 : fromIndex;
  for (let i = fromIndex; i < this.length; i++) {
    if (this[i] === undefined) continue;
    if (this[i] === searchElement) return true;
  }
  return false;
};

// INDEXOF //
Array.prototype.myIndexOf = function (searchElement, fromIndex) {
  var fromIndex = fromIndex == undefined ? 0 : fromIndex;
  for (let i = fromIndex; i < this.length; i++) {
    if (this[i] === undefined) continue;
    if (this[i] === searchElement) return i;
  }
  return -1;
};

// MYPUSH //
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

// KEYS //
Object.myKeys = function (obj) {
  const result = [];
  for (let key in obj) {
    result.push(key);
  }
  return result;
};

// VALUES //
Object.myValues = function (obj) {
  const result = [];
  for (let key in obj) {
    result.push(obj[key]);
  }
  return result;
};
