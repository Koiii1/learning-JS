"use strict";
 
const numberOfFilms = +prompt("How many films did you watch?", "");

const personaMovieDB = {
    count: numberOfFilms,
    movies:{},
    actors:{},
    genres:[],
    privat: false
};

const a = prompt ("What was the last film that you've watched?", ""),
      b = prompt ("How was it?",""),
      c = prompt ("What was the last film that you've watched?", ""),
      d = prompt ("How was it?","");

      personaMovieDB.movies[a] = b;
      personaMovieDB.movies[c] = d;

      console.log (personaMovieDB);
