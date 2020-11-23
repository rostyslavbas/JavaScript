// Реалізувати друкарську машинку. 
// У вас є текст "Hello World". (або юудь який інший на ваш розсуд)
// Ваша функція має друкувати цей текст по 1 симоволу в браузері. 
// КОЖНА нова буква має бути з РАНДОМНОЮ заутримкою від 0.1 до 1 секунди.
// Цим самим ви маєте симулювати написання даного тексту юзером. 
// Приклад: "Hello"
// Затримки: 
// H (затримка 0.6)
// e (затримка 0.1)
// l (затримка 0.3)
// l (затримка 0.7)
// о (затримка 1)


function first(time){
    return new Promise((resolve,reject)=>{
    setTimeout(()=>{
       if(time < 1000){
           resolve('h');
        }
     },100);
    })
};
function second(time){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(time < 1000){
                resolve('e');
            } 
         },300);
    })
};
function third(time){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(time < 1000){
                resolve('l');
            } 
         },1000);
    })
};
function fourth(time){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(time < 1000){
                resolve('l');
            } 
         },150);
    })
};
function fifth(time){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(time < 1000){
                resolve('o');
            } 
         },900);
    })
};

async function word(){
    let w1 = await first(100);
    document.write(w1)

    let w2 = await second(100);
    document.write(w2);

    let w3 = await third(100);
    document.write(w3)

    let w4 = await fourth(100);
    document.write(w4);

    let w5 = await fifth(100);
    document.write(w5)
    
};
        
word();
      
      
         
