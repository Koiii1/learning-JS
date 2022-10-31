"use strict";


function learnJS (lang, callback) {
    console.log(`I learn: ${lang}`);
    callback();
}

function done() {
    console.log (" I have done this lesson ");
}

learnJS("JavaScript", done);