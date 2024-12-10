const myNumers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const newNums = myNumers.map((num) => num + 10);

// console.log(newNums);

//When the scope is opened i.e {} You have to return the value (use return keyword)
//When there is no scope {} , value will be returned automatically

const newNums2 = myNumers
  .map((num) => num * 10)
  .map((num) => num + 1)
  .filter((num) => num > 40);

console.log(newNums2);
