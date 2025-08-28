// this keyword value of arrow funnction comes from its parents function
// this keyword takes value of parent function which is getDetails() function
// and getDetails functions refers to current object it belongs to

const arrowUserObj = {
  name: "Gopal",
  age: 29,
  getDetails() {
    const nestedArrFun = () =>
      console.log("arrow method name ==>   ", this.name);
    nestedArrFun();
  },
};

arrowUserObj.getDetails();

// class methods

class user {
  constructor(n) {
    this.name = n;
  }

  getName() {
    console.log("class this example ==>  ", this.name);
  }
}

const User = new user("Bhargav");
User.getName();

// prctice

const thisObj = {
  name: "test",
  age: 29,
  getDetails() {
    const arrow = () => console.log(this.name);
    arrow();
  },
};

thisObj.getDetails();
