"use strict";

if (4 == 4) {
    console.log('Ok');
}else {
    console.log ("Error");
}



// if (num < 49){
//     console.log("Error");
// }else if (num > 100){
//     console.log("Too much");
// } else {
//     console.log('OK');
// }

// (num === 50) ? console.log('OK') :  console.log('Error');

const num = "50";

switch (num) {
    case "49":
        console.log('Incorrect');
        break;
    case "100":
        console.log("Incorrect");
        break;
    case "50":
        console.log("Correct");
        break;
default:
    console.log("Not this time");
    break;
}