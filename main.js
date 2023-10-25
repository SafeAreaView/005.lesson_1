"use strict"

// Створити скрипт який має визначити середнє арифметичне трьох чисел з насутпними умовами:

// отримати від користувача через три prompt три числа
// показати через alert середнє арифметичне цих чисел

let firstNum = +prompt('Enter first number');
let secondNum = +prompt('Enter second number');
let thirdNum = +prompt('Enter third number');

let average = (firstNum + secondNum + thirdNum) / 3;

alert (average);