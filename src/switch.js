// task 1
let BrowserName = prompt("Insert browser name");
if(BrowserName === "Edge" )
{
   alert("You've got the Edge")
} else if(BrowserName === "Chrome" || BrowserName === "Firefox" || BrowserName === "Safari" || BrowserName === "Opera")
{
    alert("Okay we support these browsers too");
} else {
    alert("We hope that this page looks ok");
}
//task 2
const UserNumber = +prompt("Введите число от 0 до 3");
switch (UserNumber)
{
    case 0:
        alert("Вы ввели число 0");
        break;
    case 1:
        alert("Вы ввели число 1");
        break;
    case 2:
    case 3:
        alert("Вы ввели число 2, а может и 3");
        break;
}
