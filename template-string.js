//1.We can use single quote, double quote for single line 
//2.In ES6 we use `` caret or tik for multiple line or dynamic string.
// 3. (``)caete or tamplete string is mainly used for string interpolation. syntax:${...}

const priya = 'asif akbar';
const mayea = "tumi ki dukkho chilo chino na";
const multipleLine = `this is my first line
this is my second line
this is my third line
this is my fourth line
this is my fifth line`;
// console.log(multipleLine);

const first = 'Akbar';
const second = 'Ali';
const full = first + ' ' + second;
console.log(full);

//but using caret and ${variable name}
const fullName = `This parson name is: ${first} ${second}. His age is : ${(first.length + 5) * 5}`;
console.log(fullName);