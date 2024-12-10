//For Of

const arr = [1, 2, 3, 4, 5];

for (const num of arr) {
  console.log(arr[num]);
}

const greetings = "Hello";

for (const greet of greetings) {
  console.log(`Each char is ${greet}`);
}

//Maps
const map = new Map();
map.set("IN", "India");
map.set("USA", "United States Of America");
map.set("FR", "France");

console.log(map);

const myObject = {
  cpp: "C++",
  java: "java",
  js: "javascript",
  rb: "Ruby",
};

// //For in Loop
for (key in myObject) {
  console.log(`The key is ${key} & the Value is ${myObject[key]}`);
}

const number = [1, 2, 3, 4, 5, 6, 7];
for (key in number) {
  console.log(`The Index is ${key} and the Value is ${number[key]}`);
}

//For Each

const marvel = ["Ant Man", "Iron Man", "Thor", "Mavericks"];
marvel.forEach(function (val) {
  console.log(val);
});
