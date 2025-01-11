// Рассмотрите массив / список овец, в которых некоторые овцы могут отсутствовать на своем месте.Нам нужна функция, которая подсчитывает количество овец, присутствующих в массиве(true означает присутствующих).

//     Например

// [true, true, true, false,
// true, true, true, true,
// true, false, true, false,
// true, false, false, true,
// true, true, true, true,
// false, false, true, true]
// Правильный ответ будет .17

// Подсказка: Не забудьте проверить наличие плохих значений, таких как null / undefined

function countSheeps(sheep) {
    // Проверяем, что входные данные являются массивом
    if (!Array.isArray(sheep)) {
        return 0; // Если это не массив, возвращаем 0
    }

    // Используем метод filter для фильтрации только присутствующих овец
    return sheep.filter(s => s === true).length;
}

// Пример использования
const sheepArray = [
    true, true, true, false,
    true, true, true, true,
    true, false, true, false,
    true, false, false, true,
    true, true, true, true,
    false, false, true, true
];

console.log(countSheeps(sheepArray)); // Вывод: 17