//task 1
let User = {};
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
alert(`${menu.height} and ${menu.width}`); // после
