"use strict";
 
const numberOfFilms = +prompt("How many films did you watch?", "");

const personaMovieDB = {
    count: numberOfFilms,
    movies:{},
    actors:{},
    genres:[],
    privat: false
};



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



      console.log (personaMovieDB);
