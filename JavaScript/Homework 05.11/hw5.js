

// ==============================================
// -  Створити функцію конструктор для об'єкту який описує теги
// Властивості
//  -назва тегу
//  - опис його дій
//  - масив з атрибутами (2-3 атрибути максимум)
//  Кожен атрибут описати як окремий який буде містити
//  -назву атрибуту
//  -опис дії атрибуту
//  інформацію брати з htmlbook.ru

//  Таким чином описати теги
//  -a
//  -div
//  -h1
//  -span
//  -input
//  -form
//  -option
//  -select
//  Приклад результату
//    {
//         titleOfTag: 'area',
//         action: `Каждый элемент <area> определяет активные области изображения, которые являются ссылками...`,
//         attrs: [
//         {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
//         {/*some props and values*/},
//         {/*...*/},
//         {/*...*/},
//         ]

//    }
// ==============================================

// function X(titleOfTag, action, attrs){
// this.titleOfTag = titleOfTag;
// this.action = action;
// this.attrs = attrs;
// }
// let tag1 = "<a>";
// let act1 = "Тег <a> является одним из важных элементов HTML и предназначен для создания ссылок";
// let atr1 = [
//     {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
//     {titleOfAttr: 'name', actionOfAttr: 'Устанавливает имя якоря внутри документа'},
// ];

// let a = new X(tag1, act1, atr1);
// console.log(a);

// let tag2 = "<div>";
// let act2 = "Элемент <div> является блочным элементом и предназначен для выделения фрагмента документа с целью изменения вида содержимого";
// let atr2 = [
//     {titleOfAttr: 'align', actionOfAttr: 'Задает выравнивание содержимого тега <div>'},
//     {titleOfAttr: 'title', actionOfAttr: 'Добавляет всплывающую подсказку к содержимому'},
// ];

// let div = new X(tag2, act2, atr2);
// console.log(div);

// let tag3 = "<h1>";
// let act3 = "тег <h1> представляет собой наиболее важный заголовок первого уровня";
// let atr3 = [
//     {titleOfAttr: 'align', actionOfAttr: 'Определяет выравнивание заголовка.'},
//     {titleOfAttr: 'class', actionOfAttr: 'Определяет имя класса, которое позволяет связать тег со стилевым оформлением'},
// ];

// let h1 = new X(tag3, act3, atr3);
// console.log(h1);

// let tag4 = "<span>";
// let act4 = "тег <span> предназначен для определения строчных элементов документа";
// let atr4 = [
//     {titleOfAttr: 'contenteditable', actionOfAttr: 'Сообщает, что элемент доступен для редактирования пользователем'},
//     {titleOfAttr: 'contextmenu', actionOfAttr: 'Устанавливает контекстное меню для элемента'},
// ];

// let span = new X(tag4, act4, atr4);
// console.log(span)

// let tag5 = "<input>";
// let act5 = "Тег <input> является одним из разносторонних элементов формы и позволяет создавать разные элементы интерфейса и обеспечить взаимодействие с пользователем";
// let atr5 = [
//     {titleOfAttr: 'accept', actionOfAttr: 'Устанавливает фильтр на типы файлов, которые вы можете отправить через поле загрузки файлов'},
//     {titleOfAttr: 'form', actionOfAttr: 'Связывает поле с формой по её идентификатору'},
// ];

// let input = new X(tag5, act5, atr5);
// console.log(input)

// let tag6 = "<form>";
// let act6 = "Тег <form> устанавливает форму на веб-странице";
// let atr6 = [
//     {titleOfAttr: 'accept-charset', actionOfAttr: 'Устанавливает кодировку, в которой сервер может принимать и обрабатывать данные'},
//     {titleOfAttr: 'action', actionOfAttr: 'Адрес программы или документа, который обрабатывает данные формы'},
// ];

// let form = new X(tag6, act6, atr6);
// console.log(form)

// let tag7 = "<option>";
// let act7 = "Тег <option> определяет отдельные пункты списка, создаваемого с помощью контейнера <select>";
// let atr7 = [
//     {titleOfAttr: 'disabled', actionOfAttr: 'Заблокировать для доступа элемент списка'},
//     {titleOfAttr: 'label', actionOfAttr: 'Указание метки пункта списка'},
// ];

