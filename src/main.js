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

