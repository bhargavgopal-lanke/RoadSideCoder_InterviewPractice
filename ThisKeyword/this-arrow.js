// this keyword value of arrow funnction comes from its parents function
// this keyword takes value of parent function which is getDetails() function
// and getDetails functions refers to current object it belongs to

const arrowUserObj = {
  name: "Bhargav",
  age: 29,
  getDetails() {
    const nestedArrFun = () => console.log("name", this.name);
    nestedArrFun();
  },
};

arrowUserObj.getDetails();