// let option = new X(tag7, act7, atr7);
// console.log(option)

// let tag8 = "<select>";
// let act8 = "Тег <select> позволяет создать элемент интерфейса в виде раскрывающегося списка, а также список с одним или множественным выбором";
// let atr8 = [
//     {titleOfAttr: 'autofocus', actionOfAttr: 'Устанавливает, что список получает фокус после загрузки страницы'},
//     {titleOfAttr: 'ldisabled', actionOfAttr: 'Блокирует доступ и изменение элемента'},
// ];

// let select = new X(tag8, act8, atr8);
// console.log(select)

// ==============================================
// -  Створити класс  для об'єкту який описує теги
// Властивості
//  -назва тегу
//  - опис його дій
//  - масив з атрибутами (2-3 атрибути максимум)
//  Кожен атрибут описати як окремий який буде містити
//  -назву атрибуту
//  -опис дії атрибуту
//  інформацію брати з htmlbook.ru

//  Таким чином описати теги
//  -a
//  -div
//  -h1
//  -span
//  -input
//  -form
//  -option
//  -select
//  Приклад результату
//    {
//         titleOfTag: 'area',
//         action: `Каждый элемент <area> определяет активные области изображения, которые являются ссылками...`,
//         attrs: [
//         {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
//         {/*some props and values*/},
//         {/*...*/},
//         {/*...*/},
//         ]

//    }
// ==============================================
// class Tags {
//     constructor(titleOfTag, action, attrs){
//         this.titleOfTag = titleOfTag;
//         this.action = action;
//         this.attrs = attrs;
//     }
// }
// let a = new Tags("<a>","Тег <a> является одним из важных элементов HTML и предназначен для создания ссылок",[
//     {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
//     {titleOfAttr: 'name', actionOfAttr: 'Устанавливает имя якоря внутри документа'},
// ]);
// console.log(a);

// let div = new Tags("<div>","Элемент <div> является блочным элементом и предназначен для выделения фрагмента документа с целью изменения вида содержимого",[
//     {titleOfAttr: 'align', actionOfAttr: 'Задает выравнивание содержимого тега <div>'},
//     {titleOfAttr: 'title', actionOfAttr: 'Добавляет всплывающую подсказку к содержимому'},
// ]);
// console.log(div);

// let h1 = new Tags("<h1>","тег <h1> представляет собой наиболее важный заголовок первого уровня",[
//     {titleOfAttr: 'align', actionOfAttr: 'Определяет выравнивание заголовка.'},
//     {titleOfAttr: 'class', actionOfAttr: 'Определяет имя класса, которое позволяет связать тег со стилевым оформлением'},
// ]);
// console.log(h1);

// let span = new Tags("<span> ","тег <span> предназначен для определения строчных элементов документа",[
//     {titleOfAttr: 'contenteditable', actionOfAttr: 'Сообщает, что элемент доступен для редактирования пользователем'},
//     {titleOfAttr: 'contextmenu', actionOfAttr: 'Устанавливает контекстное меню для элемента'},
// ]);
// console.log(span);

// let input = new Tags("<input>", "Тег <input> является одним из разносторонних элементов формы и позволяет создавать разные элементы интерфейса и обеспечить взаимодействие с пользователем",[
//     {titleOfAttr: 'accept', actionOfAttr: 'Устанавливает фильтр на типы файлов, которые вы можете отправить через поле загрузки файлов'},
//     {titleOfAttr: 'form', actionOfAttr: 'Связывает поле с формой по её идентификатору'},
// ]);
// console.log(input);

// let form = new Tags("<form>","Тег <form> устанавливает форму на веб-странице",[{titleOfAttr: 'accept-charset', actionOfAttr: 'Устанавливает кодировку, в которой сервер может принимать и обрабатывать данные'},
//     {titleOfAttr: 'action', actionOfAttr: 'Адрес программы или документа, который обрабатывает данные формы'},
// ]);
// console.log(form);

