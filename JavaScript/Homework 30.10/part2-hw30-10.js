// // - создать 5 объектов. В каждом объекте не менее 3х полей. Все объекты разные по набору полей. (Т.е поле name  должно присутствовать только 1 раз в одном объекте )

// let obj1 = {
//     name: "rost",
//     surname: "bar",
//     age: 21
// };
// let obj2 = {
//     country: "uk",
//     quality: "good",
//     size: "big"
// };
// let obj3 = {
//     hello: "hi",
//     color: "black",
//     fashion: "no"
// };
// let obj4 = {
//     number: 4,
//     century: "21-st",
//     adress: "usa"
// };
// let obj5 = {
//     location: "rayon",
//     group: "shv",
//     style: "nazi"
// };

// // - создать 5 объектов с полностью разным набором полей. В каждом объекте должен присутсвовать массив и внутренний объект. Опишите что угодно, машину, картину, болт... Пример : let man = { name: 'kokos', skills : ['java','js'] , wife: { name: 'cherry' } };
//     let obj6 = {
//         bj6: "obje6",
//         author: ["books","music"],
//         phil: {antiq: "aristotele"}
//     };
//     let obj7 = {
//         bj7: "obje7",
//         art1: ["ins1","ins2"],
//         art2: {duge: "verygood"}
//     };
//     let obj8 = {
//         bj8: "obje8",
//         j8art1: ["j8is1","j8ins2"],
//         j8art2: {j8ins: "black"}
//     };
//     let obj9 = {
//         bj9: "obje9",
//         j9art1: ["j9ins1","j9ins2"],
//         j9art2: {j9ins: "red"}
//     };
//     let obj10 = {
//         bj10: "obje10",
//         j10art1: ["j10ins1","j10ins2"],
//         j10art2: {j10ins: "purple"}
//     };




// // - При помощи for in вывести все ключи всех объектов из задания 1 и 2
// for(keys1 in obj1){
//     console.log("key",keys1);
// };
// for(keys2 in obj2){
//     console.log("key",keys2);
// };
// for(keys3 in obj3){
//     console.log("key",keys3);
// };
// for(keys4 in obj4){
//     console.log("key",keys4);
// };
// for(keys5 in obj5){
//     console.log("key",keys5);
// };
// for(keys6 in obj6){
//     console.log("key",keys6);
// };
// for(keys7 in obj7){
//     console.log("key",keys7);
// };
// for(keys8 in obj8){
//     console.log("key",keys8);
// };
// for(keys9 in obj9){
//     console.log("key",keys9);
// };
// for(keys10 in obj10){
//     console.log("key",keys10);
// };


// // - При помощи Object.keys вывести все ключи всех объектов из задания 1 и 2

// console.log(Object.keys(obj1));
// console.log(Object.keys(obj2));
// console.log(Object.keys(obj3));
// console.log(Object.keys(obj4));
// console.log(Object.keys(obj5));
// console.log(Object.keys(obj6));
// console.log(Object.keys(obj7));
// console.log(Object.keys(obj8));
// console.log(Object.keys(obj9));
// console.log(Object.keys(obj10));

