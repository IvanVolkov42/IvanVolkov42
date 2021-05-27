//1 task вывод четных числе от 2 до 10
for (let i = 2;i < 12;i++)
{
    if(i % 2 == 0)
    {
        alert(i);
    }

}
//2 task
let i = 0;
while(i < 3)
{
    alert( `number ${i} !` );
    i++;
}
//3 task
let UserNumber;
do
{
    UserNumber = prompt("Введите число",'0');

} while ( UserNumber <= 100 && UserNumber );
//task 4
let n = prompt("Введите n");
SimpleNumber:
for(let i = 2;i <= n;i++)
{
    for(let j = 2;j < i;j++)
    {
        if( i % j == 0)
        continue SimpleNumber;
    }
    alert(i);
}
