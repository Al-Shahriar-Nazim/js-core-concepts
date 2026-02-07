let data;
console.log("value of data is", data);
//output: value of data is undfined

data= 0;
// 0  is falsy value

data ="";
//output: empty string is falsy value

data =" ";
//output : data is truthy

data = "0";
//output: data is truthy

data = false;
// output: data is falsy

data = true;
//output: data is truthy

data = null;
//  output: data is falsy

data ={}
//output: data is truthy


data =[];
//output: data is truthy


if(data){
    console.log('data is truthy');
}
else{
    console.log('data is falsy');
}
//output: data is falsy