//we can make default parameter to any function. if we give all parameters in function then the default parameter is not used.

function makeFullname(first, last = 'ahmed') {
    const fullName = first + ' ' + last;

    console.log(fullName);
}
makeFullname('ijaz');// inthis case default parameter is used.
makeFullname('ijaz', 'hossain');//inthiscase default parameter is not used.

function addNumber(num1, num2 = 10) {
    const sum = num1 + num2;
    console.log(sum);
}
addNumber(15);
addNumber(15, 20);