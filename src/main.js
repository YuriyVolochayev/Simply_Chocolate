// const Arr = [1, 2, 3, 5, 6, 10]

// function squareArr(newArr) {
//     for (let index = 0; index < newArr.length; index++) {
//         newArr[index] *= newArr[index]
//     }
//     return newArr;
    
// }
// console.log(squareArr(Arr));


// function calcBmi(weight, height) {
//     let numWeight = Number.parseFloat(weight.replace(",", "."));
//     let numHeight = Number.parseFloat(height);

//     const bmi = (numWeight / (numHeight ** 2)).toFixed(1);

//     return bmi; /*toFixed(1);*/
    
// }

// const bmi = calcBmi("88,3", "1.75");
// console.log(bmi);


// const sum = 499;

// if(sum >= 1500) {
//     console.log("level 1");
// } else if(sum > 500) {
//     console.log("level 2");
// } else if(sum === 500) {
//     console.log("level 3");
// } else if(sum < 500) {
//     console.log("level 4");
//     }

// const sum = 1000;

// const message = sum >= 0 ? 'Positive' : 'Negative';

// console.log(message);

// const hours = 15;
// const minutes = 0;

// let time;

// if (minutes > 0) {
//     time = `${hours} г. ${minutes} хв.`
// } else {
//     time = `${hours} г.`
// }
    
// console.log(time);

// const deadline = 4;
// let msg;

// if(deadline === 0) {
//     msg = `Today`
// } else if(deadline === 1) {
//     msg = `Tomorrow`
// } else if(deadline === 2) {
//     msg = `Overmorrow`
// } else if (deadline >= 3) {
//     msg = `Date in the future`
// }

// console.log(msg);

// const user = "Petya";
// switch (user) {
//     case "Alice":
//         console.log("case1");
//         break;
//     case "Petya":
//         console.log("case2");
//         break;
//     default:
//         console.log("Default");
        
//         break;
// }

// const deadline = 2;
// let msg;

// switch (deadline) {
//     case 0:
//         msg = 'Today';
        
//         break;
//     case 1:
//         msg = 'Tomorrow';
        
//         break;
//     case 2:
//         msg = 'Overmorrow';
        
//         break;

//     default:
//         msg = 'Date in the future'
//         break;
// }

// console.log(msg);

// const option = 4;

// let msg;

// switch (option) {
//     case 1:
//         msg = 'Самовивіз';
//         break;
    
//     case 2:
//         msg = 'Курьер';
//         break;
    
//     case 3:
//         msg = 'Почтомат';
//         break;

//     default:
//         msg = "Ви не вибрали спосіб доставки"
//         break;
// }
// console.log(msg);

// const sub = "Pro";

// let canConnect = sub === "Vip" || sub === "Pro" ? true : false

// // if (sub === "Pro" || sub === "Vip") {
// //     canConnect = true
// // } else {
// //     canConnect = false
// // };

// console.log("canConnect", canConnect);

// const isOnline = true;
// const isFriend = true;
// const isDnd = false;

// const canOpenChat = isOnline && isFriend && !isDnd;

// console.log("canOpenChat", canOpenChat);

// --------------- методи рядків --------------

// slice
// toLowerCase
// toUpperCase
// includes
// startsWith / endsWith
// indexOf
// trim



// const user = "Yurii Volochaeiv";

// const a = user.slice(1, 5);
// console.log(a);

// console.log(user.slice(0, 3)); // від якого вирізаємо і до якого(не включаючи)

// const user = "Yurii Volochaeiv";

// const user = "            Yurii Volochaeiv             ";

// console.log(user.toLowerCase());
// console.log(user.toUpperCase());

// console.log(user.includes("Yu")); // метод includes чутливий до регістрів
// console.log(user.includes("yu"));

// console.log(user.startsWith("Yu"));
// console.log(user.startsWith("yu"));

// console.log(user.endsWith("Yu"));
// console.log(user.endsWith("yu"));
// console.log(user.endsWith("iv"));

// console.log(user.indexOf("yu")); // чутливий до регістру
// console.log(user.indexOf("Yu")); //при передачі двох літер поверне індекс першої
// console.log(user.indexOf("i")); //якщо в рядку дві однакові літере - поверне індекс першої
// console.log(user.indexOf(" ")); //пробіл також індексуються

// console.log(user);
// console.log(user.trim()); // метод trim прибирає всі зайві пробіли з початку і кінця рядків


