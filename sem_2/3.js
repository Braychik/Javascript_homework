"use strict";

/*
Необходимо создать переменную dayNumber, в которую пользователь должен ввести 
целое число в интервале [1, 32).
Если пользователь ввел иное значение, необходимо вывести в консоль 
"Неверное значение".
Если пользователь ввел верное значение, в нужном диапазоне, то необходимо 
определить, в какую декаду месяца попадает это число и вывести сообщение в 
консоль: "Число N1 попадает в N2 декаду месяца.", где вместо N1 и N2 будут 
подставлены подходящие значения, которые мы получили.

Примечание: выражение [1, 32) означает от 1 включительно, до 32, не включая 
число 32.
*/

// const dayNumber = +prompt("Введите любое число месяца: ")
// if (dayNumber < 0 || dayNumber > 31) {
//     alert("Неверное значение")
// }else if (dayNumber > 0 && dayNumber <= 10) {
//     alert(`Число ${dayNumber} попадает в первую декаду месяца`)
// }else if (dayNumber > 10 && dayNumber <= 20) {
//     alert(`Число ${dayNumber} попадает во вторую декаду месяца`)
// }else if (dayNumber > 20 && dayNumber <= 31) {
//     alert(`Число ${dayNumber} попадает в третью декаду месяца`)
// }