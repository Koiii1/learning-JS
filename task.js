// "use strict";

// // const personalPlanPeter = {
// //     name: "Peter",
// //     age: "29",
// //     skills: {
// //         languages: ['ru', 'eng'],
// //         programmingLangs: {
// //             js: '20%',
// //             php: '10%'
// //         },
// //         exp: '1 month'
// //     }
// // };



// // function showExperience(plan) {
// //    console.log(`${plan.skills.exp}`);
// // }

// // showExperience(personalPlanPeter);



// // function showProgrammingLangs(plan) {

// // }


// // const personalPlanPeter = {
// //     name: "Peter",
// //     age: "29",
// //     skills: {
// //         languages: ['ru', 'eng'],
// //         programmingLangs: {
// //             js: '20%',
// //             php: '10%'
// //         },
// //         exp: '1 month'
// //     }

// // };
 



// // const family = ['Peter', 'Ann', 'Alex', 'Linda'];

// // function showFamily(arr) {
// //     if (arr.lenth === 0){
// //         console.log("Сумья пуста");
// //     }

// //     let str = "Семья состоит из: ";
// //     console.log(str+=`${arr}`);
    
// // }

// // showFamily(family);


// // const favoriteCities = ['liSBon', 'ROME', 'miLan', 'Dublin'];

// // function standardizeStrings(arr) {
// //     arr.forEach(element => {
// //         console.log(element.toLowerCase());
// //     });
    
// // }

// // standardizeStrings(favoriteCities);


// // const someString = 'This is some strange string';

// // function reverse(str) {
    
// //     let reversed = ;
// //     console.log(reversed);
    

// // }

// // reverse(someString);


// const shoppingMallData = {
//     shops: [
//         {
//             width: 10,
//             length: 5
//         },
//         {
//             width: 15,
//             length: 7
//         },
//         {
//             width: 20,
//             length: 5
//         },
//         {
//             width: 8,
//             length: 10
//         }
//     ],
//     height: 5,
//     moneyPer1m3: 30,
//     budget: 50000
// };

// function isBudgetEnough(data) {
//   let square = 0;
//   let volume = 0;

//   data.shops.forEach(shop => {
//     square +=shop.width * shop.length;
//   });

//   volume = data.height * square;

  
    
// }

// isBudgetEnough(shoppingMallData);




// const students = ['Peter', 'Andrew', 'Ann', 'Mark', 'Josh', 'Sandra', 'Cris', 'Bernard', 'Takesi', 'Sam'];

// function sortStudentsByGroups(arr) {
//     arr.sort();
//     let text = "";
//     for (let i = 1; i < arr.length + 1; i++){
//         if(i % 3 === 0 ){
//             text += '\n';
//             console.log(text += arr);
//             break;
            
//         } 

//     }
   
    



// }

// sortStudentsByGroups(students);



const restorantData = {
    menu: [
        {
            name: 'Salad Caesar',
            price: '14$'
        },
        {
            name: 'Pizza Diavola',
            price: '9$'
        },
        {
            name: 'Beefsteak',
            price: '17$'
        },
        {
            name: 'Napoleon',
            price: '7$'
        }
    ],
    waitors: [
        {name: 'Alice', age: 22}, {name: 'John', age: 24}
    ],
    averageLunchPrice: '20$',
    openNow: true
};


// 1) вычеслить средний чек
// 2) задать две переменный для двух блюд
function isAverageLunchPriceTrue(fDish, sDish, average) {
    if (+fDish.price.slice(0, -1) + (+sDish.price.slice(0, -1)) < +average) {
        return 'Цена ниже средней';
    } else {
        return 'Цена выше средней';
    }
}

console.log(isAverageLunchPriceTrue(restorantData.menu[0], restorantData.menu[1], restorantData.averageLunchPrice));





// function isOpen(prop) {
//     let answer = "";
//     if(!prop){
//         console.log("Close");
//     } else{
//         console.log("Open");
//     }

    
// }


// isOpen(restorantData.openNow);