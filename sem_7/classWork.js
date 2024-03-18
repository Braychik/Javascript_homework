// Дан блок, внутри него необходимо создать элемент div с классом item, разместить текст “Элемент внутри” и задать стили
// Цвет текста синий
// Рамка сплошная черная
// Цвет фона #f8f8f8
// Внутренний отступ 16px
// Добавить данному блоку класс item_1 (использовать setAttribute)

// const block = document.querySelector('.block');
// const newDiv = document.createElement('div');

// block.appendChild(newDiv);

// newDiv.setAttribute('class', 'item');
// newDiv.textContent = 'Элемент внутри';
// newDiv.style.color = 'blue';
// newDiv.style.border = '1px solid black';
// newDiv.style.backgroundColor = '#f8f8f8';
// newDiv.style.padding = '16px';

// newDiv.setAttribute('class', 'item_1');

// // Дан код
// // <div class="elem">
// //   <img src="photo.png" alt="photo">
// //   <div class="content">
// //     <h2 class="heading">Lorem, ipsum dolor.</h2>
// //     <p class="text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae, ea!</p>
// //   </div>
// // </div>

// // Необходимо с помощью querySelector найти параграф с классом text
// // Вывести в консоль соседний элемент h2
// // Вывести в консоль родительский элемент content
// // Вывести в консоль картинку
// // Вывести в консоль родительский элемент elem

// const par = document.querySelector('.text');

// console.log(par.previousElementSibling);
// console.log(par.parentNode);
// console.log(par.parentNode.previousElementSibling);
// console.log(par.parentNode.parentNode);

// {
// 	/* <div class="item">
//   <div class="elem">
//     <div class="info">
//       <h2 class="subtitle">Lorem, ipsum dolor.</h2>
//     </div>
//   </div>
// </div> */
// }

// // С помощью querySelector найти элемент h2  и вывести в консоль всех его родителей

// const subtitle = document.querySelector('.subtitle');

// console.log(subtitle.parentNode);
// console.log(subtitle.parentNode.parentNode);
// console.log(subtitle.parentNode.parentNode.parentNode);

// {
// 	/* <form action="#">
//   <input type="text">
//   <button class="btn">Отправить</button>
// </form>
// Дано поле ввода и кнопка отправить, необходим реализовать функционал, если пользователь нажимает на кнопку отправить, а поле ввода пустое, то под полем ввода и кнопкой должен появиться заголовок h2 с текстом вы не заполнили поле ввода
// Цвет у рамки сделать красным */
// }

// const input = document.querySelector('input');
// const btn = document.querySelector('.btn');
// let h1 = document.querySelector('h1');

// btn.addEventListener('click', (e) => {
// 	e.preventDefault();
// 	if (input.value.trim() === '') {
// 		if (!h1) {
// 			h1 = document.createElement('h1');
// 			input.parentElement.insertAdjacentElement('afterend', h1);
// 		}
// 		h1.textContent = 'Вы не заполнили поле ввода';
// 		input.style.border = '4px solid red';
// 	} else {
// 		if (h1) {
// 			h1.remove();
// 			input.style.border = '1px solid black';
// 		}
// 	}
// });

