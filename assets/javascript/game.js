// Create variables for game

var emptyString = "";
var alphabet = "abcdefghijklmnopqrstuvwxyz";
var getRandomLetter = alphabet[Math.floor(Math.random() * alphabet.length)];
var randomLetter = getRandomLetter;

while (emptyString.length < 6) {
    emptyString += randomLetter;
    emptyString ++;
    } 
    console.log(emptyString);