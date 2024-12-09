let x = 1;
a();
b();
console.log(x);

function a() {
  let x = 3;
  console.log(x);
}

function b() {
  let x = 300;
  console.log(x);
}

console.log(x);

//Functions Use the concept of HOISTING to Excute
// A global execution concext is operated first on Javascript and then the code is executed with the help of it
//function run on 2 steps :- 1.Memory Creation Phase  2.Memory Execution Phase
