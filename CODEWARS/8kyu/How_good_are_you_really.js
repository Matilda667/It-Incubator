// В вашем классе был тест и вы его сдали. Поздравляю!
//
//     Но вы амбициозный человек. Вы хотите знать, лучше ли вы среднестатистический ученик в вашем классе.
//
//     Вы получаете массив с результатами тестов ваших сверстников. Теперь посчитайте среднее значение и сравните свой результат!
//
//     Возвращайтесь, если вам лучше, иначе!true false
//
// Заметка:
//     Ваши баллы не включаются в массив баллов вашего класса. Не забывайте о них при подсчете среднего балла!

// export function betterThanAverage(classPoints: number[], yourPoints: number): boolean {
//     // Считаем сумму всех баллов в классе
//     const totalPoints = classPoints.reduce((acc, points) => acc + points, 0);
//
//     // Вычисляем среднее значение
//     const average = totalPoints / classPoints.length;
//
//     // Сравниваем ваши баллы со средним
//     return yourPoints > average;
//
// }
export function betterThanAverage(classPoints, yourPoints) {
    const totalPoints = classPoints.reduce((acc, points) => acc + points, 0);
    const average = totalPoints / classPoints.length;
    return yourPoints > average; // возвращает true или false
}