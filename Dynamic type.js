"use strict"

// to String

// 1)
console.log(typeof(String(null)));

//2)

console.log(typeof(5 + ''));

const num = 5;

console.log("https://gmail//wer" + num);

const fontSize = 26 + "px";

//to Number
//1)
console.log(typeof(Number("4")));

//2)
console.log(typeof(+"5"));
// 3)

console.log(typeof(parseInt("15", 10)));

let answer = +prompt("Hello", "");

//to Boolean

//0, "", null, undefined,NaN;

let switcher = null;

if(switcher){
    console.log("Working...");
}

switcher = 1;

if(switcher){
    console.log("Working...");
}