// let option = new Tags("<option>", "Тег <option> определяет отдельные пункты списка, создаваемого с помощью контейнера <select>",[
//     {titleOfAttr: 'disabled', actionOfAttr: 'Заблокировать для доступа элемент списка'},
//     {titleOfAttr: 'label', actionOfAttr: 'Указание метки пункта списка'}]);
// console.log(option);

// let select = new Tags("<select>","Тег <select> позволяет создать элемент интерфейса в виде раскрывающегося списка, а также список с одним или множественным выбором",
// [{titleOfAttr: 'autofocus', actionOfAttr: 'Устанавливает, что список получает фокус после загрузки страницы'},
//     {titleOfAttr: 'ldisabled', actionOfAttr: 'Блокирует доступ и изменение элемента'},
// ]);
// console.log(select);

// ==============================================
// - Створити об'єкт car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
// ==============================================

// let car = {
    
//     model: "toyota",
//     madeIn: "Japan",
//     year: 2019,
//     maxSpeed: 320,
//     v: 2,
//     drive: function(){console.log(`їдемо зі швидкістю ${this.maxSpeed} km/hr`)},
//     info: function(){console.log(`Driver - ${this.vodila}, Model avto - ${this.model}, made in ${this.madeIn}, in ${this.year} year. Maximal speed of this car = ${this.maxSpeed}. Engine volume = ${this.v}`)},
    
//     plusSpeed: function(newSpeed){
// this.maxSpeed += newSpeed
// },
//     newValue: function(newYear){ 
//         this.year += newYear
//     },
//     vodila: 'present',
//     addDriver: function(newDriver){
//        this.vodila += newDriver;
//     }
//     };
    
//     car.plusSpeed(40);
//     car.newValue(1)
//     car.info();
//     car.drive();
//     car.addDriver();

// ==============================================
// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
// ==============================================
// let Cars = function (model, madeIn, year, maxSpeed, obj){
//     this.model = model;
//     this.madeIn = madeIn;
//     this.year = year;
//     this.maxSpeed = maxSpeed;
//     this.obj = obj;
//   } 

//   let model1 = "toyota";
//   let madein1= "japan";
//   let year1= 2019;
//   let maxspeed1 = 320;
//   let ob1 = 2;
//   let Toyota = new Cars(model1, madein1, year1, maxspeed1, ob1);

// let drive = function(){
//     console.log(`їдемо зі швидкістю ${maxspeed1} km/hr`)
// };
// let info = function(){
//     console.log(`Model auto - ${model1}, made in ${madein1}, in ${year1} year. Maximal speed of this car = ${maxspeed1}. Engine volume = ${ob1}`);
// };
// let increaseMaxSpeed = function(newSpeed){
// maxspeed1 += newSpeed;
// };
// let changeYear = function(newValue){
//     year1 += newValue
// };
// let vodel = "kent";
// let addDriver = function(driver){
//    vodel = driver
// }
// addDriver();
// increaseMaxSpeed(20);
// changeYear(3);
// drive();
// info();

// ==============================================
// - Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
// ==============================================

            

// class Carz {
// constructor(model, madeIn, year, maxSpeed, obj, vodila){
//     this.model = model || "noModel";
//     this.madeIn = madeIn || "noMadeIn";
//     this.year = year || "noYear";
//     this.maxSpeed = maxSpeed || "noMaxSpeed";
//     this.obj = obj || "noObj";  
//     this.vodila = vodila;
// }

// }

// let toyota = new Carz("toyota","japan",2019, 320, 2);


// let drive = function(){
//     console.log(`їдемо зі швидкістю ${toyota.maxSpeed} на годину`)
// };
// let info = function(){
//     console.log(`Model auto - ${toyota.model}, made in ${toyota.madeIn}, in ${toyota.year} year. Maximal speed of this car = ${toyota.maxSpeed}. Engine volume = ${toyota.obj}`)
// }
// let x = function(){
//     console.log(toyota.maxSpeed);
// };
// let increaseMaxSpeed = function(newSpeed){
//     toyota.maxSpeed += newSpeed;
//     console.log(`їдемо з новою швидкістю ${toyota.maxSpeed} на годину`)
// };
// let changeYear = function(newYear){
//     toyota.year += newYear;
//     console.log(`машину перевипустять в ${toyota.year}  році`)
// };
// let addDriver = function(driver){
//     toyota.vodila = driver;
//     console.log(`наш новий водій ${toyota.vodila}`)
// }
// x()
// drive();
// info();
// increaseMaxSpeed(30);
// changeYear(20);
// addDriver("стьопа")


