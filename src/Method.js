// task 1 калькулятор
let calculator = {
    read() {
        this.a = +prompt("Введите 1 число");
        this.b = +prompt("Введите 2 число");
    },
    sum() {
        return (this.a + this.b);
    },
    mul() {
        return (this.a * this.b);
    }
};
calculator.read();
alert (` Сумма введеных чисел равна = ${calculator.sum()}`);
alert (` Произведение введеных чисел равно = ${calculator.mul()}`);
// task 2 Лестница
let ladder = {
    step: 0,
    up() {
        this.step++;
        return this;
    },
    down() {
        this.step--;
        return this;
    },showStep: function () {
        alert( this.step);
        return this;
    }
};
ladder.up().up().down().up().showStep();
// task 3 Калькулятор через конструктор
function Calculator () {
    this.read = function () {
        this.a = +prompt("Введите 1 число");
        this.b = +prompt("Введите 2 число");
    };
    this.sum = function () {
        return (this.a + this.b);
    };
    this.mul = function () {
        return (this.a * this.b);
    };
}
let calculator = new Calculator();
calculator.read();
alert (` Сумма введеных чисел равна = ${calculator.sum()}`);
alert (` Произведение введеных чисел равно = ${calculator.mul()}`);
// task 4 Accumulator
function Accumulator (startingValue) {
    this.value = startingValue;
    this.readValue = function () {
        this.value += +prompt(`Сколько прибавить к ${userValue} ?`);
    };
}
let userValue = +prompt("Введите число")
let accumulator = new Accumulator(userValue);
accumulator.readValue();
accumulator.readValue();
alert(accumulator.value);
