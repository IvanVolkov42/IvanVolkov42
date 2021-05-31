// task 1 перевод в верхний регистр 1 символа
function ucFirst(str) {
    str = str[0].toUpperCase() + str.slice(1);
    return str;
}
let userString = prompt("Введите строку");
alert(ucFirst(userString));
// task 2 проверка на спам
function checkSpam (str) {
    str = str.toLowerCase();
    return str.includes("viagra") || str.includes("xxx");
}
alert(checkSpam("buy ViAgra"));
alert(checkSpam("free xxxxxx"));
alert(checkSpam("some text"));
// task 3 усечение строки
function truncate (str,maxlength) {
    if (str.length > maxlength) {
        str = str.substring(0,maxlength) + "...";
        alert(str);
    } else alert(str);
}
truncate( "Привет", 3);
//task 4 выделить число
function extractCurrencyValue(str) {
    return +str.slice(1);
}
alert(extractCurrencyValue("$120"));
