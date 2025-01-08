// Завершите решение так, чтобы оно перевернуло переданную в него строку.

// 'world'  => 'dlrow'
// 'word'   => 'drow'

function solution(str) {
    return str.split('').reverse().join('');
}
// Объяснение работы функции:
// str.split('') - разбивает строку на массив символов.
// reverse() - переворачивает массив символов.
// join('') - объединяет элементы массива обратно в строку.

// Примеры использования:
console.log(solution('world')); // 'dlrow'
console.log(solution('word'));  // 'drow'