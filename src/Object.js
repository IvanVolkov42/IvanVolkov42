//task 1
/*let User = {};
User.name = "John";
User.surname = "Smith";
User.name = "Pete";
delete User.name;
// task 2-3
function isEmpty(obj) {
    for (let key in obj) {
        return false;
    }return true;
}
let Salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
}
let sum = 0;
for (let key in Salaries){
    sum += Salaries[key];
}

alert(sum);
// task 3
function multiplyNumeric(obj) {
    for(let key in obj) {
        if( typeof obj[key] == "number") {
          obj[key] *= 2;
        }
    }
}
let menu = {
    width: 200,
    height: 300,
    title: "My menu"
};
alert(`${menu.height} and ${menu.width}`); // до
multiplyNumeric(menu);
alert(`${menu.height} and ${menu.width}`); //после

//task 4 Суммирование свойств объекта
function sumSalaries(salaries) {
    let sum = 0;
    for( let value of Object.values(salaries)) {
        if(value !== 0) {
            sum += value;
        } else sum = 0;
    } return sum;
}
let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
};
alert(sumSalaries(salaries));
let emptySalaries = {

};
alert(sumSalaries(emptySalaries));

//task 5 Подсчет количества свойств объекта
function count(obj) {
    return Object.keys(obj).length;
}
let user = {
    name: "John",
    age: 30
};
alert(count(user));
//task 6 деструктурирующее присваивание
let user = {
    name: "John",
    years: 30
};
let {name, years:age , isAdmin= false } = user;
alert(name);
alert(age);
alert(isAdmin);*/

// task 7 Максимальная зарплата

let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
};
function topSalaries(salaries) {
    let maxSalary = 0;
    let maxSalaryName = null;
    for( let [name,salary] of Object.entries(salaries)) {
        if( maxSalary < salary) {
            maxSalary = salary;
            maxSalaryName = name;
        }
    } return maxSalaryName;
}
alert(topSalaries(salaries));
