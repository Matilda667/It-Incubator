// Справочная информация
// Когда мы используем сокращатель URL ?
//     Сокращателю URL присваивается длинный URL - адрес, который затем преобразуется в более короткий.Оба URL - адреса хранятся в базе данных.Важно, чтобы каждому длинному URL был присвоен уникальный короткий URL.

// Если пользователь затем вызывает короткий URL, база данных проверяется, какой длинный URL принадлежит этому короткому URL, и вы перенаправляетесь на исходный / длинный URL.

// Важное примечание: Некоторые URL - адреса, такие как As, используются очень часто.Может случиться так, что два пользователя захотят сократить один и тот же URL, поэтому вам придется проверить, не был ли этот URL сокращен ранее, чтобы сэкономить память в вашей базе данных.www.google.com

// Задача
// Напишите класс с двумя методами, и shortenredirect

// Сократитель URL - адресов
// Напишите метод, который получает длинный URL и возвращает короткий URL, начинающийся с, состоящий только из(и одной точки и одной косой черты) и максимальной длины.shortenshort.ly / lowercase letters13

// Примечание: это не допустимый короткий URL.short.ly /

//     URL перенаправления
// Напишите метод, который получает сокращенный URL и возвращает соответствующий длинный URL.redirect

// Производительность
// Есть случайные тесты.Вам не нужен сложный алгоритм для решения этой каты, но каждый раз перебирать всю базу данных, чтобы проверить, использовался ли ранее URL - адрес, или генерировать короткие URL - адреса на основе случайности, не пройдет.475_000
//////////
class UrlShortener {
    constructor() {
        this.urlMap = new Map();
        this.baseUrl = 'short.ly/';
        this.urlCount = 0;
        this.alphabet = 'abcdefghijklmnopqrstuvwxyz';
    }

    // Метод для генерации короткого URL
    generateShortUrl() {
        let shortUrl = '';
        let count = this.urlCount;
        do {
            shortUrl = '';
            for (let i = 0; i < 4; i++) {
                shortUrl += this.alphabet[count % this.alphabet.length];
                count = Math.floor(count / this.alphabet.length);
            }
        } while (this.urlMap.has(shortUrl)); // Проверяем, не существует ли уже такой короткий URL
        this.urlCount++;
        return this.baseUrl + shortUrl;
    }

    // Метод для сокращения длинного URL
    shorten(longURL) {
        // Проверяем, существует ли уже длинный URL
        for (const [key, value] of this.urlMap) {
            if (value === longURL) {
                return key; // Возвращаем уже существующий короткий URL
            }
        }

        const shortURL = this.generateShortUrl();
        this.urlMap.set(shortURL, longURL); // Сохраняем в карте
        return shortURL;
    }

    // Метод для перенаправления с короткого URL на длинный URL
    redirect(shortURL) {
        return this.urlMap.get(shortURL); // Возвращаем длинный URL, если он существует
    }
}

/////// примеры тестов

// const chai = require("chai");
// const assert = chai.assert;
// chai.config.truncateThreshold = 0;

// const testFormat = string => {
//     assert.isTrue(/^short.ly\/[a-z]{1,4}$/.test(string), `"${string}" url format is incorrect: should starts with "short.ly/", with length<14 and only lowercase letters a the end.`);
// }

// describe("Should pass all of these", function () {
//     it("Testing two different URLs", function () {
//         const urlShortener = new UrlShortener();
//         let shortUrl1 = urlShortener.shorten("https://www.codewars.com/kata/5ef9ca8b76be6d001d5e1c3e");
//         testFormat(shortUrl1);
//         let shortUrl2 = urlShortener.shorten("https://www.codewars.com/kata/5efae11e2d12df00331f91a6");
//         testFormat(shortUrl2);
//         assert.equal(urlShortener.redirect(shortUrl1), "https://www.codewars.com/kata/5ef9ca8b76be6d001d5e1c3e");
//         assert.equal(urlShortener.redirect(shortUrl2), "https://www.codewars.com/kata/5efae11e2d12df00331f91a6");
//     });
//     it("Testing same URLs", function () {
//         const urlShortener = new UrlShortener();
//         let shortUrl1 = urlShortener.shorten("https://www.codewars.com/kata/5ef9c85dc41b4e000f9a645f");
//         testFormat(shortUrl1);
//         let shortUrl2 = urlShortener.shorten("https://www.codewars.com/kata/5ef9c85dc41b4e000f9a645f");
//         testFormat(shortUrl2);
//         assert.equal(shortUrl1, shortUrl2, "Should work with same long URLs");
//         assert.equal(urlShortener.redirect(shortUrl1), "https://www.codewars.com/kata/5ef9c85dc41b4e000f9a645f");
//     });
// });