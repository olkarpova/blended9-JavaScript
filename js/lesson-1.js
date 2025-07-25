// У змінній min лежить випадкове число від 0 до 59.
// Визначте, в яку чверть години потрапляє
// це число (у першу, другу, третю чи четверту).
// Виведіть в alert відповідне повідомлення, наприклад:
// "10 входить в першу чверть"


// const min = Math.floor(Math.random() * (59 - 0) + 0);

// if (min >= 0 && min < 15) {
//     alert(`${min}входить в першу чверть`)
// }
// else if (min >= 15 && min < 30) {
//     alert(`${min}входить в другу чверть`)
// }
// else if (min >= 30 && min < 45) {
//     alert(`${min}входить в третю чверть`)
// }
// else if (min >= 45 && min < 60) {
//     alert(`${min}входить в четверту чверть`)
// } else {
//     alert('Некоректне значення');
// }
// Отримуйте від користувача число (кількість хвилин) через prompt
// і виводьте у консоль рядок у форматі годин та хвилин.
// Приклад: користувач вводить в prompt '70' -> в консолі відобразиться '01:10'.
// Корисне посилання для відображення годин та хвилин у потрібному форматі ('01' замість '1'): 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/padStart#examples

function getTime() {
    const userNumber = Number(prompt("put the number")); 
    const hours = Math.floor(userNumber / 60); //69
    const minutes = userNumber % 60 //9 

    return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}`;
}
console.log(getTime());

