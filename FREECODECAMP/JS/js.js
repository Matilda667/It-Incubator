let character = 'Hello';
console.log(character);
character = 'World'

//Step 13
let profession = "teacher";
console.log(profession);
let age;
console.log(age)

//Step 15
let count = 8;

//Step 16
let count = 8;
console.log(count + 1);

//Step 18
let rows = [];

//Step 19
let rows = ["Naomi", "Quincy", "CamperChan"];

//Step 20
let rows;
console.log(rows[0]);

//Step 21
//этот код присвоит число 25 второму элементу в массиве:
let array = [1, 2, 3];
array[1] = 25;
console.log(array); prints[1, 25, 3]

rows[2] = 10;
console.log(rows);

//Step 22
//получаем индекс последнего элемента в массиве
rows[rows.length - 1];

//Step 24
let cities = ["London", "New York", "Mumbai"];
console.log(cities)
cities[2] = "Mexico City";
console.log(cities)

//Step 26
//метод .push(). Он позволяет "засунуть" значение в конец массива.
let rows = ["Naomi", "Quincy", "CamperChan"];
rows.push("freeCodeCamp")
console.log(rows);

//Step 27
//метод .pop(). Он удаляет последний элемент из массива и возвращает его.
let rows = ["Naomi", "Quincy", "CamperChan"];
rows.push("freeCodeCamp");
console.log(rows);
let popped;
rows.pop()
console.log(popped);

//Шаг 28
//Назначьте существующий rows.push() новой отправленной переменной и зарегистрируйте ее.