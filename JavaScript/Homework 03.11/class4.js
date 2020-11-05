// - створити функцію яка виводить масив

// let masa = [1, 2, 3, 4, 5];
// let mass = (masa) => {
//     console.log(masa);
// }
// mass(masa);



// - створити функцію яка заповнює масив рандомними числами та виводить його. Для виведення використати попвередню функцію.

// function ada(length, min, max){
//     let array = [];
//     for (let i = 0; i < length; i++) {
//         array.push(Math.floor(Math.random() *(min+max)+min))
//     }
//     return array;
// };
// let masa1 = ada(5, 10, 500);
// mass(masa1);

// - створити функцію яка приймає три числа та виводить та повертає найменьше.

// let fct = function(a, b, c){
//     let min = c;
// if (a<= b && a<=c) min = a;
// if (b<= a && b<=c) min = b;
//console.log(min);
// return min;
// };
// let mish = fct(3, 1, 7);
// console.log(mish);

// - створити функцію яка приймає три числа та виводить та повертає найбільше.

// let fct = function(a, b, c){
//     let max = c;
// if (a>= b && a>=c) max = a;
// if (b>= a && b>=c) max = b;
// console.log(max);
// return max;
// };
// let mish = fct(3, 30, 7);
// console.log(mish);

// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше

// let fct = function(){
// let min = arguments[0];
// let max = arguments[0];
// for (let i of arguments){
//     if (i > max) max = i;
//     if (i < min) min = i;
// };
// console.log(max);
// return min;
// };
// fct(1, 13, 3, 4, 5);

// - створити функцію яка виводить масив

// let massive = [1,2,3,4,5,6,7];
// let ftf = function(massive){
//     console.log(massive);
// }
// ftf(massive);

// - створити функцію яка повертає найбільше число з масиву

// let fnk = function(array){
//     let max = array[0];
//     for (let i of array) {
//         if (max < i) max = i;
//     }
//     return max;
// };
// let sms = fnk([1,6,9,23]);
// console.log(sms);

// - створити функцію яка повертає найменьше число з масиву

// let funk = function(str){
//     let min = str[0];
//     for (const iterator of str) {
//         if (min > iterator) min = iterator;
//     }
//     return min;
// };
// let nu = funk([3,7,8,3,2, 10, 1234]);
// console.log(nu);

// - створити функцію яка приймає масив чисел та складає значення елементів масиву та повертає його.

// let fn = function(mass){
// let all = 0;
// for (const iterator of mass) {
//     all += iterator;
// }
// return all
// }
// let x = fn([1,2,4,7,10]);
// console.log(x);

// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.

// let fn = function(mass){
//     let all = 0;
//     for (const iterator of mass) {
//         all += iterator;
//     }
//     return all/mass.length;
//     }
//     let y = fn([2,4,6,8]);
//     console.log(y);

// - Створити функцію яка приймає масив будь яких объектів, та повертає значення кількості об'єктів в масиві

// let massive = [
//     {model: "bmw", year: 2019, hp: 500, color: "blue"},
//     {model: "vw", year: 2018, hp: 320, color: "brown"},
//     {model: "mercedes", year: 2017, hp: 330, color: "grey"},
//     {model: "audi", year: 2016, hp: 290, color: "purple"},
//     {model: "lada", year: 1989, hp: 40, color: "milk"},
//     {model: "renault", year: 2014, hp: 120 , color: "black"},
//     {model: "toyota", year: 2020, hp:390, color: "cherry-red"},
//     {model: "traktor", year: 1945, hp:999 , color: "theBest"},
//     {model: "lanos", year: 2001, hp: 80, color: "silver"},
//     {model: "tram", year: 2000, hp:100 , color: "green"}
// ];
// let f = function(massobj){
//     let len = 0;
//     for (const iterator of massobj) {
//         if(typeof iterator === "object"){
//             len++;
//         }
//     }
//      return len;  
// };
// let xx = f(massive);
// console.log(xx);

// - Створити функцію яка приймає масив будь яких объектів, та повертає загальн кількість полів в них

