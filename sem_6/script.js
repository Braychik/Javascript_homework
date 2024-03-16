// 1. Найти по id, используя getElementById, элемент с id равным "super_link" и вывести этот элемент в консоль.

// const link = document.getElementById("super_link");
// console.log(link);


// 2. Внутри всех элементов на странице, которые имеют класс "card-link", поменяйте текст внутри элемента на "ссылка".

// const link = document.querySelectorAll(".card-link");
// console.log(link);
//     link.forEach(element => {
//         link.textContent = "ссылка"
//     });


// 3. Найти все элементы на странице с классом "card-link", которые лежат в элементе с классом "card-body" и вывести полученную коллекцию в консоль.

// const cardBody = document.querySelectorAll(".card-body .card-link");
// console.log(cardBody);


// 4. Найти первый попавшийся элемент на странице у которого есть атрибут data-number со значением 50 и вывести его в консоль.

// const element = document.querySelector('[data-number="50"]');
// console.log(element);

// 5. Выведите содержимое тега title в консоль.
// const title = document.querySelector('.card-title').textContent;
// console.log(title);


// 6. Получите элемент с классом "card-title" и выведите его родительский узел в консоль.

// const parentTitle = document.querySelector('.card-title').parentNode;
// console.log(parentTitle);


// 7. Создайте тег p`, запишите внутри него текст "Привет" и добавьте созданный тег в начало элемента, который имеет класс "card".

// const p = document.createElement('p');
// p.textContent = 'Привет';
// document.querySelector('.card').prepend(p);

/*
8. Удалите тег h6 на странице.
 */

// document.querySelector('h6').remove();