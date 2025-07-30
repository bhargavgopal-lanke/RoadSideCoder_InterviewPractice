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

// user.getDetails();

// example 3
// clearly in this example we can see this refers to the object it belongs to.

const userTwo = {
  name: "Gopal",
  age: 29,
  childObject: {
    nameTwo: "React Developer",
    getDetails() {
      console.log(this.nameTwo, "and", this.name);
    },
  },
};

userTwo.childObject.getDetails();