// // - Создать массив из 10 объектов cars и заполнить его машинами с полями модель, год выпуска, мощность, цвет. (Значаения полей могу быть выдуманными)
// let cars = [
//      {model: "bmw", year: 2019, hp: 500, color: "blue"},
//      {model: "vw", year: 2018, hp: 320, color: "brown"},
//      {model: "mercedes", year: 2017, hp: 330, color: "grey"},
//      {model: "audi", year: 2016, hp: 290, color: "purple"},
//      {model: "lada", year: 1989, hp: 40, color: "milk"},
//      {model: "renault", year: 2014, hp: 120 , color: "black"},
//      {model: "toyota", year: 2020, hp:390, color: "cherry-red"},
//      {model: "traktor", year: 1945, hp:999 , color: "theBest"},
//      {model: "lanos", year: 2001, hp: 80, color: "silver"},
//      {model: "tram", year: 2000, hp:100 , color: "green"}
// ];
// // - Создать массив объектов cities и заполнить его объектами с полями название, популяция, страна, регион. (Значаения полей могу быть выдуманными)
// let cities = [
//     {name: "Lviv", population: 900000, country: "Ukraine", region: "Lviv region"},
//     {name: "Stryi", population: 100000, country: "Ukraine", region: "Lviv region2"},
//     {name: "Drogobych", population: 90000, country: "Ukraine", region: "Lviv region3" },
//     {name: "Skole", population: 800000, country: "Ukraine", region: "Lviv region4"},
//     {name: "Zhovkva", population: 700000, country: "Ukraine", region: "Lviv region5"}
// ];
// // - Создать массив объектов cars и заполнить его машинами с полями модель, год выпуска, мощность, цвет, водитель. Водитель является отдельным объектом с полями имя, возраст, пол, стаж.
// let cars2 = [
//     {model: "nissan", year: 2004, hp: 140 , color: "light-brown", driver:{name:"vova", age: 23, sex: "male", experience: 3}},
//     {model: "dacia", year: 2006, hp:90, color: "golden", driver:{name:"victor", age: 25, sex: "male" , experience: 5}},
//     {model: "honda", year: 2020, hp:400 , color: "white", driver:{name:"vika" , age: 19, sex: "female", experience: 1}},
//     {model: "kia", year: 2009, hp: 180, color: "orange", driver:{name: "lucas" , age: 29, sex: "male", experience: 7}},
//     {model: "lamba", year: 2000, hp:1000 , color: "gradient", driver:{name:"nastya" , age: 18, sex: "female", experience: 1}}
// ];
// // - проитерировать каждый массив из задания 5,6,7 при помощи while.
// let x=0;
// while(x<cars.length){
//     const allcars = cars[x];
//     console.log(allcars);
//     x++;
// };

// let y=0;
// while(y<cities.length){
//     const allcities = cities[y];
//     console.log(allcities);
//     y++;
// };

// let z=0;
// while(z<cars2.length){
//     const allcars2 = cars2[z];
//     console.log(allcars2);
//     z++;
// };

// // - проитерировать каждый массив из задания 5,6,7 при помощи for .
// for (let x = 0; x<cars.length; x++) {
//     console.log(cars[x]);
// };
// for (let y = 0; y < cities.length; y++) {
//     console.log(cities[y]);   
// };
// for (let z = 0; z < cars2.length; z++) {
//     console.log(cars2[z]);
//      };

// // - проитерировать каждый массив из задания 5,6,7 при помощи  for of.
// for (const iterator of cars) {
//     console.log(iterator);
// };
// for (const iterato2 of cities) {
//     console.log(iterato2);
// };
// for (const iterator3 of cars2) {
//     console.log(iterator3);
// };
// // // - взять объекты из задания 1 и превратить каждый в json.

// let json1 = JSON.stringify(obj1);
// console.log(json1);
// let json2 = JSON.stringify(obj2);
// console.log(json2);
// let json3 = JSON.stringify(obj3);
// console.log(json3);
// let json4 = JSON.stringify(obj4);
// console.log(json4);
// let json5 = JSON.stringify(obj5);
// console.log(json5);
// // - взять json из задания 11 и превратить их обратно в объекты.

// let jsonback1 = JSON.parse(json1);
// console.log(jsonback1);
// let jsonback2 = JSON.parse(json2);
// console.log(jsonback2);
// let jsonback3 = JSON.parse(json3);
// console.log(jsonback3);
// let jsonback4 = JSON.parse(json4);
// console.log(jsonback4);
// let jsonback5 = JSON.parse(json5);
// console.log(jsonback5);
// // - взять массив из задания 5,в цикле перебрать его объекты превратив их в json .

// let jsonmass0 = JSON.stringify(cars[0]);
// console.log(jsonmass0);
// let jsonmass1 = JSON.stringify(cars[1]);
// console.log(jsonmass1);
// let jsonmass2 = JSON.stringify(cars[2]);
// console.log(jsonmass2);
// let jsonmass3 = JSON.stringify(cars[3]);
// console.log(jsonmass3);
// let jsonmass4 = JSON.stringify(cars[4]);
// console.log(jsonmass4);
// let jsonmass5 = JSON.stringify(cars[5]);
// console.log(jsonmass5);
// let jsonmass6 = JSON.stringify(cars[6]);
// console.log(jsonmass6);
// let jsonmass7 = JSON.stringify(cars[7]);
// console.log(jsonmass7);
// let jsonmass8 = JSON.stringify(cars[8]);
// console.log(jsonmass8);
// let jsonmass9 = JSON.stringify(cars[9]);
// console.log(jsonmass9);

// //Увесь масив:
// for (const iterator2 of cars) {
//     let gohome = JSON.stringify(iterator2);
//     console.log(gohome);  
// };