// let massive = [
//     {model: "bmw", year: 2019, hp: 500, color: "blue"},
//     {model: "vw", year: 2018, hp: 320, color: "brown"},
//     {model: "mercedes", year: 2017, hp: 330, color: "grey"},
//     {model: "audi", year: 2016, hp: 290, color: "purple"},
//     {model: "lada", year: 1989, hp: 40, color: "milk"},
//     {model: "renault", year: 2014, hp: 120 , color: "black"},
//     {model: "toyota", year: 2020, hp:390, color: "cherry-red"},
//     {model: "traktor", year: 1945, hp:999 , color: "theBest"},
//     {model: "lanos", year: 2001, hp: 80, color: "silver"},
//     {model: "tram", year: 2000, hp:100 , color: "green"}
// ];
// let fp = function(pole){
//     let ppp = 0;
//     for (const iterator of pole) {
//         if(typeof iterator === "object"){
//             for (const keys in iterator) {
//                 ppp++
//             }
//         }
//     }
//     return ppp;
// }
// let xv = fp(massive);
// console.log(xv);

// - створити функцію  яка скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.
//   Приклад
//   [1,2,3,4]
//   [2,3,4,5]
//   результат
//   [3,5,7,9]


// let v = function(one, two){
//     res = [];
//     for (let i = 0; i < one.length; i++) {
//         res.push(one[i]+two[i]);
//     }
//     return res
// };
// let yu = v([1,2,3,4],[2,3,4,5]);
// console.log(yu);

// - *** приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"

// let mass = [1,2,3,4];
// let f = function(mas, index){
//     let massive = [...mas];
//     if(index < massive.length-1){
//         let got = massive[index];
//         massive[index] = massive[index+1];
//         massive[index+1] = got;
//     };
//     return massive
// };
// let n = f(mass, 1);
// console.log(mass);
// console.log(n);

// - *** створити функцію яка буде переносити елементи з значенням 0 у кінець маисву. Зберігаючи при цьому порядок не нульових значень.
// Двожина масиву від 2 до 100
// Приклад
// [1,0,6,0,3] => [1,6,3,0,0]
// [0,1,2,3,4] => [1,2,3,4,0]
// [0,0,1,0]   => [1,0,0,0]

// let my = function(the){
//     let num = [];
//     let nul = [];
// for (const i of the) {
//     if (i === 0) nul.push(0);
//     if (i !== 0) num.push(i);
// }
// return[...num, ...nul];
// }
// console.log(my([1,0,6,0,3]));
// console.log(my([0,1,2,3,4]));
// console.log(my([0,0,1,0]));

// Створити функцію яка :
// - Додає в боді блок з текстом 

// let x = function(text){
//     res = [];
//     res.push(text);
// };
// x("Hello owu")
// let r = document.write(res);

// - Додає в боді елемент з текстом . Тип елементу та текст отримати через аргументи

// let x = function(text, ar){
//     let y = document.createElement(ar);
//     y.innerHTML = text;
//     document.body.appendChild(y);
// };
// x("heliiiii", "div")

//  приймає масив автомобілів (можна взяти з попередніх дз ),та  індентифікатор елемнту в який потрібно додати список цих автомобілів.
// Для кожного автомобіля створити свій блок, та додати його в елемент, індентифікатор якого ви отримали. Всі властивості авто в обному блоці
// - приймає масив автомобілів (можна взяти з попередніх дз ),та  індентифікатор елемнту в який потрібно додати список цих автомобілів.
// Для кожного автомобіля створити свій блок, та додати його в елемент, індентифікатор якого ви отримали.
// Для кожної властивості створити всередені блока автомоблія свій блок

// let cars = [
//     {model: "bmw", year: 2019, hp: 500, color: "blue"},
//     {model: "vw", year: 2018, hp: 320, color: "brown"},
//     {model: "mercedes", year: 2017, hp: 330, color: "grey"},
//     {model: "audi", year: 2016, hp: 290, color: "purple"},
//     {model: "lada", year: 1989, hp: 40, color: "milk"},
//     {model: "renault", year: 2014, hp: 120 , color: "black"},
//     {model: "toyota", year: 2020, hp:390, color: "cherry-red"},
//     {model: "traktor", year: 1945, hp:999 , color: "theBest"},
//     {model: "lanos", year: 2001, hp: 80, color: "silver"},
//     {model: "tram", year: 2000, hp:100 , color: "green"}
// ];

// let ta = function(mash, id){
//     let sh = document.getElementById(id);
//     let el = document.createElement("ul");
//     for (let i = 0; i < mash.length; i++) {
//         let car = mash[i];
//         let le = document.createElement("li");
//         le.innerHTML = `${i}, ${car.model}`;
//         el.appendChild(le);
//     }
//     sh.appendChild(el);
// };
// ta(cars, "free");

