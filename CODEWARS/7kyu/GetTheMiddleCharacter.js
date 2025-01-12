// Вам будет предоставлена непустая строка.Ваша задача состоит в том, чтобы вернуть средние символы строки.

// Если длина строки нечетная, верните средний символ.
// Если длина строки четная, возвращаем средние 2 символа.
//     Примеры:
// "test" -- > "es"
// "testing" -- > "t"
// "middle" -- > "dd"
// "A" -- > "A"

function getMiddle(str) {
    const length = str.length; // Получаем длину строки
    const midIndex = Math.floor(length / 2); // Находим индекс середины

  // Если длина строки четная, возвращаем два средних символа
    if (length % 2 === 0) {
    return str.substr(midIndex - 1, 2);
} else {
    // Если длина строки нечетная, возвращаем один средний символ
    return str[midIndex];
}
}
// Примеры использования:
console.log(getMiddle("test"));      // "es"
console.log(getMiddle("testing"));   // "t"
console.log(getMiddle("middle"));    // "dd"
console.log(getMiddle("A"));         // "A"