// let link = "https://my-site.com/about/";

// if (!link.endsWith("/")) {
//     link += "/"; // "link += "/""" === "link = link + "/"""
// } else {
//     console.log("Everythyng is fine");
//     }
// console.log(link);

// let link = "https://my-site.com/about";

// // if (!link.endsWith("/") && link.includes("my-site")) {
// //     link += "/"
// // }

// link = !link.endsWith("/") && link.includes("my-site") ? link += "/" : link;// виконання за допомогою тернарного оператора
    
// console.log(link);



// const blackListWord1 = "spam";
// const blackListWord2 = "sale";

// const string1 = "Hello, I Abdul, this is not spam.";
// const string2 = "Biggest SALE this week, dont miss out!";
// const string3 = "#fatlivesmatter advertising campain";

// console.log(string1.includes(blackListWord1));
// console.log(string1.includes(blackListWord2.toLowerCase()));

// console.log(string2.includes(blackListWord1));
// console.log(string2.toLowerCase().includes(blackListWord2));

// -------------------ЦИКЛИ------------------

// for
// wile
// do wile

// console.log("Before");

// for (let i = 0; i < 10; i += 1) {
//     console.log(i);
    
// }

// for (let i = 10; i >= 0; i -= 1) {
//     console.log(i);
    
// }


// console.log("After");

// const user = "Alice";
// for (let i = 0; i < user.length; i += 1) {
//     console.log(user[i], i);
    
// }
// ІНКРЕМЕНТ

// let a = 10;

// const b = ++a;// a = a + 1; b = b + 1

// const d = a++;// d = a = 10; a = a + 1

// // a++;
// // ++a;

// console.log("a", a);
// console.log("b", b);
// console.log("d", d);


// let a = 10;

// --a;

// console.log("a", a);



// while
// do...while - дія 100% виконається один раз


// console.log("Before");

// let counter = 11;

// // while (counter < 10) {
// //     console.log(counter);
// //     counter++
    
// // }

// do {
//     console.log(counter);
//     counter++
    
// } while (counter < 5);


// console.log("After");


//**напиши цикл for який виводить у консоль браузера
// числа за зростанням від а до b,
// але які кратні 5


// const a = 20;
// const b = 100;
// for (let i = a; i < b; i++) {
//     // if(i % 5 === 0) {
//     //     console.log(i);
//     // }

//     if(!(i % 5)) {
//         console.log(i);
//     }
// }

// const min = 0;
// const max = 6;
// let total = 0;

// for (let i = min; i <= max; i++) {
//     if(!(i % 2)) {
//         total += i;

//         console.log(total);
        
//     }
// }

// МАСИВИ

// const arr = ["string", 25, true]; // індексована сутність

// arr[2] = false;// заиіна елемента масиву через індекс

// console.log(arr);
// console.log(arr.length);// повертає довжину масиву,
// console.log(arr[2]);// зверення до елементу масиву через індекс


// let a = [1, 2, 3];// присвоюється посилання
// const b = a; // передається посилання яке збереглося в "а"

// a[0] = 100;

// console.log("a", a);
// console.log("b", b);
// console.log(a === b);// одне посилання - true. Масиви порівнюється за посиланням

// const x = [1, 2, 3];
// const y = [1, 2, 3];

// console.log(x === y);// різні масиви = різні посилання - false


// const arr = ["HTML", "CSS", "JS", "React"];

// console.log(arr);


// const str = arr.join(" ");// перетворює масив в рядок
// console.log(str);

// const arr1 = str.split(" ");// перетворює рядок на масив. В метод передаємо по чому ріжимо рядок.

// console.log(arr1);


// const arr = ["HTML", "CSS", "JS", "React"];

// const arr1 = arr.slice(0, 3);// сворює новий масив від елемента з 0 індексом і до елемента з індексом 3 не вкючаючи його

// console.log(arr1);

// const arr2 = arr.slice(1);

// console.log(arr2);// якщо передати тільки 1 аргумент то зробить новий масив від елемента індекс який вказали і до кінця

// const arr3 = arr.slice();// якщо не вказати аргументи метод створить точну копію масиву
// console.log(arr3);

// const arr4 = arr.slice(-3);

// console.log(arr4);

// const arr = ["HTML", "CSS", "JS", "React"];

// const arr1 = [1, 2, 3, 4];

// const arr2 = ["tototo", "lalala"];

