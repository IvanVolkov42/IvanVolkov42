//task 1 Создание даты
let febDate = new Date (2012,1,20,3,12);
alert(febDate);

// task 2 Показ дня недели
function getWeekDay(date) {
    let d = ["ВС", "ПН", "ВТ", "СР", "ЧТ", "ПТ", "СБ"];
    return d[date.getDay()];
}
let date = new Date (2012,0,5);
alert(getWeekDay(date));

// task 3 Европейский день недели
function getLocalDat(date) {
    let d = ["ВС", "ПН", "ВТ", "СР", "ЧТ", "ПТ", "СБ"];
    let day = date.getDay();
    if (day == 0) {
        day = 7;
    }
    return d[day];
}
let date = new Date (2012,0,3);
alert(getLocalDat(date));

//task 4 Функция отображения дня от заданного дня
function getDateAgo(date,days) {
    let dateCopy = new Date(date);
    dateCopy.setDate(date.getDate() -days);
    return dateCopy.getDate();
}
let date = new Date(2015,0,2);
alert(getDateAgo(date,1));
alert(getDateAgo(date,2));
alert(getDateAgo(date,365));

//task 5 Последнее число месяца
function getLastDayOfMonth(year,month) {
    let date = new Date (year, month +1, 0);
    return date.getDate();
}
getLastDayOfMonth(2012,1);
alert(getLastDayOfMonth(2012,0));

//task 6 Сколько секунд до завтра
function getSecondsToTomorrow() {
    let now = new Date();
    let tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate() +1);
    let secDiff = tomorrow-now;
    return Math.round(secDiff / 1000);
}

// task 7 Сколько сегодня прошло секунд
function getSecondsToday () {
    let now = new Date();
    let today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    let secDiff = today-now;
    return Math.round(secDiff / 1000);
}

// task 8 Форматирование относительной даты
function formatDate(date) {
    let diff = new Date() - date;
    if (diff < 1000) {
        return "прямо сейчас";
    }
    let sec = Math.floor(diff/1000);
    if(sec < 60) {
        return sec + "сек.назад";
    }
    let min = Math.floor(diff/60000);
    if(min < 60) {
        return min + "мин.назад";
    }
    let d = date;
    d = [
        '0' + d.getDate(),
        '0' + (d.getMonth() + 1),
        '' + d.getFullYear(),
        '0' + d.getHours(),
        '0' + d.getMinutes()
    ].map(component => component.slice(-2));
    return d.slice(0,3).join('.') + ' ' + d.slice(3).join(':');

}
