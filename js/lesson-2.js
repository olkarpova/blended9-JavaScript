// Створіть масив styles з елементами 'jazz' і 'blues'
// Додайте до кінця масиву елемент 'rock-n-roll' за допомогою відповідного методу масивів
// Знайдіть елемент 'blues' у масиві та замініть його на 'classic', використовуючи JavaScript-код

// Напишіть функцію logItems(array), яка приймає масив як аргумент
// і виводить у консоль кожен його елемент у форматі:
// "<номер елемента> - <значення елемента>".
// Використайте цикл for для перебору елементів масиву.
// Нумерація елементів повинна починатися з 1 (а не з 0).

// const styles = ["jazz", "blues"];
// styles.push("rock - n - roll");

// for (let i = 0; i < styles.length; i++){
//     if (styles[i] === "blues") {
//         styles[i]= "classic"
//     }
// }
// function logItems(arr) {
//     for (let i = 0; i < arr.length; i++){
//         console.log(`${i+1} - ${arr[i]}`)
//     }
// }
// logItems(styles);

// Напишіть функцію checkLogin(array), яка:
// Приймає масив логінів як аргумент.
// Запитує ім'я користувача через prompt.
// Перевіряє, чи є введене ім'я у переданому масиві.
// Якщо ім'я є в масиві – виводить повідомлення через alert: "Welcome, <name>!"
// Якщо ім'я відсутнє – виводить повідомлення: "User not found".

// const logins = ["Peter", "John", "Igor", "Sasha"];

// function checkLogin(array) {
//     let name = prompt("Enter your login:");
//     for (let i = 0; i < array.length; i++){
//         if (array[i] === name) {
//             alert(`Welcome, ${name}!`);
//         }  
//     }
//     alert("User not found");
// }
// const logins = ["Peter", "John", "Igor", "Sasha"]
// checkLogin(logins);

// sergii:
// const logins = ["Peter", "John", "Igor", "Sasha"]
// function checkLogin(arr) {
//   const userName = prompt('Enter your name', '');
//   if (userName && logins.includes(userName)) {
//     alert(`Welcome, ${userName}!`);
//   } else {
//     alert('User not found');
//   }
// }
// Kateryna
// function checkLogin(array) {
//     let userName = prompt("Enter your login:");
//     if (array.includes(userName)) {
//         alert(`Welcome, ${userName}!`);
//     } else {
//         alert(`User not found`);
//     }
// }
// checkLogin(logins);

// TASK 3
// Напишіть функцію caclculateAverage(),
// яка приймає довільну кількість
// аргументів і повертає їхнє середнє значення.
// Додайте перевірку, що аргументи - це числа.
// function calculateAverage(...numbers) {
//     let sum = 0;
//     let count = 0;
//     for (const number of numbers) {
//         if (typeof number === "number" && !isNaN(number)) {
//             sum += number;
//             count += 1
            
//         } 
//     }
//     if (count === 0) {
//         return 0;
//     }
//     return sum / count;
// }
// console.log (calculateAverage(1,"kkkkk",3,4,5,6,7))

// task 4
// Напишіть функцію, яка сумуватиме сусідні числа 
// і пушитиме їх в новий масив.

// const someArr = [22, 11, 34, 5, 12, 13, 14, 15];

// уточнення: складати необхідно перше число з другим, потім друге - з третім, 
// третє - з четвертим і так до кінця.
// В результаті функція має повертати масив [33, 45, 39, 17, 25, 27, 29].

// function someNeighborsArr(...numbers) {
//     let newArr = []; 
//     for (let i = 0; i < numbers.length-1; i ++) {
//         newArr.push(numbers[i]+numbers[i+1])
//     }
//     return newArr;
// }
// console.log(array(someArr))
// const someArr = [22, 11, 34, 5, 12, 13, 14, 15];

// task 6 ????
// Напишіть функцію findLongestWord(string), яка 
// приймає довільний рядок, що складається лише зі слів, розділених
// пробілами (параметр string), і повертатиме найдовше слово у реченні.

// Скористайтесь цим прикладом виклику функції для перевірки її роботи:
// console.log(findLongestWord("London is the capital of Great Britain")); // 'capital'
// function findLongestWord(string){}

// Oleksandr
// 15:58
// function findLongestWord(string) {
//     const createNewArray = string.split(" ");
//     let longestWord = createNewArray[0];
//     for (let i = 0; i < createNewArray.length; i += 1) {
//         if (createNewArray[i].length > longestWord.length) {
// longestWord = createNewArray[i]
//         }
//   }
//   return longestWord
// }

// console.log(findLongestWord("London is the capital of Great Britain")); // 'capital'



// TASK 10
// Напишіть функцію calcTotalPrice(fruits, fruitName),
// яка приймає массив об'єктів (fruits) і рядок з назвою фрукта (fruitName).
// Функція рахує і повертає загальну вартість фрукта
// з таким ім'ям, ціною та кількістю з об'єкта.

// Зверніть увагу, що в масиві може бути кілька обʼєктів з однаковою 
// назвою фрукта, це також треба урахувати.
function calcTotalPrice(fruits, fruitName) {
    let total = 0;
    for (const fruit of fruits)  {
    if (fruit.name === fruitName) {
        total += fruit.price * fruit.quantity;
    }  
}
        return total;
}
const fruits = [
    { name: "Яблуко", price: 45, quantity: 7 },
    { name: "Апельсин", price: 60, quantity: 4 },
    { name: "Банан", price: 125, quantity: 8 },
    { name: "Груша", price: 350, quantity: 2 },
    { name: "Виноград", price: 440, quantity: 3 },
    { name: "Банан", price: 125, quantity: 3 },
  ];
