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
