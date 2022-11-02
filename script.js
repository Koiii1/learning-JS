"use strict";

const personaMovieDB = {
    count: 0,
    movies:{},
    actors:{},
    genres:[],
    privat: false,
    start: function() {
        personaMovieDB.count = +prompt("How many films did you watch?", "");
   
        while (personaMovieDB.count == "" || personaMovieDB.count == null || isNaN(personaMovieDB.count)) {
            personaMovieDB.count = +prompt("How many films did you watch?", "");
        }
        
   },
   rememberMyFilms :function () {

    for (let i = 0; i < 2; i++){
     const a = prompt ("What was the last film that you've watched?", "").trim(),
      b = prompt ("How was it?","");

  if (a != null && b != null && a != "" && b != ""&& a.length <50){
      personaMovieDB.movies[a] = b;
      console.log("done");
  } else{
      console.log("error");
      i--;
  }

}
},
detectPersonalLeve: function() {
    if (personaMovieDB.count <10){
        console.log("You've watched not enough movies");
    } else if (personaMovieDB.count >= 10 && personaMovieDB.count < 30){
        console.log("You are good enough");

    } else if (personaMovieDB.count >= 30){
        console.log( "You are a monster");
    } else{
        console.log("Error");
    }
},
 showMyDB: function (hidden){
    if (!hidden) {
        console.log(personaMovieDB);

    }

},
 toggleVisibleMyDB:function () {
    if (personaMovieDB.privat){
        personaMovieDB.privat = false;

    }else{
        personaMovieDB.privat = true;
    }

},
 writeYourGenres: function (){
    for (let i = 1; i <= 3; i ++){
        let genre = prompt(`What is your favorite genre number? ${i}`);

        if (genre === "" || genre == null) {
            console.log("Error");
            i--;
        }else {
            personaMovieDB.genres[i - 1]= genre;
        }
    }

    personaMovieDB.genres.forEach((i, item) => {
        console.log(`Your favorite genre ${i + 1} - this is ${item}`);
    });
    
}

};

console.log (personaMovieDB);
