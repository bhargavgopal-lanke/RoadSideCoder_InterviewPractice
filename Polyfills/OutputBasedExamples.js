let students = [
  {
    name: "Bhargav",
    rollNumber: 31,
    marks: 80,
  },
  {
    name: "Gopal",
    rollNumber: 15,
    marks: 69,
  },
  {
    name: "Rahim",
    rollNumber: 16,
    marks: 35,
  },
  {
    name: "Hussain",
    rollNumber: 7,
    marks: 55,
  },
];

// make all the names capital letters with forEach method
// let resArr = [];
// const res = students.forEach((x) => {
//   return resArr.push(x.name.toLocaleUpperCase());
// });

// console.log("resArr", resArr);

// make all the names capital letters with map method

const mapRes = students.map((x) => x.name.toLocaleUpperCase());
console.log("mapRes", mapRes);

// return onlyt details who scored more than sixty

const filterRes = students.filter((x) => x.marks > 60);

console.log("filterRes", filterRes);
