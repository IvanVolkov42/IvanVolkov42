// task 1
 let a = +prompt("Enter first number");
let b = +prompt("Enter second number");
alert( a + b);
// task 2 Проверка на ввод числа
function readNumber () {
    let userNumber;
    do {
        userNumber = prompt("Enter number");
    } while ( !isFinite(userNumber));
    if ( userNumber === null || userNumber === " " ) return null;
    return +userNumber;
}
readNumber();
// task 3 Случайное число от мин до мах
function random(min,max) {
    return min + Math.random() * (max - min);
}
a = +prompt("First number")
b = +prompt(" Second number")
alert(`random number = ${random(a,b)}`);
// task 4 Случайное целое число в заданном интервале
function randomInteger(min,max) {
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
}
a1 = +prompt("First number")
b1 = +prompt(" Second number")
alert(`random number = ${randomInteger(a1,b1)}`);
