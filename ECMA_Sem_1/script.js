// которая принимает два массива и возвращает новый массив, содержащий все элементы из обоих массивов. Используйте spread оператор для объединения массивов.mergeArrays([1, 2, 3], [4, 5, 6]);

// function mergeArrays(array1, array2){
//     const array = [...array1, ...array2];
//     return array;
// }
// const mergeArrays = (arr1, arr2) => [...arr1, ...arr2];
// const array1 = [1,2,3];
// const array2 = [4,5,6];
// console.log(mergeArrays(array1,array2));

// ​​принимает любое количество аргументов и возвращает новый массив, содержащий только уникальные значения. Используйте rest оператор для сбора всех аргументов в массив а затем filter для определения

// ​​removeDuplicates(1, 2, 3, 2, 4, 1, 5); // Ожидаемый результат: [1, 2, 3, 4, 5]

// function removeDuplicates(...args){
//     let uniqArray = [];

//     for (let i = 0; i < args.length; i++) {
//         if (uniqArray.indexOf(args[i]) === -1) {
//             uniqArray.push(args[i]);
//         }
//     }
//     return uniqArray;
// }

// console.log(removeDuplicates(1, 2, 3, 2, 4, 1, 5));

// -------------------------------------------------------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------------------------------------------------------

// Напишите функцию getEvenNumbers, которая принимает массив
// чисел в качестве аргумента и возвращает новый массив,
// содержащий только четные числа.

// const getEvenNumbers = (...args) => {
//     const newArr = [];
//     for (let i = 0; i < args.length; i++) {
//         if (args[i] % 2 === 0) {
//             newArr.push(args[i])
//         }
//     }
//     return newArr;
// }
// console.log(getEvenNumbers(1,2,3,4,5,6));

// 2. Задача: Напишите функцию calculateAverage, которая принимает
// массив чисел в качестве аргумента и возвращает среднее значение
// этих чисел.
// const array1 = [1, 2, 3, 4, 5, 6, 7, 8]

// const calculateAverage = (arr) => {
//     const result = arr.reduce((sum, current) => sum + current, 0);
//     return result;
// }
// console.log(calculateAverage(array1));

// 3. Напишите функцию capitalizeFirstLetter, которая принимает строку в
// качестве аргумента и возвращает новую строку, в которой первая
// буква каждого слова является заглавной.

// const capitalizeFirstLetter = (str = String) => {
//     return str.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(' ');
// };
// console.log(capitalizeFirstLetter('в качестве аргумента и возвращает новую строку, в которой первая буква каждого слова является заглавной.'));
// -------------------------------------------------------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------------------------------------------------------

// Напишите функцию createCalculator, которая принимает начальное
// значение и возвращает объект с двумя методами: add и subtract.
// Метод add должен увеличивать значение на переданное число, а
// метод subtract должен уменьшать значение на переданное число.
// Значение должно быть доступно только через методы объекта, а не
// напрямую.

function createCalculator(initialValue) {
    let tempNumber = initialValue;
    return {
        add: (number) => tempNumber += number,
        subtract: (namber) => tempNumber -= namber,
        getNumber: () => tempNumber
    }
}
let calculate = createCalculator(5);
calculate.add(5);
console.log(calculate.getNumber());
calculate.subtract(100);
console.log(calculate.getNumber());

// -------------------------------------------------------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------------------------------------------------------

// 1. Напишите функцию createGreeting, которая принимает имя
// пользователя и возвращает функцию, которая будет выводить
// приветствие с использованием этого имени.
// // Пример использования:
// const greeting = createGreeting('John');
// greeting(); // Ожидаемый результат: "Hello, John!"

function createGreeting(userName){
    return function(){
        console.log(`hello, ${userName}`);
    }
};

const greeting = createGreeting('John');
greeting(); // Ожидаемый результат: "Hello, John!"

// -------------------------------------------------------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------------------------------------------------------

// Задача: Напишите функцию createPasswordChecker, которая
// принимает допустимую длину пароля в качестве аргумента и
// возвращает функцию для проверки введенного пароля.
// Возвращаемая функция должна принимать пароль и возвращать
// true, если его длина соответствует допустимой, и false в противном
// случае.
// // Пример использования:
// const isPasswordValid = createPasswordChecker(8);
// console.log(isPasswordValid('password')); // Ожидаемый результат:
// false
// console.log(isPasswordValid('secret')); // Ожидаемый результат: true

const createPasswordChecker = (validLength) => {
    return(pasword) => {
        return pasword.length === validLength
    };
};
const isPasswordValid = createPasswordChecker(8);
console.log(isPasswordValid('password')); // Ожидаемый результат:
false
console.log(isPasswordValid('secret')); // Ожидаемый результат: true




        // задание 5 №2

        // Напишите рекурсивную функцию sumDigits, которая принимает
        // положительное целое число в качестве аргумента и возвращает
        // сумму его цифр.

        function sumDigits(num) {
            // деелаем проверку если число < 10 значит оно состоит из одного знака и делить на 10 уже нечего, это является остановкой цикла
            if (num < 10) {
                return num;
            } else {
                // складываем остаток от делени числа num с вызовом функции sumDigit, в которое передается число уже поделенное на 10
                return (num % 10) + sumDigits(Math.floor(num / 10));
            }
        }
 
        // Пример использования:
        console.log(sumDigits(123)); // 6 (1 + 2 + 3)
        console.log(sumDigits(456789)); // 39 (4 + 5 + 6 + 7 + 8 + 9)