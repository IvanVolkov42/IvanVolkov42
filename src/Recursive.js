//task 1 Сумма числе до данного
function sumCycle(n) {
    let sum = 0;
    for( let i=1;i<=n;i++) {
        sum += i;
    }
    return sum;
}
//alert(sumCycle(100));
// через рекурсию
function sumTo(n) {
    if (n === 1) {
        return 1;
    } else {
        return n + sumTo(n-1);
    }
}
//alert(sumTo(100));
// через арифметичесую прогрессию
function sumProg(n) {
    return n*((1 + n) / 2);

}

// task 2 Факториал
function factorial (n) {
    if( n == 1) {
        return 1;
    } else {
        return n * factorial(n-1);
    }
}
//alert(factorial(4));
// task 3 Фибоначчи
function fib(n) {
    return n <= 1 ? n : fib(n-1) + fib(n-2);
}
//alert(fib(7));
