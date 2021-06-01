//task 1 уникальные элементы массива
function unique(arr) {
    return Array.from(new Set(arr));
}
let values = ["Hare", "Krishna", "Hare", "Krishna",
    "Krishna", "Krishna", "Hare", "Hare", ":-O"
];
alert(unique(values));
// task 2
function aClean (arr) {
    let map = new Map();
    for (let word of arr) {
        let sorted = word.toLowerCase().split("").sort().join("");
    map.set(sorted,word);
    }
    return Array.from(map.values());
}
// task 3
