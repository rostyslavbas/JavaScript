
// - создать массив с 20 числами.
// -- при помощи метода sort и колбека  отсортировать массив.
// -- при помощи метода sort и колбека отсортировать массив в ниспадающем напралении.



// let x = [1,2,3,10,4,6,7,20,100,12];
// let y = x.sort((a, b) => a-b)
// console.log(y);

// let y = x.sort((a, b) => b - a);
// console.log(y);

// -- при помощи filter получить числа кратные 3

// let y = x.filter(function (num) {
//     if (num % 3 === 0) {
//         return true;
//     } else {
//         return false;
//     }

// });
// console.log(y);

// -- при помощи filter получить числа кратные 10

// let y = x.filter(function(i){
//     if (i % 10 === 0){
//         return true;
//     } else {
//         return false;
//     }
// });
// console.log(y);


// -- перебрать (проитерировать) массив при помощи foreach()

// x.forEach(element => {
//     console.log(element)
// });

// -- перебрать массив при помощи map() и получить новый массив в котором все значения будут в 3 раза больше

// let y = x.map(function (value) {
//     return value * 3;
// });
// console.log(y);


// - создать массив со словами на 15-20 элементов.

// let x = ["hello", "how", "are", "you", "where", "from", "fone", "solo", "midle", "after", "food", "good", "size", "marwell", "cinema", "house"];

// -- отсортировать его по алфавиту в восходящем порядке.
// let y = x.sort();
// console.log(y)
// -- отсортировать его по алфавиту  в нисходящем порядке.

// let z = x.sort();
// console.log(z);
// let r = x.reverse();
// console.log(r);
// -- отфильтровать слова длиной менее 4х символов

// let less = x.filter(function(l){
//     return(l.length <= 3)
// });
// console.log(less);

// -- перебрать массив при помощи map() и получить новый массив в котором все значения будут со знаком "!" в конце      

// let maper = x.map(function(good){
//     [good+"!"]
// })
// console.log(maper)
// console.log(newMass)

// Все робити через функції масивів (foreach, map ...тд)
// Дан масив :
// let users = [ 
// {name: 'vasya', age: 31, status: false}, 
// {name: 'petya', age: 30, status: true}, 
// {name: 'kolya', age: 29, status: true},
// {name: 'olya', age: 28, status: false}, 
// {name: 'max', age: 30, status: true}, 
// {name: 'anya', age: 31, status: false}, 
// {name: 'oleg', age: 28, status: false},
// {name: 'andrey', age: 29, status: true}, 
// {name: 'masha', age: 30, status: true}, 
// {name: 'olya', age: 31, status: false}, 
// {name: 'max', age: 31, status: true} ];
// - відсортувати його за  віком (зростання , а потім окремо спадання)

// let y = users.sort((user1, user2) => user1.age - user2.age);
// console.log(y)
// let z = users.sort((user1, user2) => user2.age - user1.age);
// console.log(z)

// - відсортувати його за кількістю знаків в імені  (зростання , а потім окремо спадання)

// let v = users.sort((a, b) => a.name.length - b.name.length)
// console.log(v);

// let sp = users.sort((x, y) => y.name.length - x.name.length)
// console.log(sp);

// - пройтись по ньому та додати кожному юзеру поле id - яке характеризує унікальний індентифікатор (По якому принципу його створювати - ваше рішення), 
//та зберегти це в новий масив (первинний масив залишиться без змін)


// let us = JSON.stringify(users);
// let newmass = JSON.parse(us);
// newmass.map(user => {
//     user.id = "";
// });
// newmass.forEach(el => {
//     el.id = `${el.name}`
// });
// console.log(newmass);
// console.log(users);

// - відсортувати його за індентифікатором

// let v = newmass.sort((a, b) => a.id.length - b.id.length)
// console.log(v);

// let sp = newmass.sort((x, y) => y.id.length - x.id.length)
// console.log(sp);

// -- наисать функцию калькулятора с 2мя числами и колбеком

// function calculator(x, y, callback) {
//     let result = callback(x, y);
//     console.log(result)
// }
			
// calculator(15, 20, function (a, b) {
// return a + b;
// });

// -- наисать функцию калькулятора с 3мя числами и колбеком

// function calculator(x, y, z, callback){
//     let res = callback(x, y, z);
//     console.log(res);
// }
// calculator(10,12,10, function(a, b, c){
// return a+b+c;
// });

