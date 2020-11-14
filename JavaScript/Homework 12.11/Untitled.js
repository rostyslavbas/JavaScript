// - Создать произвольный елемент с id = text.  Используя JavaScript, сделайте так, чтобы при клике на кнопку исчезал элемент с id="text".

// let z = document.getElementById("h1");
// let x = document.getElementById('text');
//     x.onclick = ev => {
//         z.hidden = " "     
//     };

// - Создайте кнопку, при клике на которую, она будет скрывать сама себя.

// let x = document.getElementById('text');
// x.onclick = ev => {
//     x.hidden = "bye"
// };


// - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18,
// та повідомити про це користувача

// let x = document.getElementById('text');

//     x.onclick = ev => {
//         let y = document.getElementById('input');
//         let z = y.value;

//         if (z >= 18) {
//             alert("it's ok") 
//         } else {
//            alert("you are too young") 
//         }
//     };

// - Создайте меню, которое раскрывается/сворачивается при клике

// let menu = document.getElementById("menu");
// let ul = document.getElementById('ul');
// menu.onclick = ev =>{
//     ul.hidden
//     ? ul.hidden = false
//     : ul.hidden = true
// };

// - Создать список комментариев , пример объекта коментария - {title : 'lorem', body:'lorem ipsum dolo sit ameti'}.
// Вывести список комментариев в документ, каждый в своем блоке.
//  Добавьте каждому комментарию по кнопке для сворачивания его body.

// let arr = [
//     {title : '1', body:'lorem ipsum dolo sit ameti'},
//     {title : '2', body:'lorem ipsum dolo sit ameti'},
//     {title : '3', body:'lorem ipsum dolo sit ameti'},
//     {title : '4', body:'lorem ipsum dolo sit ameti'},
//     {title : '5', body:'lorem ipsum dolo sit ameti'}
// ];

// let com = document.getElementById('com');
// arr.forEach(element => {
// let div = document.createElement('div')
//   let h2 = document.createElement('h2');
//   let h3 = document.createElement('h3');
//   let button = document.createElement('button');
//   button.innerText = "BUTTON";
//   h2.innerText = element.title;
//   h3.innerText = element.body;
//   button.onclick = ev => {
//       h3.hidden
//       ? h3.hidden = false
//       : h3.hidden = true
//   }
//   div.appendChild(h2); 
//   div.appendChild(h3); 
//   div.appendChild(button);
//   com.appendChild(div); 
// });


// - створити 2 форми  по 2 інпути в кожній. ствоирити кнопку при кліку на яку считується та виводиться на консоль інформація з цих 2х форм.
// Кнопка повинна лежати за межами форм (Щоб ьуникнути  перезавантаження сторінки)
// Доступ до інпутів через Forms API. Отже дайте формі та інпутам всі необхідні атрибути.

// let first = document.getElementById('firstForm');
// let second = document.getElementById('secondForm');
// let bot = document.getElementById('botForm')

// bot.onclick = ev => {
//     let inp1 = first.inp1.value;
//     let inp2 = first.inp2.value;
//     let inp3 = second.inp3.value;
//     let inp4 = second.inp4.value;

//     let xxx = inp1+" "+inp2+" "+inp3+" "+inp4
//     console.log(xxx)

// };

// - Створити функцію, яка генерує таблицю.
// Перший аргумент визначає кількість строк.
// Другий параметр визначає кліькіть ячеєк в кожній строці.
// Третій параметр визначає елемент в який потрібно таблицю додати.


// let tab = document.getElementById("com");
// function tbl (rows,cols,tags){
//    let table = document.createElement('table');
//     for(let i = 0; i < rows; i++){
//     let tr = document.createElement('tr');
//     for(let y = 0; y < cols; y++){
//         let td = document.createElement('td');
//         td.innerHTML = i.toString() + y.toString();

//         tr.appendChild(td);
//     }
//     table.appendChild(tr);
// }
// tab.appendChild(table);
// }
// tbl(5,7,tab)


// - Створити 3 инпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
// При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додатковачастина для завдання)

// - Напишите «Карусель» – ленту изображений, которую можно листать влево-вправо нажатием на стрелочки.


// let td = document.getElementById("td");
// let tr = document.getElementById('tr');
// let text = document.getElementById('what');

// let but = document.getElementById('byt');

// let tab = document.getElementById("com");
// but.onclick = ev => {
    
// function tbl (rows,cols,tags){
//     rows = td.value;
//     cols = tr.value;
//     tags = text.value;
//    let table = document.createElement('table');
//     for(let i = 0; i < rows; i++){
//     let tr = document.createElement('tr');
//     for(let y = 0; y < cols; y++){
//         let td = document.createElement('td');
//         td.innerHTML = i.toString() + y.toString();

//         tr.appendChild(td);
//     };
//     table.appendChild(tr);
// };
// tab.appendChild(table);
// };
// tbl()
// };

