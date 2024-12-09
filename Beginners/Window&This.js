//This is used to give reference to windows
// this===window will give the result as true

let a = 10;

function b() {
  var x = 20;
}

// console.log(a);

const user = {
  userName: "Sundeep",
  price: 999,

  welcomeMessage: function () {
    console.log(`${this.userName}, Welcomes You`);
  },
};

user.welcomeMessage();
user.userName = "Sneha";

user.welcomeMessage();

const chai = () => {
  console.log("Chai Piyoge Guys");
};

chai();

const addTwoNumber = () => ({ userName: "Sundeep" });

addTwoNumber.userName;
