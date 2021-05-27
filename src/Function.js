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
