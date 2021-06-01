//task 1
let styles = ["Джаз","Блюз"];
styles.push("Рок-н-ролл");
let middleOfArray = Math.floor((styles.length -1) / 2);
styles[middleOfArray] = "Классика";
styles.shift();
styles.unshift("Рэп","Регги");
alert(styles);
// task 2 Сумма введенных чисел
function sumInput() {
    let numbers = [];
    while (true) {
        let value = prompt("Введите число",0);
        if (value === " " || value === null || !isFinite(value)) break;
        numbers.push(+value);
    }
    let sum = 0;
    for( let number of numbers) {
        sum += number;
    }
    return sum;
}
alert(sumInput());
// task 3 Подмассив наибольшей суммы
function getMaxSubSum(arr) {
    let maxSum =0;
    let partialSum = 0;
    for( let item of arr) {
        partialSum += item;
        maxSum = Math.max(maxSum,partialSum);
        if(partialSum < 0) partialSum = 0;
    }
    return maxSum;

}
// task 4 фунцкия удаления дефисов
function camelize(str) {
    return str
        .split("-")
        .map((word,index) => index == 0 ? word: word[0].toUpperCase() + word.slice(1)
        )
        .join("");

}
alert(camelize("list-style-image"));
// task 5 фильтрация по диапозону
function filterRange(arr,a,b) {
    return arr.filter(item => (a <= item && item <= b));
}
//task 6 фильтрация по диапозону "на месте"
function filterRangeInPlace( arr, a, b) {
    for (let i=0;i <= arr.length;i++) {
        if ( arr[i] <= a || arr[i] >= b) {
            arr.splice(i,1);
        }
    } return arr;
}
let arr = [5,3,8,1];
filterRangeInPlace(arr,2,6);
alert(arr);
// task 7 сортировка по убыванию
let arr = [5, 2, 1, -10, 8];
function compareNumeric( a, b) {
    if( b < a) return -1;
    if ( a == b) return 0;
    if ( a < b) return 1;
}
arr.sort(compareNumeric);
alert(arr);
// task 8 Скопировать и отсортировать массив
function copySorted (arr) {
    return arr.concat().sort();
    }
let arr = ["HTML","JavaScript","CSS"];
let sorted = copySorted(arr);
alert(sorted);
alert(arr);
// task 9 Расширяемый калькулятор
function Calculator() {
    this.methods = {
        "-": (a,b) => a-b,
        "+": (a,b) => a+b
    };
    this.calculate = function(str) {
        let split = str.split(" "),
            a = +split[0],
            op = split[1],
            b = +split[2]
        if( !this.methods[op] || isNan(a) || isNan(b)) {
            return NaN;
        }
        return this.methods[op](a,b);
    }
    this.addMethod = function (name, func) {
        this.methods[name] = func;
    };
}
// task 10 Трансформация в массив имён
let vasya = { name: "Вася", age: 25};
let petya = { name: "Петя", age: 30};
let masha = { name: "Маша", age: 28};
let users = [vasya, petya, masha];
let names = users.map(item => item.name);
alert(names);
// task 11 Трасформация в объекты
let vasya = { name: "Вася",surname: "Пушкин",id: 1};
let petya = { name: "Петя", surname: "Иванов", id: 2};
let masha = { name: "Маша", surname: "Петрова", id: 3};
let users = [vasya,petya,masha];
let usersMapped = users.map(user => ({
   fullName: `${user.name} ${user.surname}`,
   id: user.id
}));
alert(usersMapped[1].id);
alert(usersMapped[1].fullName);
//task 11 сортировка по возрасту

function sortByAge (users) {
    arr.sort((a,b) => a.age > b.age ? 1: -1);
}
let vasya = { name: "Вася", age: 25};
let petya = { name: "Петя", age: 30};
let masha = { name: "Маша", age: 28};
let arr = [vasya, petya, masha];
sortByAge(arr);
alert(arr[1]);

//task 12 Средний возраст
let vasya = { name: "Вася", age: 25};
let petya = { name: "Петя", age: 30};
let masha = { name: "Маша", age: 29};
let arr = [vasya, petya, masha];
function getAverageAge(users) {
    return users.reduce((prev,user) => prev + user.age, 0) / users.length;
}
alert(getAverageAge(arr));

// task 13 Оставление уникальных жлементов массива
function unique(arr) {
    let results = [];
    for(let str of arr) {
        if(!results.includes(str)) {
            results.push(str);
        }
    }
    return results;
}
let strings = [ "кришна","кришна","харе","харе",
"харе","харе","кришна","кришна",":-O"];
alert(unique(strings));
