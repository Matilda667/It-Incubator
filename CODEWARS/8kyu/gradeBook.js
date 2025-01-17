// Книга оценок
// Дополните функцию так, чтобы она находила среднее значение из трех переданных ей оценок и возвращала буквенное значение, связанное с этой оценкой.

// Числовой балл Буквенная оценка
// 90 <= оценка <= 100 'A'
// 80 <= оценка < 90 'B'
// 70 <= оценка < 80 'C'
// 60 <= оценка < 70 'D'
// 0 <= оценка < 60 'F'
// Все проверяемые значения находятся в диапазоне от 0 до 100. Нет необходимости проверять отрицательные значения или значения, превышающие 100.

// Solution
function getGrade(s1, s2, s3) {
    // Вычисляем среднее значение оценок
    const average = (s1 + s2 + s3) / 3;

    // Возвращаем буквенную оценку в зависимости от среднего значения
    if (average >= 90 && average <= 100) {
        return 'A';
    } else if (average >= 80) {
        return 'B';
    } else if (average >= 70) {
        return 'C';
    } else if (average >= 60) {
        return 'D';
    } else {
        return 'F';
    }
}