// У вас есть приложение для группового чата, но кто онлайн! ?
//     Вы хотите показать своим пользователям, кто из их друзей находится в сети и доступен для общения!
// После ввода массива объектов, содержащего имена пользователей, статус и время с момента последнего действия(в минутах), создайте функцию для определения того, кто является, и.onlineofflineaway
// Если кто - то есть, но его было более 10 минут назад, он должен быть рассмотрен.onlinelastActivityaway
// Входные данные имеют следующую структуру:
// [{
//     username: 'David',
//     status: 'online',
//     lastActivity: 10
// }, {
//     username: 'Lucy',
//     status: 'offline',
//     lastActivity: 22
// }, {
//     username: 'Bob',
//     status: 'online',
//     lastActivity: 104
// }]
// Соответствующий вывод должен выглядеть следующим образом:
// {
//     online: ['David'],
//         offline: ['Lucy'],
//             away: ['Bob']
// }
// Если, например, нет пользователей, то вывод должен выглядеть следующим образом: online
// {
//     offline: ['Lucy'],
//         away: ['Bob']
// }
// username всегда будет иметь значение, status всегда будет либо или(перечисление UserStatus в C#), а lastActivity всегда будет.string'online''offline'number >= 0

// Наконец, если у вас нет друзей в вашем приложении для чата, входные данные будут пустым массивом.В этом случае необходимо вернуть пустой объект(пустой словарь в C#).[]{ }

const whosOnline = (friends) => {
    // Проверяем, есть ли друзья
    if (friends.length === 0) {
        return {}; // Возвращаем пустой объект, если нет друзей
    }

    // Инициализируем объект для хранения пользователей по категориям
    const result = {
        online: [],
        offline: [],
        away: []
    };

    // Проходим по каждому пользователю в массиве
    friends.forEach(friend => {
        const { username, status, lastActivity } = friend;

        // Проверяем статус пользователя
        if (status === 'online') {
            // Если пользователь онлайн и его активность была более 10 минут назад
            if (lastActivity > 10) {
                result.away.push(username); // Добавляем в away
            } else {
                result.online.push(username); // Добавляем в online
            }
        } else if (status === 'offline') {
            // Если пользователь оффлайн, добавляем его в offline
            result.offline.push(username);
        }
    });

    // Убедимся, что если нет онлайн пользователей, массив away не будет включен в результат
    if (result.online.length === 0 && result.away.length === 0) {
        delete result.away; // Удаляем ключ away, если он пустой
    }

    // Удаляем ключ online, если он пустой
    if (result.online.length === 0) {
        delete result.online; // Удаляем ключ online, если он пустой
    }

    return result;
};

// Пример использования функции
const friendsList = [
    { username: 'David', status: 'online', lastActivity: 10 },
    { username: 'Lucy', status: 'offline', lastActivity: 22 },
    { username: 'Bob', status: 'online', lastActivity: 104 }
];

console.log(whosOnline(friendsList));