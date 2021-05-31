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
