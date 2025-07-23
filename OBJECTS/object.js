// JSon stringigy and parse

const user = {
  name: "Bhargav",
  age: 29,
  istrulyGreat: true,
};
const strObj = JSON.stringify(user); // object converted to a string

const strParse = JSON.parse(strObj); // string converted to a object

console.log(strObj);
console.log(strParse);

// iterate items through a object

const userObj = {
  num1: 100,
  num2: 200,
  calculate: true,
};

for (let key in userObj) {
  if (typeof userObj[key] == "number") {
    userObj[key] = userObj[key] * 2;
  }
}

console.log("userObj", userObj);
