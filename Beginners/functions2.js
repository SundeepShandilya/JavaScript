//From Chai or Code

function SayMyName() {
  console.log("S");
  console.log("U");
  console.log("N");
  console.log("D");
  console.log("E");
  console.log("E");
  console.log("P");
}

// SayMyName();

function addTwoNumber(number1, number2) {
  console.log(number1 + number2); //This is not returning result,so result is 7
}

function addTwoNumber(number1, number2) {
  let res = number1 + number2;
  return res; //This is returning,so result is 7
}

//When numbers are called while defining and writing a function, it is called as parameters
//parameters added while calling, it is known as argument

const result = addTwoNumber(2, 5);
console.log(result);

function login(userName) {
  return `${userName} just loggedIN`;
}
console.log(login("Sundeep")); //When value is not given, it is called undefined