// - Сворити масив не цензцрних слів.
// Сворити інпут текстового типу.
// Якщо людина вводить слово і воно міститься в масиві не цензурних слів
// кинути алерт з попередженням.
// Перевірку робити при натисканні на кнопку

 // inp.value == `${arr[1]}` ||
    // inp.value == `${arr[2]}` ||
    // inp.value == `${arr[3]}` ||
    // inp.value == `${arr[4]}`){ 

// let arr = ["xxx1","xxx2","xxx3","xxx4","xxx5"];   

// let but = document.getElementById('check');
// let inp = document.getElementById('lex');

// but.onclick = ev => {
//     for (let i in arr) {
//     if (inp.value == `${arr[i]}`){
//         alert("noooo")};
//     };
//     };

// - Сворити масив не цензцрних слів.
// Сворити інпут текстового типу.
// Потрібно перевіряти чи не містить ціле речення в собі погані слова.
// Кинути алерт з попередженням у випадку якщо містить.
// Перевірку робити при натисканні на кнопку

// let arr = ["xxx1","xxx2","xxx3","xxx4","xxx5"];   

// let but = document.getElementById('check');
// let inp = document.getElementById('lex');

// but.onclick = ev => {
//     for (let i in arr) {
//     if (inp.value.includes(`${arr[i]}`)){
//         alert("noooo")};
//     };
//     };

// -- создать скрипт, который берет считывает на странице (rules.html) текст и делает сбоку меню-оглавление по всем заголовкам которые есть в тексте.
// При клике на пункт оглавления вы должны отправляться к этому пункту в тексте

// let h2 = document.getElementsByTagName('h2');
// let content = document.getElementById('content');
// let wrap = document.getElementById('wrap');

// let ul = document.createElement('ul');
// for(let i = 0; i < h2.length; i++){
//     let li = document.createElement('li');
//     let a = document.createElement('a');
//     let k = "k"+i;
//     a.href = '#'+k;
//     h2[i].setAttribute('id',k);
//     a.innerHTML = h2[i].innerText;
//     li.appendChild(a);
//     ul.appendChild(li);
// }
// content.appendChild(ul);

// content.style.float = 'left';
// wrap.style.float = 'left';

// -- взять массив пользователей
// let usersWithAddress = [
//                 {id:1,name: 'vasya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
//                 {id:2,name: 'petya', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 1}},
//                 {id:3,name: 'kolya', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 121}},
//                 {id:4,name: 'olya', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 90}},
//                 {id:5,name: 'max', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 115}},
//                 {id:6,name: 'anya', age: 31, status: false, address: {city: 'Kyiv', street: 'Shevchenko', number: 2}},
//                 {id:7,name: 'oleg', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 22}},
//                 {id:8,name: 'andrey', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 43}},
//                 {id:9,name: 'masha', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 12}},
//                 {id:10,name: 'olya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
//                 {id:11,name: 'max', age: 31, status: true, address: {city: 'Ternopil', street: 'Shevchenko', number: 121}}
//             ];
// Создать три чекбокса. Каждый из них активирует фильтр для вышеуказаного массива. Фильтры могут работать как вместе так и по отдельности.
// 1й - отфильтровывает пользователей со статусом false (осталяет со статусом false)
// 2й - оставляет старше 29 лет включительно
// 3й - оставляет тех у кого город киев
// Данные выводить в документ

// let content = document.getElementById('divka');
// let div = document.createElement('div');

// div.appendChild(renderContent(usersWithAddress));

// let inp1 = document.createElement('input');
// let inp2 = document.createElement('input');
// let inp3 = document.createElement('input');

// let label1 = document.createElement('label');
// let label2 = document.createElement('label');
// let label3 = document.createElement('label');

// let but = document.createElement('button');

// label1.innerText = "осталяет со статусом false";
// label2.innerText = "оставляет старше 29 лет включительно";
// label3.innerText = "оставляет тех у кого город киев";

// but.innerText = "check";

// inp1.type = 'checkbox';
// inp2.type = 'checkbox';
// inp3.type = 'checkbox';

// content.appendChild(div);

// content.appendChild(label1);
// content.appendChild(inp1);
// content.appendChild(label2);
// content.appendChild(inp2);
// content.appendChild(label3);
// content.appendChild(inp3);

// content.appendChild(but);

// but.onclick = ev => {
//     let arr = JSON.parse(JSON.stringify(usersWithAddress))
// if(inp1.checked) arr = arr.filter(value => !value.status);
// if(inp2.checked) arr = arr.filter(value => value.age >= 29);
// if(inp3.checked) arr = arr.filter(value => value.address.city === 'Kyiv');

// div.innerHTML = " ";
// div.appendChild(renderContent(arr));
// };

// function renderContent(mass) {
//     let main = document.createElement('div');
//     mass.forEach(item => {
//         let div = document.createElement('div');
//         let h3 = document.createElement('h3');

//         div.innerHTML = JSON.stringify(item);

//         main.appendChild(div);
//     });
//     return main
// };