// // - взять массив из задания 6,в цикле перебрать его объекты превратив их в json .
// let jsonmas0 = JSON.stringify(cities[0]);
// console.log(jsonmas0);
// let jsonmas1 = JSON.stringify(cities[1]);
// console.log(jsonmas1);
// let jsonmas2 = JSON.stringify(cities[2]);
// console.log(jsonmas2);
// let jsonmas3 = JSON.stringify(cities[3]);
// console.log(jsonmas3);
// let jsonmas4 = JSON.stringify(cities[4]);
// console.log(jsonmas4);

// // Увесь масив:
// for (const iterator of cities) {
//     let finish = JSON.stringify(iterator);
//     console.log(finish);
// };

// // - взять массив из задания 7,в цикле перебрать его объекты превратив их в json и сразу скоприовать в новый массив.
// for (const iterator3 of cars2) {
//     let massa = JSON.stringify(iterator3);
//     let newmass = JSON.parse(massa);
//     console.log(newmass);   
// };

// // - Создать массив пользователей. У каждого пользователя обязательно должено быть поле skills которое является массивом. Проитерировать массив пользователей и в каждом пользователе проитерировать его массив skills

// let ussers = [
//     {ussname: "vard", age: 12, skills:["lang","other"]},
//     {ussname: "adsdjf", age: 23 , skills:["shs","sdjsjd"]},
//     {ussname: "afrok", age: 14, skills:["vuv, 'sds"]},
//     {ussname: "hek", age: 99, skills:["something", "nothing"]},
//     {ussname: "yup", age: 2, skills:["crying","screaming"]}
// ];

// for (const ussname1 of ussers) {
//     console.log(ussname1);
//     for (const sk of ussname1.skills) {
//         console.log(sk);
//     }
    
// };


// // - Создать массив пользователей. У каждого пользователя обязательно должено быть поле skills которое является массивом. Проитерировать массив пользователей и в каждом пользователе проитерировать его массив skills. Скопировать все skills всех пользователей в отедльный массив

// let ussers = [
//     {ussname: "vard", age: 12, skills:["lang","other"]},
//     {ussname: "adsdjf", age: 23 , skills:["shs","sdjsjd"]},
//     {ussname: "afrok", age: 14, skills:["vuv, 'sds"]},
//     {ussname: "hek", age: 99, skills:["something", "nothing"]},
//     {ussname: "yup", age: 2, skills:["crying","screaming"]}
// ];

// for (const ussname1 of ussers) {
//     console.log(ussname1);
//     for (const sk of ussname1.skills) {
//         console.log(sk);
        
//         let otdmass = [sk];
// console.log(otdmass);
//     }
    
// };




// // - За допомогою 2х циклів циклів проітеррувати  даний масив і масив кожного об'єкта.
//  let users = [
//      {name: 'vasya', age: 31, status: false, skills: ['java', 'js']},
//      {name: 'petya', age: 30, status: true, skills: ['java', 'js', 'html']}, 
//      {name: 'kolya', age: 29, status: true, skills: ['mysql', ',mongo']}, 
//      {name: 'olya', age: 28, status: false, skills: ['java', 'js']}, 
//      {name: 'max', age: 30, status: true, skills: ['mysql', ',mongo']}
//     ];
// for (const firstcyk of users) {
//     console.log(firstcyk);
//     for (const secondcyk of firstcyk.skills) {
//         console.log(secondcyk);
//     }
// };

