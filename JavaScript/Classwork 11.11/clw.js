// =============================================
// =============================================
// =============КЛАССНАЯ РАБОТА=================
// =============================================
// =============================================




// let cars = [ 
// {producer:"subaru",model: "wrx",year: 2010, color:"blue",type: "sedan",engine: "ej204x",volume: 2,power: 400}, 
// {producer:"subaru",model: "legacy",year: 2007, color:"silver",type: "sedan",engine: "ez30",volume: 3,power: 250}, 
// {producer:"subaru",model: "tribeca",year: 2011, color:"white",type: "jeep",engine: "ej20",volume: 2,power: 300}, 
// {producer:"subaru",model: "leone",year: 1998, color:"yellow",type: "sedan",engine: "ez20x",volume: 2,power: 140}, 
// {producer:"subaru",model: "impreza",year: 2014, color:"red",type: "sedan",engine: "ej204x",volume: 2,power: 200}, 
// {producer:"subaru",model: "outback",year: 2014, color:"red",type: "hachback",engine: "ej204",volume: 2,power: 165}, 
// {producer:"bmw",model: "115",year: 2013, color:"red",type: "hachback",engine: "f15",volume: 1.5,power: 120}, 
// {producer:"bmw",model: "315",year: 2010, color:"white",type: "sedan",engine: "f15",volume: 1.5, power: 120}, 
// {producer:"bmw",model: "650",year: 2009, color:"black",type: "coupe",engine: "f60",volume: 6,power: 350}, 
// {producer:"bmw",model: "320",year: 2012, color:"red",type: "sedan",engine: "f20",volume: 2,power: 180}, 
// {producer:"mercedes",model: "e200",year: 1990, color:"silver",type: "sedan",engine: "eng200",volume: 2,power: 180}, 
// {producer:"mercedes",model: "e63",year: 2017, color:"yellow",type: "sedan",engine: "amg63",volume:3,power: 400}, 
// {producer:"mercedes",model: "c250",year: 2017, color:"red",type: "sedan",engine: "eng25",volume: 2.5,power: 230} ];

// Відфільтрувати масив за наступними крітеріями :
// - двигун більше 3х літрів

// let c = cars.filter(function(x){
//     return(x.volume > 3)
// });
// console.log(c)

// - двигун = 2л

// let d = cars.filter(function(v){
//     return(v.volume == 2);
// });
// console.log(d)

// - виробник мерс

// let r = cars.filter(function(z){
//     return(z.producer == "mercedes")
// });
// console.log(r);

// - двигун більше 3х літрів + виробник мерседес

// let dub = cars.filter(function(e){
//     return(e.producer === "mercedes" && e.volume >= 3)
// });
// console.log(dub)

// - двигун більше 3х літрів + виробник субару

// let sub = cars.filter(function(c){
//     return(c.volume >= 3 && c.producer == "subaru")
// });
// console.log(sub);

// - сили більше ніж 300

// let h = cars.filter(function(f){
//     return(f.power > 300)
// });
// console.log(h);

// - сили більше ніж 300 + виробник субару

// let arr = cars.filter(function(x){
//     return(x.power > 300 && x.producer == "subaru")
// });
// console.log(arr);

// - мотор серіі ej   (?)

// let arr = cars.filter(function(x){
//     return(x.engine[0] == "e" && x.engine[1] == "j")
// });
// console.log(arr)

// - сили більше ніж 300 + виробник субару + мотор серіі ej

// let arr = cars.filter(function(x){
//     return(x.power > 300 && x.producer == "subaru" && x.engine[0] == "e" && x.engine[1] == "j")
// });
// console.log(arr);

// - двигун меньше 3х літрів + виробник мерседес
// let arr = cars.filter(function(x){
//     return(x.volume < 3 && x.producer == "mercedes")
// });
// console.log(arr);

// - двигун більше 2л + сили більше 250

// let arr = cars.filter(function(x){
//     return(x.volume > 2 && x.power > 250)
// });
// console.log(arr);


// - сили більше 250  + виробник бмв

// let arr = cars.filter(function(x){
//     return(x.power > 250 && x.producer == "mercedes")
// });
// console.log(arr);


// - взять слдующий массив
//  let usersWithAddress = [
//      {id: 1, name: 'vasya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}}, 
//      {id: 2, name: 'petya', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 1}}, 
//      {id: 3, name: 'kolya', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 121}}, 
//      {id: 4, name: 'olya', age: 28, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 90}}, 
//      {id: 5, name: 'max', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 115}}, 
//      {id: 6, name: 'anya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 2}}, 
//      {id: 7, name: 'oleg', age: 28, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 22}}, 
//      {id: 8, name: 'andrey', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 43}}, 
//      {id: 9, name: 'masha', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 12}}, 
//      {id: 10, name: 'olya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}}, 
//      {id: 11, name: 'max', age: 31, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 121}}];

// -- отсортировать его по id пользователей

// let arr = usersWithAddress.sort((a,b)=> a.id - b.id);
// console.log(arr)

// -- отсортировать его по id пользователей в обратном опрядке

// let arr = usersWithAddress.sort((a,b)=> b.id-a.id);
// console.log(arr)

// -- отсортировать его по возрасту пользователей

// let arr = usersWithAddress.sort((a, b)=> a.age - b.age);
// console.log(arr);

// -- отсортировать его по возрасту пользователей в обратном порядке

// let arr = usersWithAddress.sort((a,b)=> b.age - a.age);
// console.log(arr);

// -- отсортировать его по имени пользователей

// let arr = usersWithAddress.sort(function(a,b){
//     return a.name.localeCompare(b.name);
// });
// console.log(arr)


// -- отсортировать его по имени пользователей в обратном порядке

// let arr = usersWithAddress.sort(function(a,b){
//     return b.name.localeCompare(a.name);
// });
// console.log(arr);

// -- отсортировать его по названию улицы  в алфавитном порядке

// let arr = usersWithAddress.sort(function(a,b){
//     return a.address.street.localeCompare(b.address.street)
// });
// console.log(arr);

// -- отсортировать его по номеру дома по возрастанию

// let arr = usersWithAddress.sort((a,b)=> a.address.number - b.address.number);
// console.log(arr)

// -- отфильтровать (оставить) тех кто младше 30

// let arr = usersWithAddress.filter(function(x){
//     return(x.age < 30)
// });
// console.log(arr);

// -- отфильтровать (оставить) тех у кого отрицательный статус

// let arr = usersWithAddress.filter(function(x){
//     return(x.status == false)
// });
// console.log(arr);

// -- отфильтровать (оставить) тех у кого отрицательный статус и младше 30 лет

// let arr = usersWithAddress.filter(function(x){
//     return(x.status == false && x.age < 30)
// });
// console.log(arr);

// -- отфильтровать (оставить) тех у кого номер дома четный

// let arr = usersWithAddress.filter(function(x){
//     return!(x.address.number % 2)
// });
// console.log(arr);