// const arr3 = arr.concat(arr1, arr2);// послідовність додавання залежить від послідовності атрибутів у методі

// // console.log(arr3);

// const index = arr3.indexOf("pupupu");// повертає індекс елемента. Якщо передати неіснуючий елемент - поверне -1. Чутливий до регістру.

// console.log(index);

// const arr = ["HTML", "CSS", "JS", "React"];

// const arr1 = [1, 2, 3, 4];

// const arr2 = ["tototo", "lalala"];

// arr.push("pupupu"); додає переданий аргумент в кінець масиву

// console.log(arr);

// arr1.push(5, 6, 7);

// console.log(arr1);

// arr.pop();// метод видаляє з кінця елемент

// console.log(arr);


// const arr = ["HTML", "CSS", "JS", "React", "tototo", "lalala"];

// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i], i);
    
// }

// for (let i = 0; i < arr.length; i++) {

//     arr[i] += `-${i}`
//     console.log(arr);
    
// }

// const arr = ["HTML", "CSS", "JS", "React", "tototo", "lalala"];

// for (const scills of arr) {// доступ до кожного елемента масиву
//     console.log(scills);
    
// }

// const arr = ["HTML", "CSS", "JS", "React", "tototo", "lalala"];

// if(arr.includes("CSS")) {
//     console.log("SuperPuper");
// } else {
//     console.log("WTF");
    
// }

// const values = "8 10";

// const valuesArr = values.split(" ");

// console.log(valuesArr);

// const square = valuesArr[0] * valuesArr[1];

// console.log(square);

// const fruits = ["🍎", "🍌", "🍐", "🍑", "🍋", "🍇"];

// // for (const fruit of fruits) {
// //     console.log(fruit);
    
// // }

// for (let i = 0; i < fruits.length; i++) {
//     console.log(`${i + 1}: ${fruits[i]}`);
// }

// const arr = [1, 5, 8, 9, 12, 4, 30, 18, 14,];

// let total = 0;

// for (const num of arr) {
//     if (num % 2 === 0) {
//         total += num;
//     }
    
// }
// console.log(total);

// const names = "Yurii, Valera, Petya, Dima";
// const numbers = "1111, 2222, 3333, 4444";

// const namesArr = names.split(",");
// const numbersArr = numbers.split(",");

// for (let i = 0; i < namesArr.length; i++) {
//     console.log(`${namesArr[i]}: ${numbersArr[i]}`);
    
// }

// const string = "    Welcome to the future    ";

// const arr = string.trim().split(" ");

// console.log(arr);

// const res = arr.slice(1, arr.length - 1).join(" ");
// console.log(res);

// const arr = [5, 8, 9, 12, 4, 30, 18, 14,];

// let min;

// for (let i = 0; i < arr.length; i++) {
//     if (i === 0) {
//         min = arr[i]
//     } else {
//         if (arr[i] < min) {
//             min = arr[i]
//         }
//     }
// }
//  console.log(min);
 
// function foo(a, b, c) {

//     // const arr = [1, 2, 3]
//     // console.log(arguments);// не виколистовуються методи масиву
//     const args = Array.from(arguments);
//     console.log(args);
//     console.log(args.join(" "));
    
// }

// foo(1, 2, 3);

// const add = function () {
//     const args = Array.from(arguments);
//     let total = 0;
//     for (let i of args) {
//         total += i
//     }
//     return total;
// }

// console.log(add(1, 2, 3));
// console.log(add(1, 2, 3, 4, 5));

// function calAvarage() {
//     let total = 0;
//     for (let i = 0; i < arguments.length; i++) {
//         total += arguments[i];
//     }
//     return total / arguments.length
// }
// console.log(calAvarage(1, 2, 3));
// console.log(calAvarage(1, 2, 3, 4, 5));


// СТЕКИ ВИКЛИКІВ ФУНКЦІЇ

// function fnA() {
//     console.log("виклик функції fnA");
    
// }

// function fnB() {
//     console.log("виклик функції fnB");
    
// }

// function fnC() {
//     console.log("виклик функції fnC");
    
// }


// console.log("before fnA");
// fnA();
// console.log("after fnA");

// console.log("before fnB");
// fnB();
// console.log("after fnB");

// console.log("before C");
// fnC();
// console.log("after fnC");


// function bar() {
//     console.log("bar");
    
// }
//  function baz() {
//     console.log("baz");
    
// }
 
// function foo() {
//     console.log("foo");
//     bar();
//     baz();
    
