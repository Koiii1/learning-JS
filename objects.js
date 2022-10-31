"use strict";

const options = {
    name: "test",
    width: 1024,
    height:1024,
    colors:{
        border: 'black',
        bg: 'red'
    },
    makeTest: function () {
        console.log("test");
    }
};

options.makeTest();

const {border,bg} = options.colors;
console.log(border, bg);

// console.log(Object.keys(options).length);


// const dota = {
//     antimag: "creep",
//     pricepullint: 15,
//     marci:{
//         str:30,
//         agi:20,
//         int:15
//     },
//     morph:"water"
// };

// console.log(dota.morph);
// console.log(Object.keys(dota),Object.keys(dota.morph).length);



// console.log(options["colors"]["border"]);

// delete options.name;

// console.log(options);


// let counter = 0;
// for (let key in options) {
//     if (typeof(options[key]) === 'object'){
//         for (let i in options[key]){
//             console.log(`Свойство ${i} имеет значаение ${options[key][i]} `);
//             counter++;
//         }
//     }else {
//         console.log(`Свойство ${key} имеет значаение ${options[key]} `);
//         counter++;
//     }
    
// }

// console.log(counter);

