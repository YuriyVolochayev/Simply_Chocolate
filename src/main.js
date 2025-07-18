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
 

























