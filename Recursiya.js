"use strict";

// function pow(a,b) {
//     let result = 1;

//     for (let i = 0; i < b; i++ ){
//         result *=a;

//     }
//     return result;
// }

// function pow(a,b) {
//     if (b === 1 ){
//         return a;
//     } else{
//         return a*pow(a, b -1); 
//     }
// }


// let students = {
//     js: [{
//         name: "John",
//         progress: 100
//     }, {
//         name: "Ivan",
//         progress:60
//     }],

//     html: {
//         basic: [{
//             name: "Peter",
//             progress: 20
//         }, {
//             name: "Ann",
//             progress:18
//         }],

//         pro: [{
//             name: "Sam",
//             progress:10
//         }]
//     }
        
// };

// function getTotalProgressByIteration (data) {
//     let total = 0;
//     let students = 0;

//     for (let course of Object.values(data)) {
//         if (Array.isArray(course)) {
//             students += course.length;

//             for (let i = 0; i < course.length; i++) {
//                 total += course[i].progress;
//             }
//         } else {
//             for (let subCourse of Object.values(course)) {
//                 students +=subCourse.length;

//                 for (let i = 0; i < subCourse.length; i++){
//                     total += subCourse[i].progress;
//                 }
//             }
//         }
//     }

//     return total / students;
// }

// const result = getTotalProgressByIteration(students);
// console.log(result);



// function getTotalProgressByRecursion (data) {
//     if (Array.isArray(data)) {
//         let total = 0;

//         for (let i = 0; i < data.length; i++) {
//             total += data[i].progress;
//         }

//         return [total, data.length];
//     } else {
//         let total = [0, 0];

//         for (let subData of Object.values(data)) {
//             const subDataArr = getTotalProgressByRecursion(subData);
//             total[0] += subDataArr[0];
//             total[1] += subDataArr[1];
//         }

//         return total;
//     } 
// }


// const result = getTotalProgressByRecursion(students);

// console.log(result[0]/result[1]);


function factorial(n) {
    if (typeof n === "string" || !Number.isInteger(n)) {
        console.log("Error");
    } if (n === 1 || n <= 0 ){
        console.log(1);
    }

    
        
        
    

    
}

factorial(5);


