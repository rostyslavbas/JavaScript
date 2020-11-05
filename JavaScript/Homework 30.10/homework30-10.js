// // -- створити об'єкт (не меньше 5ти властивостей) який описує
// // - собаку
// // - людину
// // - автомобіль
// // - квартиру
// // - книгу

// let dog = {
//     name: "pes",
//     human: false,
//     age: 5,
//     home: "lviv",
//     girl: "jassy"
// };
// let people = {
//     name: "rostyslav",
//     age: 21,
//     student: true,
//     home: "lviv",
//     girl: false
// };
// let car = {
//     name: "bmw",
//     age: 1,
//     cheap: false,
//     madein: "germany",
//     fast: true
// };
// let appartments = {
//     name: "kvartyra",
//     age: 10,
//     big: true,
//     home: "lviv",
//     tenrooms: false
// };
// let book = {
//     name: "phylosophy",
//     pages: 500,
//     interesting: true,
//     author: "aristoteles",
//     easytoread: false
// };

// let q = typeof(dog);
// console.log(q);

// -- Створити масив та вивести його в консоль:
// - з 5 собак
// - 3 5 людей
// - з 5 автомобілів


// let fivdogs = ["pes1","pes2","pes3","pes4","pes5"];

// console.log(fivdogs);

// let fivpip = ["pip1","pip2","pip3","pip4","pip5"];

// console.log(fivpip);

// let fivcar = ["car1","car2","car3","car4","car5"];

// console.log(fivcar);

// -- створити об'єкт (не меньше 5ти властивостей) який описує, одна з властивостей обов'язково повинна бути об'єктом,ще одна - масивом
// - будинок
// - водій
// - іграшку
// - стіл
// - сумка

// let house = {
//     firstfloor:  ["garage"],
//     secondfloor: false,
//     thirdfloor: "nice",
//     fourthfloor: "4",
//     fivfloor: {room: "diningroom"}
// };
// console.log(house);

// let driver = {
//     age: 30,
//     experience: "10 years",
//     kids: {son: "yurko"},
//     salary: "1000$",
//     favphrase: ["massssss"]
// }
// console.log(driver);

// let toy = {
//     madein: "china",
//     model: {doll: "barbie"},
//     price: NaN,
//     quality: false,
//     say: ["abracadabra"]
// };
// console.log(toy);

// let table = {
//     good: true,
//     wood: ["redwood"],
//     made: {fabric: "china"},
//     expencive: true,
//     location: "hub"
// };
// console.log(table);

// let bag = {
//     fabriqe: {bangladesh: "underground"},
//     big: true,
//     color: "red",
//     serialnumber: 228,
//     clyme: ["looser"]
// };
// console.log(bag);


// // Дан массив:
// let users = [
// 				{name: 'vasya', age: 31, status: false},
// 				{name: 'petya', age: 30, status: true},
// 				{name: 'kolya', age: 29, status: true},
// 				{name: 'olya', age: 28, status: false},
// 				{name: 'max', age: 30, status: true},
// 				{name: 'anya', age: 31, status: false},
// 				{name: 'oleg', age: 28, status: false},
// 				{name: 'andrey', age: 29, status: true},
// 				{name: 'masha', age: 30, status: true},
// 				{name: 'olya', age: 31, status: false},
// 				{name: 'max', age: 31, status: true}
// 			];
// // - звернутися в відповідну ячейку масиву і відповідний параметр об'єкта і вивести в консольх наступне
// // - статус Андрія
// console.log (users [7] .status);

// // - статус Максима
// console.log (users [4] .status);

// // - ім'я передостаннього об'єкту
// console.log (users [9] .name);

// // - ім'я третього об'єкта
// console.log(users [2] .name);

// // - вік Олега
// console.log(users [6] .age);

// // - вік Олі
// console.log(users[3] .age);

// // - вік + ім'я 5го об'єкта
// console.log( users[4] .age +" "+ users[4].name);

// // - вік + сатус Анни
// console.log(users [5] .age + " "+ users [5] .status);

// // Приклад: вивести ім'я 1го об'єкта. Відповідь: console.log (users [0] .name). Будьте уважні! 4й об'єкт має індес 3!


// -Візьміть файл template1.html, підключіть до нього скрипт, і працюйте в ньому.

// -- Напишіть код,  який за допомоги document.getElementById або document.getElementsByClassName або document.getElementsByTagName :
// - отримує текст з параграфа з id "content"
// let doc = document.getElementById("content");
// console.log(doc.innerText);

// - отримує текст з блоку з id "rules"
// let doc2 = document.getElementById("rules");
// console.log(doc2.innerText);


// // - замініть текст параграфа з id 'content' на будь-який інший
// let doc3 = document.getElementById("content");
// doc3.innerText = "ahahahahahahha";

// // - замініть текст параграфа з id 'rules' на будь-який інший
// let doc4 = document.getElementById("rules");
// doc4.innerText = "blalalalalalaa";

// // - змініть кожному елементу колір фону на червоний

// doc3.style.backgroundColor = "red";
// doc4.style.backgroundColor = "red";

// // - змініть кожному елементу колір тексту на синій

// doc3.style.color = "blue";
// doc4.style.color = "blue";

// - отримати весь список класів елемента з id=rules і вивести їх в console.log

// let doc5 = document.getElementById("rules");
// console.log(doc5.classList);

// // - отримати всі елементи з класом fc_rules
// let doc6 = document.getElementsByClassName("fc_rules");
// console.log(doc6);

// // - поміняти колір тексту у всіх елементів fc_rules на червоний
// doc6[0].style.color = "red";
// doc6[1].style.color = "red";
// doc6[2].style.color = "red";
// doc6[3].style.color = "red";

