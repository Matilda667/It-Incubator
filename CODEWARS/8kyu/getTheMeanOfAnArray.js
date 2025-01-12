// Это конец учебного года, судьбоносный момент вашего школьного отчета.Средние значения должны быть рассчитаны.Все студенты приходят к вам и умоляют рассчитать для них их средний показатель.Лёгкий! Вам просто нужно написать сценарий.

// Возвращает среднее значение данного массива, округленное в меньшую сторону до его ближайшего целого числа.

// Массив никогда не будет пустым.

function getAverage(marks) {
    // Суммируем все элементы массива
    const total = marks.reduce((acc, mark) => acc + mark, 0); //здесь используется функция reduce() массива, и стрелочная функция, обозначаемая с помощью => acc (сокращение от "accumulator" — аккумулятор) mark — это текущий элемент массива marks
    
    // Находим среднее значение
    const average = total / marks.length;
    // Округляем вниз
    return Math.floor(average);
}

// Пример использования
const marks = [3, 4, 5, 2, 4]; // Пример массива оценок
const average = getAverage(marks);
console.log(average); // Вывод: 3