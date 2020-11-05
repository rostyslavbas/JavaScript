//--створити масив та вивести його в консоль:
//- з 5 числових значень
//- з 5 стрічкових значень
//- з 5 значень стрічкового, числового та булевого типу
//-- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль

// let massive = [1, 2, 3, 4, 5];
// console.log(massive);

// let massive2 = ["a", "b", "c", "d", "e"];
// console.log(massive2);

// let massive3 = ["f", "g", 3, 4, true];
// console.log(massive3);

// let massive4 = [massive3[1]];
// console.log(massive4);

//- За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині

// for (let column = 0; column < 10; column++){
//     document.write("<div> ahahah </div>")
// };

// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині

// for (let column = 0; column < 10; column++){
//     document.write("<div> ahahah"+ column+"</div>") 
// };

// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
// let bla = 0;
// while (bla<20){
//     document.write("<h1>blaaaa</h1>")
//     bla++;
// };

// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.
// let bla = 0;
// while (bla<20){
//     document.write("<h1>blaaaa" +bla+ "</h1>");
//     bla++;
// };

// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
// let massive = [1,2,3,4,5,6,7,8,9,10];
// for (let x =0; x<massive.length; x++){
//     console.log(massive[x]);
// };

// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
// let massive = ["a", "b","c","d","e","f","g","h","i","j"];
// for (let x =0; x<massive.length; x++){
//     console.log(massive[x]);
// };

// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
// let massive = [1,2,3,4,5,"f","g","h","i","j"];
// for (let x =0; x<massive.length; x++){
//     console.log(massive[x]);
// };

    // - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи
// let massive = [1,2,3,4,5,"f","g","h",true, false];
// for (let x =0; x<massive.length; x++){
//     if(typeof massive[x] == "boolean"){
//         console.log(massive[x]);
//     }    
// };

// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи
// let massive = [1,2,3,4,5,"f","g","h",true, false];
// for (let x =0; x<massive.length; x++){
//     if(typeof massive[x]=="number"){
//         console.log(massive[x]);
//     };
// };

// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи
// let massive = [1,2,3,4,5,"f","g","h",true, false];
// for (let x=0; x<massive.length; x++){
//     if(typeof massive[x]=="string"){
//         console.log(massive[x])
//     }
// };

//- Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.
// let massive = [];
// massive[0]= 1;
// massive[1]= 2;
// massive[2]= 3;
// massive[3]= 4;
// massive[4]= "a";
// massive[5]= "b";
// massive[6]= "c";
// massive[7]= "d";
// massive[8]= true;
// massive[9]= false;
// for( let x=0; x<massive.length; x++){
//     console.log(massive[x])
// }

//- Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// for (let x=0; x<=10; x++){
//     console.log(x);
//     document.write(x);
// };
//Випадково зробив спочатку з допомогою do while тому по два методи залишу.
// let x = 0; 
//     do {x +=1;
//     console.log(x);
// document.write(x);}
// while(x<10);

// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// for (let x=0; x<=100; x++){
//     console.log(x);
//     document.write(x);
// };

// do/while:
// let x=0;
// do{x+=1;
//     console.log(x);
//     document.write(x);
// }
// while(x<100);

// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write

// for (let x=0; x<=100;x+=2){
//     console.log(x);
//     document.write(x);
//  };
    
    
// do/while:

// let x=0;
// do{x+=2;
// console.log(x);
// document.write(x);}
// while(x<100)

// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
// for (let x=2; x<=100;x+=2){
//     console.log(x);
//     document.write(x);
//  };

// do/while:

// let x=0;
// do{x+=2;
//     console.log(x);
//     document.write(x);
// }
//     while(x<100);

// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write
// for (let x=1; x<=100;x+=2){
//     console.log(x);
//     document.write(x);
//  };

// do/while:

// let x = -1;
// let y = +2;
// do{x+=y;
// console.log(x);
// document.write(x);
// }
// while(x<100);

// - Відтворити роботу годинника, відрахувавши 2 хвилини (2 цикли! 1й - хвилини, 2й - секунди)
// for (let hv = 0; hv<=60 ; hv++){
//     for (let sec=0; sec<=60; sec++){
//         if(sec != 60 && hv !=60){
//         console.log("якась година "+ hv+ " хвилин "+ sec +" секунд");}
//         if ( sec ==0 && hv==2){
            
//             document.write(hv+" minutes "+sec+" seconds");}
//             break;
//         }
            
//         };

//- Відтворити роботу годинника, відрахувавши  2 години 20 хвилини (3 цикли! 1й - години, 2й - хвилини, 3й - секунди)
// for (let h = 0; h<=60; h++){
//     for(let m=0; m<=60; m++){
//         for(let s=0; s<=60; s++){
//         console.log(h+":"+m+":"+s);
    
//     if (h ==2 && m ==20 && s ==0){
//         document.write(h+":"+m+":"+s);}
//         break;
//     }
// }
// };