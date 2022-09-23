//function decleration 

//type-1 normal decleration
function add1(num1, num2) {
    return num1 + num2;
}
//type-2 function can be decleared as a variable.
const add2 = function add2(num1, num2) {
    return num1 + num2;
}
//type-3 anonymous function
const add3 = function add3(num1, num2) {
    return num1 + num2;
}

//type-4 arrow function 
const add4 = (num1, num2) => num1 + num2;

const sum1 = add1(15, 15);
const sum2 = add2(15, 15);
const sum3 = add3(15, 15);
const sum4 = add4(15, 15);
console.log(sum1, sum2, sum3, sum4);