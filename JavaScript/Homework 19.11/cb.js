// //CALLBACK HELL

// function myDay(wokeUp,cb){
// console.log("start of the day");

// setTimeout(() => {
//     console.log('wait...');

//     if (wokeUp !== true){
//         cb("you still sleep", null);
//     } else{
//         cb(null,'you woke up');
//     }

// },2000)
// };

// function cleanTeeth (toothPaste, cb){
//     console.log("I'm going to clean teeth");
    

//     setTimeout(() =>{
//         console.log("looking for toothpaste...");
//         if (toothPaste !== true){
//             cb("there no paste...(",null);
//         } else{
//             cb(null, "Yep! You cleaned your teeth!");
//         }
//     },2500)
// };

// function coockDinner (isFood, cb){
//     console.log('looking foor food...');

//     setTimeout(()=>{
//         if (isFood !== true){
//             cb("there no food",null);
//         }else{
//             cb(null, "it was so tasty!");
//         }
//     },3000)

// };

// function wearClothes (isClothes, cb){
//     console.log("looking for clothes...");

//     setTimeout(()=>{
//         if(isClothes !== true){
//             cb("there no clothes",null);
//         } else{
//             cb(null,"I find my clothes")
//         }
//     },2500)
// };

// function driveByBus (isMoney, cb){
//     console.log("waiting for a Bus...");

//     setTimeout(()=>{
//         if(isMoney <= 7){
//             cb("no money", null);
//         } else{
//             cb(null, "driving to school");
//         };
//     },2500)
// };

// function studying (lessons, cb){
//     console.log("I'm study a Python...")

//     setTimeout(()=>{
//         if(lessons > 5){
//             cb("it's so many lessons, I go home!",null)
//         } else{
//             cb(null,'I finish school, it was great!');
//         };
//     },2000);
// };

// function haveFun (money, cb){
//     console.log("I'm going to find a club...");

//     setTimeout(()=>{
//         if(money < 500){
//             cb('you have no money((((',null);
//         } else{
//             cb(null, "I`m Junior, I have a lot of money!");
//         };
//     },2000);
// };

// function goSleep (tired, cb){
//     console.log("if I tired, i'll go sleep...");

//     setTimeout(()=>{
//         if(tired !== true){
//             cb('I`m not tired! I`m so young!',null);
//         } else{
//             cb(null,'I`m going to go home');
//         };
//     },3000);
// };


// myDay(true, (err, data) => {
//     if(err){
//         console.log("I think", err);
//         return
//     }
//     console.log(`${data} let start!`);

//     cleanTeeth(true,(err, data)=>{
//         if(err){
//             console.log(`It's really ${err}`);
//             return
//         }
//         console.log(data);

//         coockDinner(true,(err, data) => {
//             if(err){
//                 console.log(err);
//                 return
//             }
//             console.log(`I found it! ${data}`);

//             wearClothes(true, (err,data) =>{
//                 if(err){
//                     console.log(err);
//                     return
//                 }
//                 console.log(`${data}, let wear it!`);

//                 driveByBus(8,(err, data)=>{
//                     if(err){
//                         console.log(err);
//                         return
//                     }
//                     console.log(`All right, I'm ${data}`);

//                     studying(4, (err, data)=>{
//                         if(err){
//                             console.log(err);
//                             return
//                         }
//                         console.log(data);

//                         haveFun(1000, (err, data)=>{
//                             if(err){
//                                 console.log(err);
//                                 return
//                             }
//                             console.log(`${data}, let's go to Malevich!`);

//                             goSleep(true, (err, data)=>{
//                                 if(err){
//                                     console.log(err);
//                                 }
//                                 console.log(`${data}, I'm very tired`)
//                             })
//                         })
//                     })
//                 });
//             });
//         });
//     });
// });


//PROMISE


function myDay(wokeUp){
    return new Promise((resolve, reject)=>{
        console.log("start of the day");

        setTimeout(() => {
            console.log('wait...');
        
            if (wokeUp !== true){
                reject("you still sleep");
            } else{
                resolve('you woke up');
            }
        
        },2000)
    })
};

function cleanTeeth (toothPaste){
    return new Promise((resolve, reject)=>{
        console.log("I'm going to clean teeth");

        setTimeout(() =>{
            console.log("looking for toothpaste...");

            if (toothPaste !== true){
                reject("there no paste...(");
            } else{
                resolve("Yep! You cleaned your teeth!");
            }
        },2500)
        })
};

function coockDinner (isFood){
    return new Promise((resolve,reject)=>{

        console.log('looking foor food...');

        setTimeout(()=>{
            if (isFood !== true){
                reject("there no food");
            }else{
                resolve("it was so tasty!");
            }
        },3000)
    
    })
};

function wearClothes (isClothes){
    return new Promise((resolve,reject)=>{
        console.log("looking for clothes...");

        setTimeout(()=>{
            if(isClothes !== true){
                reject("there no clothes");
            } else{
                resolve("I find my clothes")
            }
        },2500)
    })
};

function driveByBus (isMoney){
    return new Promise((resolve, reject)=>{
        console.log("waiting for a Bus...");

        setTimeout(()=>{
            if(isMoney <= 7){
                reject("no money");
            } else{
                resolve("driving to school");
            };
        },2500)
    })
};

function studying (lessons){
    return new Promise((resolve,reject)=>{
        console.log("I'm study a Python...")

        setTimeout(()=>{
            if(lessons > 5){
                reject("it's so many lessons, I go home!")
            } else{
                resolve('I finish school, it was great!');
            };
        },2000);
    })
};

function haveFun (money){
    return new Promise((resolve,reject)=>{
        console.log("I'm going to find a club...");

        setTimeout(()=>{
            if(money < 500){
                reject('you have no money((((');
            } else{
                resolve("I`m Junior, I have a lot of money!");
            };
        },2000);
    })
  
};

function goSleep (tired){
    return new Promise((resolve,reject)=>{
        console.log("if I tired, i'll go sleep...");

        setTimeout(()=>{
            if(tired !== true){
                reject('I`m not tired! I`m so young!');
            } else{
                resolve('I`m going to go home');
            };
        },3000);
    })
  
};



myDay(true)
.then((result) => {
    console.log(result);

    return cleanTeeth (true);
})
.then((teeth) => {
    console.log(teeth);

    return coockDinner (true);
})
.then((food) =>{
    console.log(`I FIND FOOD! ${food}`);

    return wearClothes (true);
})
.then((clothes) =>{
    console.log(clothes);

    return driveByBus(10);
})
.then((isEnoughMoney)=>{
    console.log(isEnoughMoney);

    return studying(3);
})
.then((lessonsValue)=>{
    console.log(lessonsValue);

    return haveFun(10000);
})
.then((haveMoney)=>{
    console.log(haveMoney);

    return goSleep(true);
})
.then((isTired)=>{
    console.log(isTired)
})



.catch(err => {
    console.log(err)
  })
  .finally(() => {
    console.log('the end');
  })
