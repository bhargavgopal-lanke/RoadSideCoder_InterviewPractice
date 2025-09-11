// custom map function created using polyfills
// it works in older version of browsers
// Polyfill Map method
Array.prototype.myMap = function (cb) {
  let temp = [];
  for (let i = 0; i < this.length; i++) {
    temp.push(cb(this[i], i, this));
  }

  return temp;
};

const nums = [1, 2, 3, 4];

const mutliplyByThree = nums.myMap((num, i, arr) => {
  return num * 3;
});

console.log("polyfill output", mutliplyByThree);

// polyfill for filter

Array.prototype.filter = function (cb) {
  let temp = [];
  for (let i = 0; i < this.length; i++) {
    if (cb(this[i], i, this)) {
      temp.push(this[i]);
    }
  }
  return temp;
};

const numGreaterThanTwo = nums.filter((num, i, arr) => {
  return num > 2;
});

console.log("polyfill filter result", numGreaterThanTwo);

// poyfill for reduce

Array.prototype.myReduce = function (cb, initialValue) {
  var accumulator = initialValue;
  for (let i = 0; i < this.length; i++) {
    accumulator = accumulator ? cb(accumulator, this[i], i, this) : this[i];
  }
  return accumulator;
};

const accResult = nums.myReduce((acc, curr, i, arr) => {
  return acc + curr;
});

console.log("Reduce Polyfill Result", accResult);
