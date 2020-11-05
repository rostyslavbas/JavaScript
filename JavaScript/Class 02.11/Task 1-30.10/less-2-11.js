// Взяти файл template_2.html та працювати в ньому
// - Напишіть код, який :
// -- змінює колір тексту елемнту з ід main_header на будь-який інший
// let sm = document.getElementById("main_header");
// sm.style.color = "red";

// -- робить шириниу елементу ul 400 пікселів
// let re = document.getElementsByTagName("ul");
// for (let rec of re) {
//     rec.style.width = "400px";
// };

// -- робить шириниу всіх елементів з класом linkList шириною 50%
// let sh = document.getElementsByClassName("linkList");
// for (let it of sh) {
//     it.style.width = "50%"
    
// };

// -- отримує текст який зберігається в елементі з класом listElement2
// let tx = document.getElementsByClassName("listElement2");
// for (let tt of tx) {
//     console.log(tt.innerText);
    
// };


// -- отримує всі елементи li та змінює ім колір фону на сірий
// let lis = document.getElementsByTagName("li");
// for (lishki of lis) {
//     lishki.style.backgroundColor = "grey";
// };

// -- отримує всі елементи 'a' та додає їм клас anchor
// let aa = document.getElementsByTagName("a");
// for (ash of aa) {
//     console.log(ash);
//     ash.classList.add("anchor");
// };

// -- отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3, змінює йому розмір тексту на 40 пікселів
// let aaa = document.getElementsByTagName("a");
// for (let it of aaa) {
//     if (it.innerText = "link3"){
//         it.style.fontSize = "40px";
//     };
    
// };

// -- отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a
// let vs = document.getElementsByTagName("a");
// for (let xx of vs) {
//     let xxx = xx.innerText;
//     xx.classList.add(xxx);
    
// };


// -- отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()
// let colore = prompt("kolir");
// let c = document.getElementsByClassName("sub-header");
// for (let elem of c) {
// elem.style.color = colore;
    
// };



// -- отримує всі елементи 'sub-header' та змінює колір тексту у видаку якщо текст елемнту = content 2 segment . Колір отримати з prompt()
// let calara = prompt("text your color");
// let mt = document.getElementsByClassName("sub-header");
// for (let met of mt) {
//     if(met.innerText = "content 2 segment" ){
//         met.style.color = calara;
//     };
    
// };

// -- отримує елемент з класом content_1 та заміняє  в ньому тест на довільний. Текст отримати з prompt()
// let text = prompt("any text");
// let con = document.getElementsByClassName("content_1");
// for (const elm of con) {
//     elm.innerText = text
// };

// -- отримати елементи p та змінити їм paddin на довільне значення
// let pe = document.getElementsByTagName("p");
// for (const p of pe) {
//     p.style.padding = "100px"
    
// };

// -- отримати елементи з класом text2 та змінити їм текст на довільне значення
// let ta = document.getElementsByClassName("text2");
// for (const iterator of ta) {
//     iterator.innerText = "ajsfjdjadjfj";
// };