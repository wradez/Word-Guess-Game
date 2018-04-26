var computerWords = ["black capped chickadee", "cardinal", "stellers jay", "barn owl", "redtail hawk", "osprey", "golden eagle"];
var wordSplit =[];
var guessed = [];
var currentWord = "test";
var wins = 0;
var guessesLeft = currentWord.length; //this should break the current word into a number of characters within the word and then multiply by 2


document.onkeyup = function(event) {

    // Determines which key was pressed.
    var userGuess = event.key.toLowerCase();


    // Randomly chooses a word from the computerWords array and sets it to the variable currentword
    currentWord = computerWords[Math.floor(Math.random() * computerWords.length)];

    //game rules 
    // if(userGuess === "a" || userGuess === "b" || userGuess === "c" || userGuess === "d" || userGuess === "e" || userGuess === "f" || userGuess === "g" || userGuess === "h" || userGuess === "i" || userGuess === "j" || userGuess === "k" || userGuess === "l" || userGuess === "m" || userGuess === "n" || userGuess === "o" || userGuess === "p" || userGuess === "q" || userGuess === "r" || userGuess === "s" || userGuess === "t" || userGuess === "u" || userGuess === "v" || userGuess === "w" || userGuess === "x" || userGuess === "y" || userGuess === "z"){
    //     if(userGuess === computerGuess){
    //         alert("Winner Winner Chicken Dinner!");
    //         wins++;
    //         guesses = [];
    //         guessesLeft = 9;
    //     }else if(guesses.indexOf(userGuess) !== -1){
    //         alert("You already guessed " + userGuess + "." + " Try again.");
    //     }else{
    //         guesses.push(userGuess); //this will add the user guess to the array guessesSoFar
    //         guessesLeft--;
    //         if(guessesLeft < 1){
    //             alert("Plus one for the enemy...better luck next round");
    //             losses++;
    //             guesses = [];
    //             guessesLeft = 9;
    //         }
    //     }
    // }else{
    //     alert("Stop being an idiot!");
    // }
}

// document.getElementById("wins").innerHTML = wins;
document.getElementById("currentWord").innerHTML = currentWord;
document.getElementById("guessesLeft").innerHTML = guessesLeft;
document.getElementById("guessed").innerHTML = guessed;