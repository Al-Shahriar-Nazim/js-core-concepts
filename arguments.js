function add(a,b){
    // console.log(a,b);
    // output: 10 20
    console.log(arguments)
    // output: [Arguments] { '0': 10, '1': 20, '2': 30, '3': 40 }------>array like object

    const params =[...arguments];
    console.log(params);
    // output: [ 10, 20, 30, 40 ]
}
add(10,20,30,40);
