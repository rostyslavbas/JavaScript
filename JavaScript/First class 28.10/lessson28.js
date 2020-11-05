//CLASS
//1.Определите переменные str, num, flag и txt со значениями «Привет», 123, true, «true».
//При помощи оператора typeof убедитесь, что значения переменных принадлежат типам: string, number и boolean.

//let str = ("Привіт");
//let num = (123);
//let flag = (true);
//let txt = ("true")

//console.log(typeof str);
//console.log(typeof num);
//console.log(typeof flag);
//console.log(typeof txt);

//2. Создайте переменные a1, a2, a3, a4, a5. При помощи математических операторов (сложение, вычитание и т.д.) найдите значения выражений:
//5 + 3,
//5 - 3,
//5 * 3,
//5 / 3,
//5 % 3
//поместив результат каждого выражения в соответствующую переменную. Например, let a1 = 5 + 3.

//let a1 = 5 + 3;
//let a2 = 5 - 3;
//let a3 = 5 * 3;
//let a4 = 5 / 3;
//let a5 = 5 % 3;

//3. Создайте переменные a6, a7, a8, a9, a10. Поместите в них результат выражений:
//5 % 3,
//3 % 5,
//5 + '3',
//'5' - 3,
//75 + 'кг'

//let a6 = 5 % 3;
//let a7 = 3 % 5;
//let a8 = (5 + '3');
//let a9 = ('5' - 3);
//let a10 = 75 + 'кг';

//4. Напишите код, который находит площадь прямоугольника высота 23см. ( переменная height),
//шириной 10см (переменная width), значение площади должно хранится в числовой переменной s.

//let height = 23;
//let width = 10;
//let s = (height*width);

//console.log(s);

//5. Напиши код, который находит объем цилиндра высотой 10м (переменная heightC) и диаметром основания 4м (dC),
//результат поместите в переменную v.

//let heightC = 10;
//let dc = 4;
//let v = (Math.PI*dc*heightC);

//console.log(v);

//6. У прямоугольного треугольника две стороны n (со значением 3) и m (со значением 4).
//Найдите гипотенузу k по теореме Пифагора (нужно использовать функцию Math.pow(число, степень) или оператор возведения в степень ** ).

//let n = 3;
//let m = 4;
//let kv = (Math.pow (n, 2))+(Math.pow (m, 2));
//let k = (Math.sqrt (kv));

//console.log (k);

//7. Напишите скрипт, который выводит "Hello world", создавши переменную str и выводить спомощью document.write, alert и console.log

//let str = "Hello world";

//document.write(str);
//alert(str);
//console.log(str);

//8. Вывести в окно браузера при помощи метода alert() следующие данные: Ваше ФИО, возраст, хобби (каждой на новой строки спомощью \n).

//let aleert = ("Barabash Rostyslav Ivanovych\n 21\n music\n");

//alert(aleert);

//9. Создать 4 переменные с использованием ключевого слова let с именами str1, str2, str3, concatenation.
//Переменной str1 присвоить фразу ‘Кто ‘, str2 – ‘ты ‘, str3 – ‘такой?’
//Локальной переменной concatenation присвоить результат конкатенации 3-х строк: str1, str2, str3.
//Вывести в документ содержимое переменной concatenation спомощью document.write

//let str1 = ("Хто");
//let str2 = ("ти");
//let str3 = ("такий?");
//let concatenation = (str1 + str2 + str3);

//document.write(concatenation);

//10. Какие значения выведет в окно браузера следующий фрагмент кода? и почему?
//let str = "20";
//let a = 5;
//document.write(str + a + "<br/>");   
//document.write(str - a + "<br/>");
//document.write(str * "2" + "<br/>");
//document.write(str / 2 + "<br/>");

//1. 25<br/> - в лапках текст
//2. 15<br/> - теж текст
//3. 202<br/> - тут 2 теж в лапках, тобто тип змінної string
//4. 10<br/> - те саме що в 1 і 2

//11. Какие значения выведет в окно консоли следующий фрагмент кода если его поместить в console.log?
//parseInt("3.14")
//parseInt("-7.875")
//parseInt("435")
//parseInt("Вася")

//console.log 

//12. С помощью окна ввода, вызываемого методом prompt, пользователь может ввести данные, которые будут использоваться далее, повторите код ниже
//let str = prompt("Enter something", "ho-ho");
//console.log(str);

//let str = ("Hello my dear, how are you?");
//prompt(str);

//13. С помощью окна ввода, вызываемого методом prompt, сделать сложение двух чисел, а вывод результата при помощи метода alert:

//let number1 = prompt("number1");
//let number2 = prompt("number2");
//let number3 = (number1+number2);

//alert(number3);

//14. С помощью окна ввода, вызываемого методом prompt, пользователь последовательно выводит имя, фамилию и возраст, а вам не обходимо вывести строку такого вида
//Доброго вечера Иван Иванов, мои поздравления что вам 32 , а вывод результата при помощи метода alert

let name = prompt("what is your name?");
let surname = prompt("your surname?");
let age = prompt("how old are you?");
alert("Добрий вечір"+name+surname+"вітаю що вам"+age);


