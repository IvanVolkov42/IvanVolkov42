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
