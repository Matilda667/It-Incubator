// Напишите функцию, которая принимает массив из 10 целых чисел (от 0 до 9), которая возвращает строку этих чисел в виде телефонного номера.
//
//     Пример
// createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"
// Возвращаемый формат должен быть правильным для выполнения этого задания.
//
//     Не забывайте о пробеле после закрывающих скобок!

function createPhoneNumber(numbers) {
    const areaCode = numbers.slice(0, 3).join('');
    const centralOffice = numbers.slice(3, 6).join('');
    const lineNumber = numbers.slice(6).join('');
    return `(${areaCode}) ${centralOffice}-${lineNumber}`;
}
console.log(createPhoneNumber([1,2,3,4,5,6,7,8,9,0]));