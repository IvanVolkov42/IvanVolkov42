// task 1
let user = {
    name: "Василий Иванович",
    age: 35
};
let userJson =JSON.stringify(user);
let newUser = JSON.parse(userJson);

// task 2
let room = {
    number: 23
};
let meetup = {
    title: "Совещание",
    occupiedBy: [{name: "Иванов"}, {name: "Петров"}],
    place: room
};
room.occupiedBy = meetup;
meetup.itself = meetup;
alert(JSON.stringify(meetup,function replacer(key,value) {
    return (key != "" && value ==meetup) ? undefined : value;
} ));
