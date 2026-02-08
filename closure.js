function counter() {
  let count = 0;
  function innerFunction() {
    console.log("inside the inner function.some called me.");
  }
  return innerFunction;
}
let output = counter();
console.log(output); // output: [Function: innerFunction]
console.log(output()); // output: inside the inner function.some called me.

/**
 *
 * A function remembers variables from its outer (parent) 
    function even after the outer function has finished running.
 */

function counDown() {
  let count = 10;
  return function (user) {
    count = count + 1;
    console.log("inside the inneer function.", user, count);
  };
}
let output2 = counDown();
output2(); // output: inside the inneer function. 11

const rahimCounter = counDown();
rahimCounter("Rahim"); // output: inside the inneer function. Rahim 11
rahimCounter("Rahim"); // output: inside the inneer function. Rahim 12
rahimCounter("Rahim"); // output: inside the inneer function. Rahim 13

console.log("----------------------");

const karimCounter = counDown();
karimCounter("Karim"); // output: inside the inneer function. Karim 11
karimCounter("Karim"); // output: inside the inneer function. Karim 12
rahimCounter("Rahim"); // output: inside the inneer function. Rahim 14
