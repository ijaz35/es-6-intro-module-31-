//we can use multiple parameter in arrow function
const getMultiply = (num1, num2, num3) => num1 * num2 * num3;
console.log(getMultiply(4, 12, 3));

//we can use one parameter in arrow function. for single parameter we can omit () bracket or we can use ()bracket.
const tenMultiply = num => num * 10;
console.log(tenMultiply(10));

//or we can use ()bracket.
const fiveMultiply = (num) => num * 5;
console.log(fiveMultiply(10));

//if there is no parameter we use empty bracket

const getName = () => 'Md. moshiur rahaman';
console.log(getName());

//if there are many lines in function then we use {} second bracket an return
const doMath = (x, y) => {
    const sum = x + y;
    const diff = x - y;
    const result = (sum * diff) * 5;
    return result;
}
console.log(doMath(12, 5));