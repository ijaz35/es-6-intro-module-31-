// (...) is called spread operator in js 

const number1 = [11, 23, 45, 56, 78, 23];
// console.log(number1);
// by using ... is shows only numbers instead of an array.
// console.log(...number1);

//Math.max() is used to find the maximum number among numbers
const maxNumber = Math.max(11, 23, 46, 87, 99);
// console.log(maxNumber);

//If we want to find max number in an array then we have to use (...) spread operator
const maxNumberInArray = Math.max(...number1);
// console.log(maxNumberInArray);

//we can use an array in an array
const number2 = [number1];
number1.push(55);
console.log(number1);
console.log(number2);

//we can use one arry items only by (...)
const number3 = [22, ...number1, 88];
console.log(number3);


//actually (...) dots or spread operator is used to spread any thing 



