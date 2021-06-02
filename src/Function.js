//task 1 вариант с ?
let UserAge = prompt("Enter your age");
function CheckAge(age)
{
    return (age > 18)? true : confirm("Родители резрешили?");

}
CheckAge(UserAge);
// вариант с ||
let UserAge = prompt("Enter your age");
function CheckAge(age)
{
    return (age > 18) || confirm("Родители резрешили?");

}
CheckAge(UserAge);
// task 2 функция минимума из 2 чисел
let FirstNumber = +prompt("Введите первое число");
let SecondNumber = +prompt("Введите второе число");
function min(a,b)
{
    if (a < b) {
        return a;
    } else
        {
        return b;
    }
}
alert( min(FirstNumber,SecondNumber) );

// task 3 функция степени
let UserNumber = +prompt("Введите число");
let NumberDegree = +prompt("В какую степень возвести?");
function NumberPow(x,n)
{
    let result = x;
           for (let i=1;i < n;i++)
    {
        result *=x;
    }
    return result;
}
if (NumberDegree < 1)
{
    alert(`Степень ${NumberDegree} не поддерживается, используйте натуральные числа`);
} else {
    alert(NumberPow(UserNumber, NumberDegree));
}
// task 5 стрелочные функции
function ask (question,yes,no) {
    if(confirm(question)) yes()
    else no();
    }
ask(
    "Вы согласны?",
    () => alert("Вы согласны"),
    () => alert("Вы не согласны")
);
// task 6 Фильтрация
function inBetween(a,b) {
    return function (x) {
        return x>=a && x<= b;
    };
}
function inArray(arr) {
    return function (x) {
        return arr.includes(x);
    };
}
let arr = [1,2,3,4,5,6,7];
alert(arr.filter(inArray([1,2,10])) );
alert(arr.filter(inBetween(3,6)) );

//task 7 сортировка по полю
let users = [
    { name: "John", age: 20, surname: "Johnson" },
    { name: "Pete", age: 18, surname: " Peterson" },
    { name: "Ann", age: 19, surname: "Hathaway" }
];
function byField(fieldName) {
    return (a,b) => a[fieldName] < b[fieldName] ? 1 : -1;
}
users.sort(byField("name"));
users.forEach(user => alert(user.name));
users.sort(byField("age"));
users.forEach(user => alert(user.name));
