// task 1

// Напиши скрипт, який для обʼєкта user, послідовно: 
// додає поле mood зі значенням 'happy"
// запінює значення hobby на 'skydiving'
// замінює значення premium на false
// виводить вміст обʼєкта user у форматі ключ: значення 
// використовуючи Object.keys() та for...of

const user = {
    name: "Alice",
    age: 20,
    hobby: "Html",
    premium: "true"
}

user.mood = "happy";
user.hobby = "skydiving";
user.premium = "false";

const userKeys = Object.keys(user)
for (const key of userKeys) 
console.log(`${key}:${user[key]}`);

// task 2
// Масив обʼєктів
// Перебор масива
// Пошук обʼєкта за значенням властивості
// - Колекція значень властивості
const friends = [
    { name: "Ross", online: false },
    { name: "Joey", online: true },
    { name: "Chandler", online: false },
    { name: "Phoebe", online: true },
    { name: "Monica", online: true },
    { name: "Rachel", online: false },
];
console.log(Array.isArray(friends)); //true

// Пошук друга за іменем
function findByName(allFriends, friendName) {
    
for (const friend of allFriends) {
    if (friend.name.toLowerCase() === friendName.toLowerCase()) {
        return friend;
    }
}
    
return "Not found";
}
console.log(findByName(friends, "ross"))

//Отримуємо імена усіх друзів

function getAllNames(arr) {
    const names = [];
    for (const item of arr) {
         names.push(item.name) 
    }
    return names;
}

console.log(getAllNames(friends))

// Отримуємо імена тільки тих друзів які зараз онлайн

function getOnlineFriends(arr) {
    const onlineFriends = [];
    for (const friend of arr) {
        if (friend.online)
        // if (!friend.online)

            onlineFriends.push(friend.name)
    }
    return onlineFriends;
}
console.log(getOnlineFriends(friends))

//task 

// Напишіть функцію calcTotalPrice(stones, stoneName) ,
//яка приймає масив обʼєктів та рядок з назвою каменю.
//Функція рахує і повертає загальну вартість каміння з
//таким імʼям, ціною та кількістю з обʼєкта
const stones = [
    { name: "Смарагд", price: 1300, quantity: 4 },
    { name: "Діамант", price: 2700, quantity: 3 },
    {name: "Canip", price: 400, quantity: 7},
    { name: "Цебінь", price: 200, quantity: 2 },
];
function caclculateTotalPrice(stones, stoneName) {
    let sum = 0;
    for (const item of stones) {
        if (item.name === stoneName) {
            sum += item.price * item.quantity
        }
    }
    return sum; // return тут не вище, бо треба перевірити
    //  усі варіанти
}
console.log(caclculateTotalPrice(stones, "Смарагд"))