//__________________________________________________________________________________________________________________________________________________________________________________________


            			// let users = [{
            			// 	name: 'vasya',
            			// 	age: 31,
            			// 	status: false,
            			// 	address: {city: 'Lviv', country: 'Ukraine', street: 'Shevchenko', houseNumber: 1}
            			// }, {
            			// 	name: 'petya',
            			// 	age: 30,
            			// 	status: true,
            			// 	address: {city: 'New York', country: 'USA', street: 'East str', houseNumber: 21}
            			// }, {
            			// 	name: 'kolya',
            			// 	age: 29,
            			// 	status: true,
            			// 	address: {city: 'Budapest', country: 'Hungary', street: 'Kuraku', houseNumber: 78}
            			// }, {
            			// 	name: 'olya',
            			// 	age: 28,
            			// 	status: false,
            			// 	address: {city: 'Prague', country: 'Czech', street: 'Paster', houseNumber: 56}
            			// }, {
            			// 	name: 'max',
            			// 	age: 30,
            			// 	status: true,
            			// 	address: {city: 'Istanbul', country: 'Turkey', street: 'Mikar', houseNumber: 39}
            			// }, {
            			// 	name: 'anya',
            			// 	age: 31,
            			// 	status: false,
            			// 	address: {city: 'Rio', country: 'Brasil', street: 'Ronaldi', houseNumber: 5}
            			// }, {
            			// 	name: 'oleg',
            			// 	age: 28,
            			// 	status: false,
            			// 	address: {city: 'Montreal', country: 'Canada', street: 'Acusto', houseNumber: 90}
            			// }, {
            			// 	name: 'andrey',
            			// 	age: 29,
            			// 	status: true,
            			// 	address: {city: 'Quebeck', country: 'Canada', street: 'Binaro', houseNumber: 33}
            			// }, {
            			// 	name: 'masha',
            			// 	age: 30,
            			// 	status: true,
            			// 	address: {city: 'Moscow', country: 'Russia', street: 'Gogolia', houseNumber: 1}
            			// }, {
            			// 	name: 'olya',
            			// 	age: 31,
            			// 	status: false,
            			// 	address: {city: 'Portland', country: 'USA', street: 'Forest str', houseNumber: 4}
            			// }, {
            			// 	name: 'max',
            			// 	age: 31,
            			// 	status: true,
            			// 	address: {city: 'Cairo', country: 'Egypt', street: 'Seashore', houseNumber: 45}
            			// }];
// - З масиву users за допомогою циклу витягнути адреси користувачів і записати (скопіювати) їх в інший порожній масив.
//   let adresss = [];
//   for (const adr of users) {
//       adresss.push(adr.address)
      
//   }
//   console.log(adresss);

// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement. Всі данні в одному блоці.


// for (let v of users) {
//     let xxx = document.createElement('div');
//     xxx.innerText = `${v.name} ${v.age} ${v.status}${v.address}`
//     document.body.appendChild(xxx);
// };

// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement, розділивши всі властивості по своїм блокам (div>div*4)
// for (let v2 of users){
//     for (let ad in v2.address) {
//     let xxx2 = document.createElement("div");
//     let xxx3 = document.createElement("div");
//     let xxx4 = document.createElement("div");
//     let xxx5 = document.createElement("div");
//     xxx2.innerText = v2.name;
//     xxx3.innerText = v2.age;
//     xxx4.innerText = v2.status;
//     xxx5.innerText = ad;
//     document.body.appendChild(xxx2);
//     document.body.appendChild(xxx3);
//     document.body.appendChild(xxx4);
//     document.body.appendChild(xxx5);
// }
// };

// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement,
// розділивши всі властивості по своїм блокам , блок з адресою зробити окремим блоком, з блоками для кожної властивості


// for (let i = 0; i < users.lenght; i++) {
// 	let user = users[i];
// 	let div = document.createElement("div");
// 	let name = document.createElement("h3");
// 	let age = document.createElement("p");
// 	let status = document.createElement("p");
// 	let address = document.createElement("div");

// 	for (let item in user.address) {
// 		let temp = document.createElement("div");
// 		temp.innerHTML = user.address[item];
// 		address.appendChild(temp);
// 	}
    
// 		name.innerText = user.name;
// 		age.innerText = user.age;
// 		status.innerText = user.status;

// div.appendChild(name);
// div.appendChild(age);
// div.appendChild(status);
// div.appendChild(address);

// document.body.appendChild(div);



// 	}
   

                        
// // - Дано 2 масиви з рівною кількістю об'єктів.
// // Масиви:
//             let usersWithId = [
//             {id: 1, name: 'vasya', age: 31, status: false},
//             {id: 2, name: 'petya', age: 30, status: true}, 
//             {id: 3, name: 'kolya', age: 29, status: true}, 
//             {id: 4, name: 'olya', age: 28, status: false},];

//             let citiesWithId = [
//                 {user_id: 3, country: 'USA', city: 'Portland'}, 
//                 {user_id: 1, country: 'Ukraine', city: 'Ternopil'}, 
//                 {user_id: 2, country: 'Poland', city: 'Krakow'}, 
//                 {user_id: 4, country: 'USA', city: 'Miami'},];

// // З'єднати в один об'єкт користувача та місто з відповідними "id" та "user_id" .
// for (const bb1 of usersWithId) {
//     for (const bb2 of citiesWithId) {
//         if(bb1.id === bb2.user_id){
//             bb1.adress = bb2;
//         }
        
