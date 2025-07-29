// this keyword in js (implicit binding)
// explain 'this' keyword?

this.a = 5;

function getParam() {
  console.log(this.a);
}

getParam();

// example 2

const user = {
  name: "Bhargav",
  age: 29,
  getDetails() {
    console.log(this.name);
  },
};

user.getDetails();