// ==============================================
// -створити класс попелюшка з полями ім'я, вік, розмір ноги
// --Створити 10 попелюшок , покласти їх в масив
// --Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
// -- за допоиоги циклу знайти яка попелюшка повинна бути з принцом
// ==============================================
// class Hum{
// constructor(name, age){
//     this.name = name || "noName";
//     this.age = age || "noAge";
// }
// }

// class Popel extends Hum{
//     constructor(name, age, footSize){
//         super(name, age);
//         this.footSize = footSize || "noFootSize";
//     }
// }


// class Prince extends Hum{
//     constructor(name, age, shoeSize){
//         super(name, age);
//         this.shoeSize = shoeSize || "noShoeSize";
//     }
//     findPopel(mass){
// let search = null;
// for (const i of mass) {
//     if(i.footSize === this.shoeSize){
//         search = i;
//     }
// }
// if (search){
//     console.log(`popel name is ${search.name}`)
// }else{
//     console.log("she is not Popel!")
// }
//     }
// }
// let newPopel1 = new Popel("Ppp1", 20, 36);
// let newPopel2 = new Popel("Ppp2", 21, 37);
// let newPopel3 = new Popel("Ppp3", 22, 38);
// let newPopel4 = new Popel("Ppp4", 20, 38);
// let newPopel5 = new Popel("Ppp5", 19, 36);
// let newPopel6 = new Popel("Ppp6", 26, 46);
// let newPopel7 = new Popel("Ppp7", 20, 30);
// let newPopel8 = new Popel("Ppp8", 23, 32);
// let newPopel9 = new Popel("Ppp9", 18, 39);
// let newPopel10 = new Popel("Ppp10", 20, 40);

// let mass = [newPopel1, newPopel2, newPopel3, newPopel4, newPopel5, newPopel6, newPopel7, newPopel8, newPopel9, newPopel10];

// let Princee = new Prince("Vavel", 21, 46);
// Princee.findPopel(mass);


// ==============================================
// -створити функцію конструктор попелюшка з полями ім'я, вік, розмір ноги
// --Створити 10 попелюшок , покласти їх в масив
// --Сторити об'єкт типу "принц" за допомоги функції конструктора з полями ім'я, вік, туфелька яку він знайшов, та функцію "пошук попелюшки"
// -- функція повинна приймати масив попелюшок, та шукає ту котра йому підходить
// ==============================================

// function Popel (name, age, footSize){
//     this.name = name;
//     this.age = age;
//     this.footSize = footSize;
// };

// function Prince (name, age, shoeSize){
//     this.name = name;
//     this.age = age;
//     this.shoeSize = shoeSize;

//     this.findPopel = function(mass){
//         let search = null;
//             for (const i of mass) {
//                 if(i.footSize === this.shoeSize){
//                     search = i;
//                 }
//             }
//             if (search){
//                 console.log(`popel name is ${search.name}`)
//             }else{
//                 console.log("she is not Popel!")
//             }
//                 }
//             };

// let newPopel1 = new Popel("Ppp1", 20, 36);
// let newPopel2 = new Popel("Ppp2", 21, 37);
// let newPopel3 = new Popel("Ppp3", 22, 38);
// let newPopel4 = new Popel("Ppp4", 20, 38);
// let newPopel5 = new Popel("Ppp5", 19, 36);
// let newPopel6 = new Popel("Ppp6", 26, 46);
// let newPopel7 = new Popel("Ppp7", 20, 30);
// let newPopel8 = new Popel("Ppp8", 23, 32);
// let newPopel9 = new Popel("Ppp9", 18, 39);
// let newPopel10 = new Popel("Ppp10", 20, 40);

// let mass = [newPopel1, newPopel2, newPopel3, newPopel4, newPopel5, newPopel6, newPopel7, newPopel8, newPopel9, newPopel10];

// let Princee = new Prince("Vavel", 21, 39);
// Princee.findPopel(mass);