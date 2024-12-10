// const arr = [5, 1, 3, 2, 6];

// //Double = [10,2,6,4,12]
// //Triple

// function double(x) {
//   return x * 2;
// }

// function triple(x) {
//   return x * 3;
// }

// function binary(x) {
//   return x.toString(2);
// }

// const output = arr.map(binary);
// console.log(output);

//Chai or Code

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const newNums = myNums.filter((num) => {
  return num > 4;
});
console.log(newNums);
