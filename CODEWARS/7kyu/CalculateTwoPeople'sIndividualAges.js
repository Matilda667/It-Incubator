// Создайте функцию, которая принимает сумму и разницу в возрасте двух людей, вычисляет их индивидуальный возраст и возвращает пару значений (сначала самый старый возраст), если они существуют, или если:null/None{-1, -1} in C
//
// sum < 0
// difference < 0
// Любой из рассчитанных возрастов оказывается отрицательным

function getAges(sum, difference) {
    if (sum < 0 || difference < 0) return null;

    const older = (sum + difference) / 2;
    const younger = (sum - difference) / 2;

    if (older < 0 || younger < 0) return null;

    return [older, younger];
}

//test
const assert = require('chai').assert;

describe('Calculating Individual Ages ', function(){
    it ("it returns 14,10 when passed 24,4", function(){
        assert.deepEqual(getAges(24,4), [14,10]);
    });
    it ("it returns null when passed 63,-14", function(){
        assert.deepEqual(getAges(63,-14), null);
    });
});