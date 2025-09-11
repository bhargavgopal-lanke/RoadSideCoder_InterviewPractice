const arr = [1, 2, 3, 4];

const mapRes = arr.map((x) => x * 3);

console.log("mapRes", mapRes);

const filterRes = arr.filter((x) => x > 2);

console.log("filterRes", filterRes);

// the value return by callback function in each iteration will becomes the new accumulator
const reduceRes = arr.reduce((acc, curr) => {
  return acc + curr;
}, 0);

console.log("reduceRes", reduceRes);