// }

// foo();

// function logItems(items) {
//     for(let i = 0; i < items.length; i++) {
//         console.log(`${i + 1} - ${items[i]}`);
        
//     }
// }

// logItems(["HTML", "CSS", "JS", "React", "tototo", "lalala"]);
// logItems(["🍎", "🍌", "🍐", "🍑", "🍋", "🍇"]);

// const names = "Jacob,William,Solomon,Artemis";

// const phones = "050555333,066444222,099999888,077888666";

// function printInfo(names, phones) {
//     const namesArr = names.split(",");
//     const phonesArr = phones.split(",");

//     for (let i = 0; i < namesArr.length; i++) {
//         console.log(`${namesArr[i]}: ${phonesArr[i]}`);
//     }
        
// }
// printInfo(
//     "Jacob,William,Solomon,Artemis",
//     "050555333,066444222,099999888,077888666");



// function formatTime(totalMinutes) {
//     const hours = Math.floor(totalMinutes / 60);
//     const minutes = totalMinutes % 60;
//     // console.log(hours);
//     // console.log(minutes);

//     // перетворимо змінну на рядок

//     const douleHours = String(hours).padStart(2, "0");
//     const doubleMinutes = String(minutes).padStart(2, "0");
//     // метод padStart додає до рядка необхідну кількість символів
//     //     * перший аргумент - необхіна кількіть символів
//     // *другий аргумент - символ який передаєть на початок рядка, якщо його довжина менша ні та яку первіряємо (перший аргумент)

//     return `${douleHours}:${doubleMinutes}`;
// }


// console.log(formatTime(70));
// console.log(formatTime(460));
// console.log(formatTime(1441));



// const data = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// function devideArr(arr, num) {
//     const res = [];

//     for (let i = 0; i < arr.length; i += num) {
//         const comb = arr.slice(i, i + num);
//         res.push(comb);
//     }
//     return res;
// }


// console.log(devideArr(data, 3));

// Об'єкти

// const playlist = ["Mood", 10, true];

// const playlistObj = {
//     name: "Mood",
//     rating: 9,
//     isFavorite: true,
//     tracks: ["tr-1", "tr-2"]
// };
// // console.log(playlistObj.name);// коли відомий ім'я ключа

// playlistObj.rating = 4;
// playlistObj.name = 'Old'
// playlistObj.year = 2015;

// console.log(playlistObj);

// const user = {
//     name: "Will",
//     age: 29,
//     skills: {
//         HTML: true,
//         CSS: true,
//         JS: true,
//         React: false
//     }
// }

// console.log(user.skills.JS);

// const username = "Alice";
// const age = 25;
// const mail = 'sutr@gmail.com';

// const userObj = {
//     // name: username, // якщо ім'я ключа має таку саму назву як і значення використовуємо скорочений синтаксис
//     // age: age,
//     // mail: mail

//     // username,
//     // age,
//     // mail

// }

// const username = "Alice";
// const age = 25;
// const mail = 'sutr@gmail.com';

// function foo(name, email) {
//     const obj = {
//         name,
//         email
//     }
//     return obj
//     }
// console.log(foo(username, mail));

// const inputName = "color";

// const obj = {
//     [inputName]: "red"
// }

// console.log(obj);

// перебір об'єкта. Цикли for...in-------------------------------------------------------------------------

// const feedback = {
//     good: 5,
//     neutral: 8,
//     bad: 11
//     }

// let total1 = 0;
// for (const key in feedback) {
//     total1 += feedback[key];
//     console.log(feedback[key], key);
//     console.log(total1);
// }

// // методи Object.key, Object.values ----------------------------------------------------------------------

// const feedbackSecond = {
//     good: 2,
//     neutral: 9,
//     bad: 1
// }
//     let total2 = 0

// const keys = Object.keys(feedbackSecond); // метод складає ключи в масив

// console.log(keys);
// console.log(keys.length);

// for (const key of keys) {
//     console.log(feedbackSecond[key], key);
//     total2 += feedbackSecond[key]
//     }
// console.log(total2);

// //--------------------------------------------------------------------------------------------------------

// const feedback3 = {
//     good: 10,
//     neutral: 10,
//     bad: 10
// }
    
// const values = Object.values(feedback3); // повертає масив значень об'єкта
// let total3 = 0;
// for (const key of values) {
//     total3 += key;


// }
// console.log(total3);

