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
