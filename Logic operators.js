// const hamburger = 5;
// const fries = 0;

// if (hamburger && fries){
//     console.log('I`m full');
// }

const hamburger = 3;
const fries = 3;
const cola = 0;
const nuggets = 2;



if (hamburger === 3 && cola === 2 || fries === 3 && nuggets) {
    console.log('All are full');
} else {
    console.log('Get out of here');
}

console.log (hamburger === 3 && cola === 2);

let johnReport, krisReport, samReport, annReport = "done";

console.log(johnReport || krisReport || samReport || annReport);


console.log( NaN || 2 || undefined );

console.log( NaN && 2 && undefined );