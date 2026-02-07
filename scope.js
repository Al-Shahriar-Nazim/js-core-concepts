// block scope
if (true) {
  const data = "block scope";
  console.log(data);
  // output: block scope
  myMove(10, 20);
}

//function scope or local scope
function myMove(a, b) {
  console.log("function scope");
  const sum = a + b;
  const total = sum + 10;

  function doubleIt(x) {
    return x * 2;
  }
  console.log("colling double it :", doubleIt(450));
  // output :  colling double it : 900
}

// global scope
console.log(data)
var data = "global scope";
// output : undefined 
// let and const are not hoisted
