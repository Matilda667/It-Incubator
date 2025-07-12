// Программное обеспечение для распознавания символов широко используется для оцифровки печатных текстов. Таким образом, тексты можно редактировать, искать и сохранять на компьютере.
//     Когда документы (особенно довольно старые, написанные на пишущей машинке) оцифровываются, программы распознавания символов часто допускают ошибки.
//     Ваша задача – исправить ошибки в оцифрованном тексте. Вам нужно будет справиться только со следующими ошибками:
//
// S неверно истолковывается как 5
// O неверно истолковывается как 0
// I неверно истолковывается как 1
// Тест-кейсы содержат цифры только по ошибке.

function correct(string)
{
    return string
        .replace(/5/g, 'S')   // заменяем все 5 на S
        .replace(/0/g, 'O')   // заменяем все 0 на O
        .replace(/1/g, 'I');  // заменяем все 1 на I
}

const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Tests", () => {
    it("test", () => {
        assert.strictEqual(correct("L0ND0N"),"LONDON");
        assert.strictEqual(correct("DUBL1N"),"DUBLIN");
        assert.strictEqual(correct("51NGAP0RE"),"SINGAPORE");
        assert.strictEqual(correct("BUDAPE5T"),"BUDAPEST");
        assert.strictEqual(correct("PAR15"),"PARIS");
    });
});