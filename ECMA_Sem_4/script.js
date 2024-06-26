// Создайте функцию delayedMessage(message, delay), которая принимает аргументы message (строка) и delay (число). Функция должна выводить заданное сообщение в консоль через указанную задержку.
// Вызовите функцию delayedMessage() три раза с разными сообщениями и задержками. Например:
// После вызова всех функций delayedMessage(), добавьте сообщение вида "Конец программы" с помощью console.log().

const delayedMessage = (message, delay) => {
    setTimeout(() => {
        console.log(`${message}`);
    }, delay);
};

delayedMessage("Сообщение 1", 2000)
delayedMessage("Сообщение 2", 1000)
delayedMessage("Сообщение 3", 3000)

// У вас есть список задач, которые необходимо выполнить в определенном порядке. Каждая задача должна быть выполнена через определенный промежуток времени, заданный в миллисекундах. Вам необходимо написать функцию, которая принимает список задач и интервал времени, а затем выполняет каждую задачу через определенный промежуток времени.

const tasks = [
{ name: 'task 1', time: 1000 },
{ name: 'task 2', time: 2000 },
{ name: 'task 3', time: 3000 },
{ name: 'task 4', time: 4000 },
{ name: 'task 5', time: 5000 }
];

const delayTask = (task) => {
    task.forEach(element => {
        setTimeout(() => {
           console.log(`${element.name}`); 
        }, element.time);
    });
}
delayTask(tasks);   


// Напишите программу, которая загружает данные с сервера с использованием функции fetch. Ваша задача — использовать предложенный шаблон запроса для получения данных и их обработки.

// Создайте функцию, которая отправляет запрос к серверу, используя fetch. Адрес сервера для запроса: https://api.randomdatatools.ru/?count=5 .
// В функции реализуйте обработку промиса, возвращаемого fetch. Используйте метод .then() для обработки ответа сервера.
// Проверьте свойство response.ok.
// Добавьте обработку ошибок с помощью метода .catch(). Выведите сообщение об ошибке в консоль, если в процессе выполнения запроса или обработки данных возникли проблемы.

fetch("https://api.randomdatatools.ru/?count=5")
.then((responce) => {
    return responce.json();
})
.then((data) => {
    data.forEach(element => {
        console.log(`${element.FirstName}`);
    });
})

.catch(error => {
console.error("There has been a problem with your fetch operation:", error);
});


// Разработайте простой веб-интерфейс для отображения списка пользователей, получаемого с сервера. Вам необходимо отобразить имена пользователей и их email-адреса.
// Используйте функцию fetch для отправки GET-запроса к https://jsonplaceholder.typicode.com/users . Этот запрос вернет JSON-массив объектов пользователей.
// В обработчике .then() преобразуйте полученный ответ в JSON.
// После успешного получения и преобразования ответа в JSON, отобразите на странице список пользователей. Для каждого пользователя покажите его имя и email. Для отображения можно использовать любой HTML-элемент, например, ul для списка и li для элементов списка.
// Добавьте базовую обработку ошибок, чтобы в случае неудачного запроса на странице отображалось сообщение об ошибке.

fetch("https://jsonplaceholder.typicode.com/users")
.then((responce) => {
    return responce.json();
})
.then((data) => {
    const divEl = document.querySelector('.box');
    data.forEach(element => {
        divEl.insertAdjacentHTML('beforeend', `
        <ul>
            <li>${element.name}</li>
            <li>${element.email}</li>
        </ul>
        `)
    });
})