// const user = {
//     name: "Will",
//     age: 29,
//     hobby: "origami",
//     premium: true
// }

// user.mood = "happy";
// user.hobby = "skydiving";
// user.premium = false;

// const keys = Object.keys(user);
// for (const item of keys) {
//     console.log(`${item} : ${user[item]}`);
    
// }

// function foo(obj) {
//     obj.mood = "happy";
//     obj.hobby = "skydiving";
//     obj.premium = false;

//     const keys = Object.keys(obj);
//     for (const item of keys) {
//         console.log(`${item} : ${obj[item]}`);
        
//     }
    
// }

// const teamSalary =  {
//     Amanda: 5000,
//     Peter: 6000,
//     Pall: 4500,
//     Cavin: 9000
// }

// let sum = 0;

// const keys = Object.keys(teamSalary);

// for (const key of keys) {

//     sum += teamSalary[key]
    
    
// }
// console.log(sum);

//---------------------МЕТОДИ ОБ'ЄКТУ-------------------------------


// const friends = [
//     { name: "Ross", online: false },
//     { name: "Joey", online: true },
//     { name: "Chandler", online: false },
//     { name: "Phoebe", online: true },
//     { name: "Monica", online: true },
//     { name: "Rachel", online: false },
// ];
// console.log(friends);
// console.table(friends);

//-----------------------ЗНАЙТИ ДРУГА ЗА ІМ'ЯМ--------------------------
// function findByName(arr, name) {
//     for (const item of arr) {
//         // console.log(item.name);
//         if (item.name === name.toLowerCase) {
//             return item;
//         }
        
//     }
//     return "Not found"
// }
// console.log(findByName(friends, "Chandler"));

//-------------------------ОТРИМАТИ ІМЕНА ВСІХ ДРУЗІВ--------------------

// function getAllNAmes(arr) {
//     const newArr = [];

//     for (const i of arr) {
//         newArr.push(i.name);
//     }
//     return newArr
// }

// console.log(getAllNAmes(friends));

//-------------------------ОТРИМАТИ ІМЕНА ДРУЗІВ ONLINE--------------------

// function getOnline(array) {
//     const friendsOnline = [];

//     for (const item of array) {
//         if (item.online) {
//             friendsOnline.push(item);
//         }
//     }
//     return friendsOnline
// }

// console.log(getOnline(friends));

//-------------------------------------------------------------------------------------------------------------------------------------------

// const stones = [
//     { name: "Сапфір", price: 1300, quantity: 4 },
//     { name: "Діамант", price: 2000, quantity: 5 },
//     { name: "Рубін", price: 1750, quantity: 2 },
//     { name: "Смарагд", price: 1300, quantity: 3 },
// ];

// function totalPrice(arr, name) {
//     let sum = 0;
//     for (const i of arr) {
//         if (i.name === name) {
//             sum += i.price * i.quantity;
//         }
//     }
//     return sum;
// }
// console.log(totalPrice(stones, "Сапфір"));
// console.log(totalPrice(stones, "Діамант"));
// console.log(totalPrice(stones, "Рубін"));
// console.log(totalPrice(stones, "Смарагд"));




//---------------------------------------------МЕТОДИ ОБ'ЄКТА. КЛЮЧОВЕ СЛОВO "this"--------------------------------------------------------




// const playlist = {
//     name: "Mood",
//     rating: 9,
//     tracks: ["tr-1", "tr-2", "tr-3"],

//     changeName(newName) {
//         // playlist.name = newName; краще використовувати this, щоб метод працював для інших об'єктів
//         this.name = newName;
//     }
// };

// playlist.changeName("BadMood")

// const playlist2 = {
//     name: "Cringe",
//     rating: 4,
//     tracks: ["tr-1", "tr-2", "tr-3"],
// }
// playlist2.changeName = playlist.changeName;
// playlist2.changeName("NotCringe");

// console.log(playlist);
// console.log(playlist2);


//------------------------------------------------------------------------------------------------------------------------------------------


// const playlist = {
//     name: "Mood",
//     rating: 9,
//     tracks: ["tr-1", "tr-2", "tr-3"],

//     changeName(newName) {
//         this.name = newName;
//     },

//     changeRating(newRate) {
//         this.rating = newRate;
//     },

//     addTrack(newTrack) {
//         this.tracks.push(newTrack);
//     },
// };
// playlist.addTrack("tr-4");
// playlist.changeRating(5);
// console.log(playlist);


