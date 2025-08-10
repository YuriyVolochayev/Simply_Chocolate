// const btn = document.querySelector("#magic-button")
// console.log(btn);
//-----------------------------------------------------

// const list = document.querySelector(".list")
// console.log(list);
//-----------------------------------------------------

// const listItem = document.querySelector(".list-item")
// const listItemAll = document.querySelectorAll(".list-item")
// console.log(listItem);
// console.log(listItemAll);
// console.log(listItemAll[3]);
//-----------------------------------------------------

// const list = document.querySelector(".list")

// console.dir(list);
// console.dir(list.children);

// const firstElement = list.firstElementChild
// const lastElement = list.lastElementChild

// console.log(firstElement);
// console.log(lastElement);

//---------------------------------------------

// const lalaElement = list.children[1];

// console.log(lalaElement);
// console.log(lalaElement.nextElementSibling);
// console.log(lalaElement.previousElementSibling);
// console.log(lalaElement.parentNode);


//==========================================================================================

// const mainImg = document.querySelector(".main-img")
// console.log(mainImg.src);
// console.log(mainImg.alt);

// mainImg.alt = "kurwa";

// console.log(mainImg.alt);

// const mainTitle = document.querySelector(".title")
// console.dir(mainTitle.textContent);


// mainTitle.textContent = "ТРЕНУЄМОСЬ-НАВЧАЖМОСЬ";
// console.dir(mainTitle.textContent);

//==============АТРИБУТИ=============================
// методи get, set, remove, has

//можна отримати значення якось атрибута

// const mainImg = document.querySelector(".main-img")
// mainImg.alt = "kurwa";

// console.log(mainImg.alt);

// console.log(mainImg.getAttribute("src"));

// mainImg.setAttribute("alt", "didko")

// console.log(mainImg.alt);

// mainImg.removeAttribute("width");

// console.log(mainImg.hasAttribute("width"));
// console.log(mainImg.hasAttribute("src"));


//===========================DATA-АТРИБУТИ================================

// const buttons = document.querySelectorAll(".btn")
// console.log(buttons);
// // buttons[2].dataset.action = "red"
// console.log(buttons[2].dataset.action);

//====================ІНТЕРФЕЙС classlist============================

// - add
// - remove
// - toggle
// - replace
// - contains



// const linkEl1 = document.querySelector('.list-link[href="/trulala"]');
// console.log(linkEl1);

// // linkEl1.classList.add("list-link--current");
// // linkEl1.classList.remove("list-link--current");


// linkEl1.classList.toggle("list-link--current");// якщо клас є - видалить, якщо немає - додасть
// linkEl1.classList.replace("list-link--current", "pong");// приймає два аргуиенти - який хочемо і на який хочемо замінити
// console.log(linkEl1.classList.contains("pong"));




