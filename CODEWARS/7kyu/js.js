// Задача
// При наличии квадрата ваша задача состоит в том, чтобы изменить порядок элементов на обеих его самых длинных диагоналях.matrix

// Самые длинные диагонали квадратной матрицы определяются следующим образом:

// первая по длине диагональ идет от левого верхнего угла к правому нижнему;
// Вторая по длине диагональ идет от правого верхнего угла к левому нижнему.
//     Пример
// Для матрицы

// 1, 2, 3
// 4, 5, 6
// 7, 8, 9
// На выходе должно быть:

// 9, 2, 7
// 4, 5, 6
// 3, 8, 1
// Вход / выход
// [input] 2D целочисленный массив matrix

// Ограничения целостности: 1 ≤ matrix.length ≤ 10, matrix.length = matrix[i].length, 1 ≤ matrix[i][j] ≤ 1000

// [output] 2D целочисленный массив

// Матрица с порядком элементов на самых длинных ее диагоналях перевернута.

///////
function reverseOnDiagonals(matrix) {
    const n = matrix.length;
    const firstDiagonal = [];  // Для первой диагонали (слева направо)
    const secondDiagonal = [];  // Для второй диагонали (справа налево)

    // Сохраняем элементы обеих диагоналей
    for (let i = 0; i < n; i++) {
        firstDiagonal.push(matrix[i][i]);
        secondDiagonal.push(matrix[i][n - 1 - i]);
    }

    // Переворачиваем элементы диагоналей
    firstDiagonal.reverse();
    secondDiagonal.reverse();

    // Заполняем матрицу обратно перевернутыми диагоналями
    for (let i = 0; i < n; i++) {
        matrix[i][i] = firstDiagonal[i];
        matrix[i][n - 1 - i] = secondDiagonal[i];
    }

    return matrix;
}

// Пример использования
const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

const result = reverseOnDiagonals(matrix);
console.log(result);