//=================================================СИНТАКСИС SPRED та REST====================================================
// rest оператор складає в масив

// function sum(...num) {
//     console.log(num);
//     }

// sum(1, 2, 3);
// sum(1, 2, 3, 4, 5);

//-----------------------------------------------------------------------------------------------------------

// function foo(...args) {
//     console.log(args);
    
// }

// foo({ a: 1, b: 2, });

//----------------------------------------------------------------------------------------------------------

// spred розгортає

// const num = [
//     1000,
//     ...[1, 2, 3],
//     4000,
//     ...[4, 5, 6],
//     7000,
//     ...[7, 8, 9]
// ]

// console.log(num);

//===================================================================================================================

/* ПОШУК НАЙБІЛЬШОГО ТА НАЙМЕНШОГО*/

// const num = [18, 20, 9, 15, 33, 78, 100];


// console.log(Math.max(...num));
// console.log(Math.min(...num));

//-------------------------------------------------------------------------------------------------------------------------------


//=============================================СТВОРЕННЯМАСИВУ===================================================================

// const a = [18, 20, 9];

// // const b = a; одне і теж посилання/одне місце пам'яті
// // console.log(a === b);
// // console.log("a", a);
// // console.log("b", b);

// const b = [...a]; // різні посилання/різня місця пам'яті
// console.log(a === b);
// console.log("a", a);
// console.log("b", b);

//---------------------------------------------------------------------------------

// const tu = [{ a: 2 }, { b: 4 }, { c: 6 },];

// // об'єкт копіюється за посиланням. коли ми розгортаємо масив tu в масив bu, ми фактично копіюємо в нього посилання на об'єкти

// const bu = [...tu];

// tu[0].a = 100;

// console.log("tu", tu);
// console.log("bu", bu);


//===================поєднання декількох масивів в один===============================================

// const a = [1, 2, 3];
// const b = [4, 5, 6];
// const c = [7, 8, 9];

// const newFullArr = [...a, ...b, ...c];

// console.log(newFullArr);

//--------------------------------------------------------------------------------------------------

// const objA = { a: 2, b: 4 };
// const objB = { a: 6, q: 8 };

// const objC = {
//     ...objA,  // a: 2, b: 4
//     a: 10,   //   a: 10, b: 4
//     ...objB,//  a: 6, b: 4, q: 8
//     b: 20  //    a: 6, b: 20, q: 8
// }



// console.log(objA, objB, objC);


//====================================================================================================

// const Transaction = {
//     DEPOST: "deposit",
//     WITHDROW: "withdrow"
// };

// const account = {
//     balance: 0,
//     transactions: [],
//     createTransaction(amount, type) {
//         const obj = { id: amount, amount: amount, type: type };
//         return obj;
//     },
// // ------------------метод що зараховує кошти на баланс----------------------------
//     deposit(amount) {
//         this.balance += amount;
//         const transaction = this.createTransaction(amount, Transaction.DEPOST);
//         this.transactions.push(transaction);
//     },
// // ------------------метод що знімає кошти з балансу----------------------------

//     wihtdrow(amount) {
//         if (this.balance < amount) {
//             console.log("НЕДОСТАТНЬО КОШТІВ");
//             return;
//         }
//         this.balance -= amount;
//         const transaction = this.createTransaction(amount, Transaction.WITHDROW);
//         this.transactions.push(transaction);
//     },

//     // ------------------метод що показує баланс----------------------------
//     getBalance() {
//         return this.balance;
//     },

//     // ------------------метод що шукає об'єкт транзакції по id----------------------------
    
//     getTransitionDetails(id) {
//         for (const item of this.transactions) {
//             if (item.id === id) {
//                 return item;
//             }
//         }
//     }, 
    
//     //----------------------------метод що повертає загальну суму певного типу транзакцій-----------------------
    
//     getTransactionTotal(type) {
//         let sum = 0;

//         for (const item of this.transactions) {
//             if (item.type === type) {
//                 sum += item.amount;
//             }
//         }
//         return sum;
//     }

    
// }

// account.deposit(300);
// account.deposit(300);

// // account.wihtdrow(1000);
// account.wihtdrow(200);
// // console.log(account.getBalance());
// console.log(account.getTransitionDetails(300));
// console.log(account.getTransitionDetails(200));

// console.log(account.getTransactionTotal(Transaction.DEPOST));
// console.log(account.getTransactionTotal(Transaction.WITHDROW));







