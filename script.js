"use strict";
 
let numberOfFilms;

function start() {
     numberOfFilms = +prompt("How many films did you watch?", "");

     while (numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt("How many films did you watch?", "");
     }
}

start();

const personaMovieDB = {
    count: numberOfFilms,
    movies:{},
    actors:{},
    genres:[],
    privat: false
};

function rememberMyFilms () {

      for (let i = 0; i < 2; i++){
       const a = prompt ("What was the last film that you've watched?", ""),
        b = prompt ("How was it?","");

    if (a != null && b != null && a != "" && b != ""&& a.length <50){
        personaMovieDB.movies[a] = b;
        console.log("done");
    } else{
        console.log("error");
        i--;
    }
  }
}
   
rememberMyFilms();


    function detectPersonalLevel() {
        if (personaMovieDB.count <10){
            console.log("You've watched not enough movies");
        } else if (personaMovieDB.count >= 10 && personaMovieDB.count < 30){
            console.log("You are good enough");
    
        } else if (personaMovieDB.count >= 30){
            console.log( "You are a monster");
        } else{
            console.log("Error");
        }
    }
      
detectPersonalLevel();



function showMyDB (hidden){
    if (!hidden) {
        console.log(personaMovieDB);

    }

}

showMyDB (personaMovieDB.privat);


function writeYourGenres (){
    for (let i = 1; i <= 3; i ++){
        
        personaMovieDB.genres[i - 1] = prompt('What is your favorite genre? ${i}');
    }
    
}

writeYourGenres();





console.log (personaMovieDB);
