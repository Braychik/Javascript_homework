// Задание 1:
 
// 1. Создайте объект с ключами от 1 до 7, в качестве значений содержащий имена 
// дней недели. Выведите на экран “Вторник”.

// const obj = {
//     '1': 'Понедельник',
//     '2': 'Вторник',
//     '3': 'Среда',
// };

// console.log(obj[2]);

// 2. Создайте объект user с ключами 'name', 'surname', 'age'. Выведите в консоль
// фамилию, имя и возраст одной строкой.

// const user = {
//     name: "Павел", 
//     surname: "Тарасов", 
//     age: 33,
// };

// console.log(`${user.name} ${user.surname} ${user.age}`);

// const user = {
//     name: "Павел", 
//     surname: "Тарасов", 
//     age: 33,
// };

// console.log(user);

// 3. Добавьте в объект user свойство отчество, которое пользователь должен 
// ввести с клавиатуры.

// const user = {
//     name: "Павел", 
//     secondName: prompt('enter sername: '),
//     surname: "Тарасов", 
//     age: 33,
// };

// console.log(`${user.name} ${user.secondName} ${user.surname} ${user.age}`);

// 4. Удалите свойство surname.

// const user = {
//     name: "Павел", 
//     secondName: prompt('enter sername: '),
//     surname: "Тарасов", 
//     age: 33,
// };

// delete user.surname;
// console.log(`${user.name} ${user.secondName} ${user.surname} ${user.age}`);


// Задание 2:
 
// 1. Создайте два массива: первый с названиями дней недели, а второй - с их 
// порядковыми номерами:

// const arrDay = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];
// const arrNum = [1, 2, 3, 4, 5, 6, 7];

// 2. С помощью цикла создайте объект, ключами которого будут названия дней, 
// а значениями - их номера.

// const obj = {};
// for (let i = 0; i < arrDay.length; i++) {
//     obj[arrNum[i]] = arrDay[i];
// }

// console.log(obj);

// 3. Создайте объект: `{x: 1, y: 2, z: 3}`. Переберите этот объект циклом и 
// возведите каждый элемент этого объекта в квадрат.

// const obj = {
//     x: 1, 
//     y: 2, 
//     z: 3,
// };

// for (const key in obj) {
// //       x   =     x=1 ** 2    меняем значение в объекте
// //       y   =     y=2 ** 2
// //       z   =     z=3 ** 2
//     obj[key] = obj[key] ** 2;
// }
// console.log(obj);

// невозмоно использовать с объектом  
// obj.forEach(element => {
//     element ** 2;
//     console.log(obj);
// });


// Задание 3:

// const obj = {
//     iodsuf: {
//       asd: 1,
//       zxc: {
//         khvxc: {
//           ncxvm: 10,
//         }
//       },
//       qwd: 3,
//     },
//     gerg: {
//       joij: {
//         shdjk: 99
//       },
//       kjn: 5,
//       iyu: 6,
//     },
//     xcnkv: {
//       oirje: 7,
//       iuhdv: 8,
//       nmbb: 9,
//     },
//     jgjgj: 34,
//   }

// Найдите сумму всех чисел, приведенного объекта.

// function summFunc(obj) {
//     let summ = 0;

//     // перебрать в объкте все свойства
//     for (const key in obj) {
//         if (typeof obj[key] === "number") {
//             summ = summ + obj[key];
//         } else {
//             summ += summFunc(obj[key]);
//         }
//     }
//     return summ;
// }

// console.log(summFunc(obj));


// Задание 4: 
 
// 1. Создайте объект riddle.
// 2. Добавьте свойства question со значениями(текст загадки) и 
// answer (ответ на загадку).
// 3. Создайте метод askQuestion который спрашивает у пользователя вопрос 
// question и сравнивает ответ с answer.
// В случае верного ответа, необходимо поздравить пользователя.
// В случае, если пользователь ответил неверно, необходимо подсказать, 
// подсказок может быть несколько.
// Если пользователь ответил неверно после всех подсказок, то в консоль 
// выводится текст: “вы проиграли”.

// const riddle = {
//     question: 'Зимой и летом одним цветом',
//     answer: 'ёлка',
//     help: ['Это зеленая', 'Это колючая'],
//     // повторяющийся метод if
//     userWin() {
//         const userAnsver = prompt(`Введите ответ на загадку: ${this.question}`);
//         if (userAnsver.toLowerCase() === this.answer) {
//             console.log('Поздравляем вы ответили верно!');
//             // уходим из цикла
//             return true;
//         } 
//     },
//     // создем метод 
//     askQuestion() {
//         if (this.userWin()) {
//             return   
//         }
//         console.log('Вы ответили не верно :(');
        
//         for (let i = 0; i < this.help.length; i++) {
//             console.log(this.help[i]);
//             if (this.userWin()) {
//                 return   
//             }
//         }  
//         console.log('Да ладно ? :(');
//     }
// };

// riddle.askQuestion();

/*

Задание требует дорешить, не дает 3 попытку, выдает сразу что проиграли на второй попытке

const riddle = {
        question: 'Зимой и летом одним цветом',
        answer: 'ёлка',
        help: ['Это зеленая', 'Это колючая'],
}

riddle.askQuestion = function() {
    let userAnswer;
    let i = 0;
    do {
        userAnswer = prompt(`${this.question}`);
        if (userAnswer.toLowerCase() === this.answer) {
            console.log('Вы выиграли');
            return
        } else {
            console.log(`Подумайте еще. Вот подсказка: ${this.help[i]}`);
            i++;
        }
    } while (userAnswer.toLowerCase() !== this.answer  && i < this.help.length + 1);
    console.log('Вы самое слабое звено!');
}
riddle.askQuestion();
*/

// 3 вариант Преподавателя

/*
const riddle = {
    question: 'Зимой и летом одним цветом',
    answer: 'ёлка',
    help: ['Это зеленая', 'Это колючая'],
}


riddle.askQuestion = function () {
    let userAnswer;
    let i = 0;
    do {
      userAnswer = prompt(`${this.question}`);
      if (userAnswer.toLowerCase() === this.answer) {
        console.log('Вы выиграли');
        return
      } if (i < this.help.length) {
        console.log(`Подумайте еще. Вот подсказка: ${this.help[i]}`);
        i++;
      } else {
        break;
      }
    } while (userAnswer.toLowerCase() !== this.answer);
    console.log('Вы самое слабое звено!');
  }
  riddle.askQuestion();
  */