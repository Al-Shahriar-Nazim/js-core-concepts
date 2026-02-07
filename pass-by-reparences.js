function multiply(a, b) {
  a = a + 4;
  b = b + 4;
  const multi = a * b;
  return multi;
}
const x = 10;
const y = 20;
console.log("before calling the function : ", x, y);
// output: before calling the function :  10 20

const result = multiply(x, y);
console.log(result);
// output: 364

console.log("after calling the function : ", x, y);
// output: after calling the function :  10 20


//non-primitive (object,array) are passed by reference
const manik = { name: "manik", balance: 5000 };
const roton = { name: "roton", balance: 2000 };
console.log("before call : ", manik, roton);
// output: before call :  { name: 'manik', balance: 5000 } { name: 'roton', balance: 2000 }

function totalMoney(person1, person2) {
  person1.balance = 0;
  person2.balance = person2.balance / 2;
  const total = person1.balance + person2.balance;
  return total;
}

const balance = totalMoney(manik, roton);
console.log("total balance is ", balance);
// output: total balance is  1000

console.log('after call :',manik,roton);
// output: after call : { name: 'manik', balance: 0 } { name: 'roton', balance: 1000 }

