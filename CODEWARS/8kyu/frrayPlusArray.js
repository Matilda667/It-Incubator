// Я новичок в программировании и теперь хочу получить сумму двух массивов... Собственно сумма всех их элементов.Буду признателен за вашу помощь.

//     P.S.Каждый массив включает в себя только целые числа.Вывод — это тоже число.

function arrayPlusArray(arr1, arr2) {
    // Сначала суммируем элементы первого массива
    const sum1 = arr1.reduce((acc, curr) => acc + curr, 0);

    // Затем суммируем элементы второго массива
    const sum2 = arr2.reduce((acc, curr) => acc + curr, 0);

    // Возвращаем общую сумму
    return sum1 + sum2;
}
// пример
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];

const result = arrayPlusArray(array1, array2);
console.log(result); // Вывод: 21
