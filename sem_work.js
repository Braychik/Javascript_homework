// 1. Создайте массив с элементами 1, 2, 3.
// Выведите на экран каждый из этих элементов.

// const elements = [1, 2, 3];

// console.log(elements[0]);
// console.log(elements[1]);
// console.log(elements[2]);

// 2. Создайте массив с произвольными элементами.
// Выведите на экран количество элементов в этом массиве.

// const elements = [1, 4, "text", true];

// console.log(elements.length);

// 3. Создайте массив с элементами 'a', 'b', 'c'. Запишите вместо первого элемента
// число 1, вместо второго - 2, вместо третьего - 3.

// const elm = ['a', 'b', 'c'];
// console.log(elm);

// elm[0] = 1;
// elm[1] = 2;
// elm[2] = 3;

// console.log(elm);

// 1. Создайте массив с элементами 1, 2 и 3. С помощью оператора ++ увеличьте
// каждый элемент массива на единицу.

// const elm = [1, 2, 3];
// console.log(elm);

// elm[0]++;
// elm[1]++;
// elm[2]++;

// console.log(elm);

// 2. Узнайте длину следующего массива и объясните почему такое значение:

// ```
// const arr = [];
// arr[3] = 'a';
// arr[8] = 'b';

// console.log(arr);
// ```

// 3. Пусть дан такой массив: `[1, 2, 3]`. Добавьте ему в конец элементы 4 и 5.

// const arr = [1, 2, 3];

// arr.push(4);
// arr.push(5);
// arr.push(5, 6, 7, 8,);

// console.log(arr);

// 4. Создайте произвольный массив из 5 элементов, удалите из него два элемента.
// Проверьте, какое станет значение свойства length после этого.

// const arr =[];

// for (let index = 0; index < 5; index++) {
//     arr.push(Math.floor(Math.random() * 100));
// }
// console.log(arr);
// console.log(arr.length);
// arr.pop();
// arr.pop();
// console.log(arr);
// console.log(arr.length);

// 1. С помощью цикла for выведите в консоль числа от 11 до 33.

// for (let index = 11; index < 33; index++) {
//     console.log(index);
// }

// 2. С помощью цикла for выведите в консоль нечетные числа в промежутке от 1
// до 100 включительно.

// for (let index = 1; index < 101; index++) {
//     if (index % 2 !== 0) {
//         console.log(index);
//     }
// }

// 2 вариант
// for (let index = 1; index < 101; index += 2) {
//     console.log(index);
// }

// 3. С помощью цикла for выведите в консоль числа от 100 до 0.

// for (let index = 100; index > 0; index--) {
//     console.log(index);
// }

// 4. Создать переменную с заданным числом. Умножайте число на 3 столько раз,
// пока результат умножения не станет больше 1000. Какое число получится?
// Посчитайте количество итераций, необходимых для этого.

// const num = 105;
// let count = 0;

// for (let index = num; index <= 1000; index *= 3) {
//     // console.log(index);
//     count++;
// }
// console.log(count);

// 1. Создать массив `[2, 5, 9, 15, 1, 4]`.
// Выведите в консоль те элементы массива, которые больше 3-х, но меньше 10.

// const arr = [2, 5, 9, 15, 1, 4];

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] > 3 && arr[i] < 10) {
//     console.log(arr[i]);
//   }
// }

// 2. Найдите сумму четных чисел от 2 до 100.

// let res = 0;

// for (let i = 2; i < 100; i += 2) {
//     res = res + i;
//     console.log(res);
// }
// console.log(res);

// 3. Создать массив `[2, 5, 9, 3, 1, 4]`.
// Найдите сумму элементов этого массива.

// let array = [2, 5, 9, 3, 1, 4];
// let res = 0;

// невозможно прервать, break не работает, перебираем только весь массив.
// array.forEach((element, i) => { - можем получать индексы

// array.forEach(element => {
//     res = res + element;
// });
// console.log(res);

// FORof
// получаем ЗНАЧЕНИЯ
// elm - константа для итерации
// break можно использовать
// перебирет все значения массива.
// for (const elm of array) {
//     res = res + elm;
// }
// console.log(res);

// FORin
// получаем i индекс
// for (const i in array) {
//     res = res + array[i];
// }
// console.log(res);

// 4. С помощью цикла сформируйте строку '-1-2-3-4-5-6-7-8-9-'.

// let line = '-';

// for (let i = 1; i < 10; i++) {
//     line = line + i + '-';
// }
// console.log(line);

// 5. Создать массив `[2, 5, 9, 0, 3, 1, 4]`.
// Запустите цикл, который будет по очереди выводить элементы этого массива в
// консоль до тех пор, пока не встретится элемент со значением 0. После этого
// цикл должен завершить свою работу.

// let array = [2, 5, 9, 0, 3, 1, 4];

// for (let i = 0; i < array.length; i++) {
//     if (array[i] === 0) {
//         break;
//     }
//     console.log(array[i]);
// }

// Задание 5
// 1. Создать массив из 10 случайных чисел от 0 до 100 включительно.
// Наобходимо вывести в консоль все числа, которые делятся и на 2, и на 3.

// const arr =[];

// for (let i = 0; i < 10; i++) {
//     arr.push(Math.floor(Math.random() * 100));
// }

// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 6 === 0) {
//         console.log(arr[i]);
//     }
// }

// 2. Дан массив: `[1, 2, 3, 2, 4, 3, 5, 6, 3, 2, 3]`. Подсчитайте количество
// цифр 3 в этом массиве.

// let arr = [1, 2, 3, 2, 4, 3, 5, 6, 3, 2, 3];
// let count = 0;

// arr.forEach(element => {
//     if (element === 3) {
//         count++;
//     }
// });
// console.log(count);

// 4. Дан массив: `[1, 2, 3, 4, 5]`.
// С помощью метода splice преобразуйте массив в следующий: [1, 4, 5]
// splice изменяет текущий массив

//  в константе нет массива, есть только ссылка где он лежит в памяти, ссылка остается не изменной
// нельзя присвоить arr другой массиы

// const arr = [1, 2, 3, 4, 5];

// // let res = arr.splice(1, 2);
// let res = arr.splice(1, 2);
// console.log(arr);

// задание со *
// const arr = [15, 95, 63, 58, 25];

// filter - вернет новый массив

// const array = arr.filter((element) => {
//   if (element > 25) {
//     return true;
//   }
//   return false;
// });

// const array = arr.filter((element) => {
//   return element > 25;
// });

// const array = arr.filter((element) => element > 25);
// console.log(array);

// метод filter
// (method) Array<number>.filter(predicate: 
// (value: number, index: number, array: number[]) => unknown, thisArg?: any): number[] (+1 overload)