let name;
console.log(name);
//output: undefined


function total(a, b) {
  console.log(a, b);
}
total();
//output:undefined undefined



function tatal2(a, b) {
  if (a === undefined || b === undefined) {
    return;
  }

  if (a && b) {
    const sum = a + b;
    return sum;
  }
}

const result2 = tatal2(2);
console.log(result2);
//output: undefined


const phone ={name:"samsung", price: 20000};
console.log(phone.brand);
// output: undefined

const frineds =['nazim','sajjad','sabbir'];
console.log(frineds[3]);
//ouput: undefined

delete frineds[1];
console.log(frineds[1])
//output: undefined


console.log(typeof undefined);
// output : undefined

/////-----------------null-----------
console.log(typeof null);
//output: object