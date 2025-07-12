// Пит любит печь торты. У него есть несколько рецептов и ингредиентов. К сожалению, он не силен в математике. Можете ли вы помочь ему узнать, сколько тортов он мог бы испечь, учитывая его рецепты?
//
//     Напишите функцию , которая принимает рецепт (объект) и доступные ингредиенты (также объект) и возвращает максимальное количество тортов, которые Пит может испечь (целое число). Для простоты нет единиц измерения количества (например, 1 фунт муки или 200 г сахара — это просто 1 или 200). Ингредиенты, которые отсутствуют в объектах, можно считать 0.cakes()
//
// Примеры:
//
// // must return 2
//     cakes({flour: 500, sugar: 200, eggs: 1}, {flour: 1200, sugar: 1200, eggs: 5, milk: 200});
// // must return 0
// cakes({apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100}, {sugar: 500, flour: 2000, milk: 2000});

function cakes(recipe, available) {
    let minCakes = Infinity;

    for (let ingredient in recipe) {
        if (!available[ingredient]) return 0; // если ингредиента нет вовсе
        const possibleCakes = Math.floor(available[ingredient] / recipe[ingredient]);
        minCakes = Math.min(minCakes, possibleCakes);
    }

    return minCakes;
}

cakes({flour: 500, sugar: 200, eggs: 1},
    {flour: 1200, sugar: 1200, eggs: 5, milk: 200});
// => 2

cakes({apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100},
    {sugar: 500, flour: 2000, milk: 2000});
// => 0 (нет apples и oil)