//     }
    
// };
// // Записати цей об'єкт в новий масив
// // Частковий приклад реультату:
// // let usersWithCities = [{id: 1, name: 'vasya', age: 31, status: false, address: {user_id: 1, country: 'Ukraine', city: 'Ternopil'}}....]

// let together = JSON.stringify(usersWithId);
// let newmas = [JSON.parse(together)];

// console.log(newmas);


// - створити розмітці блок з id, class та текстом в середені. Зчитати окремо цей текст з селекторів по id , class та тегу
// let x = document.getElementById("content");
// let y = x.innerText;
// console.log(y);

// let z = document.getElementsByClassName("rules rule1");
// for (let n of z) {
// 	console.log(n);
// };

// let k = document.getElementsByTagName("div");
// for (const l of k) {
// console.log(l);	
// };


// - змінити цей текст використовуючи селектори id, class,  tag
// let b = document.getElementById("content");
// b.innerText = "tattatta";
	

// let i = document.getElementsByClassName("rules rule1");
// for (let p of i) {
// 	p.innerText= "blalalalalalalala";
// };

// let u = document.getElementsByTagName("div");
// for (let r of u) {
// 	r.innerText = "trajajajajajaj"
// };

// - змінити висоту та ширину блоку використовуючи селектори id, class,  tag
// let b = document.getElementById("content");
// b.style.width = ("100px");
// b.style.height = ("200px");

// let i = document.getElementsByClassName("rules rule1");
// for (let p of i) {
// 	p.style.width = ("100px");
// 	p.style.height = ("200px");
// };

// let u = document.getElementsByTagName("div");
// for (let r of u) {
// 	r.style.width = ("100px");
// 	r.style.height = ("200px");
// };

// - за допомоги document.createElement та appendChild створити таблицю на 1 рядок з трьома ячейками всередені
// let tb = document.createElement("table");
// let tr = document.createElement("tr");
// let td1 = document.createElement("td");
// let td2 = document.createElement("td");
// let td3 = document.createElement("td");

// tr.appendChild(td1);
// tr.appendChild(td2);
// tr.appendChild(td3);

// tb.appendChild(tr);
// document.body.appendChild(tb);

// - за допомоги document.createElement, appendChild та циклу створити таблицю на 10 рядків з трьома ячейками всередені
// let cs = document.createElement("table");

// for (let x = 0; x < 10; x++) {
// 	let tr = document.createElement("tr");
// for (let y = 0; y < 3; y++) {
// 	let td = document.createElement("td");
// 	tr.appendChild(td);
// }
// cs.appendChild(tr);
// }
// document.body.appendChild(cs);



// - за допомоги document.createElement, appendChild та 2х циклів створити таблицю на 10 рядків з 5 ячейками всередені
// let cs = document.createElement("table");

// for (let x = 0; x < 10; x++) {
// 	let tr = document.createElement("tr");
// for (let y = 0; y < 5; y++) {
// 	let td = document.createElement("td");
// 	tr.appendChild(td);
// }
// cs.appendChild(tr);
// }
// document.body.appendChild(cs);



// - за допомоги document.createElement, appendChild та 2х циклів створити таблицю на n рядків з m ячейками всередені. n та m отримати з prompt

// let cs = document.createElement("table");
// let n = prompt("ryadky");
// let m = prompt("yachey");
// for (let x = 0; x < n; x++) {
// 	let tr = document.createElement("tr");
// for (let y = 0; y < m; y++) {
// 	let td = document.createElement("td");
// 	tr.appendChild(td);
// }
// cs.appendChild(tr);
// }
// document.body.appendChild(cs);


// --Завантажити з мережі будь-який шаблон сайту. Підключити до нього свій скріпт-файл. У файлі прописати наступні доступи та дії
//  - знайти всі елементі, які мають class
// let el = document.getElementsByTagName("*");
// for (const xx of el) {
// 	if (xx.getAttribute("class"))
// 	console.log(xx);
// };

// //  - знайти всі параграфи ,та змінити текст на hello oktenweb!

// let el = document.getElementsByTagName("p");
// for (let xx of el) {
//   xx.innerText = "hello oktenweb"
// };
// //  - знайти всі div та змінити ім колір на червоний
// let dv = document.getElementsByTagName("div");
// for (let zc of dv) {
// 	zc.style.color="red"
// };