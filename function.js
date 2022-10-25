"use strict";

// let num = 20;

// function showFirstMessage(text) {
//     console.log(text);
//     let num = 10;
//     console.log(num);
// }

// showFirstMessage("Hello World!");
// console.log(num);

// // function calc(a,b){
// //     return (a+b);
// // }

// // console.log(calc(4,3));
// // console.log(calc(5,6));
// // console.log(calc(10,6));

// function ret(){
//     let num = 50;

//     //




//     return num;
// }


// const anotherNum = ret();
// console.log(anotherNum);

// const logger = function () {
//     console.log("Hello");

// };
// logger();

// const calc = (a,b) => {
//     console.log(1);
//     return a + b;
    
// };



// const usdCurr = 28;
// const discount = 0.9;

// function convert(amount, curr) {
//     return curr*amount;
// }

// function promotion(result){
//     console.log(result * discount);
   
// }

// const res = convert(500, usdCurr);
// promotion(res);

// function rest(){
//     for (let i = 0; i <5;i++){
//         console.log(i);
//         if (i === 3) return
//     }
//     console.log("Done");
// }

// rest();

// function doNothing() {}
//     console.log(doNothing() === undefined);



// let a = "Hello,";
    
//     function sayHello(name) {
//         console.log(a + name);
        
//     }
//     return sayHello("Anton"); 



    // function returnNeighboringNumbers(arr) {
    //     console.log([arr - 1, arr, arr + 1]);
    
    // }
    // return returnNeighboringNumbers(5);

   
     function getMathResult(number,count) {
        if (typeof(count) !== 'number' || count <= 0){
           return number;
        }
        
        for(let i = 2; i <=count;i++){
            console.log(number,"---",number*i);
        
        
        }
    }
    return getMathResult(10,"5");
