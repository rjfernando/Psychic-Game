// create vaiiables for gameplay
var computerLetters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

    var wins = 0;
    var losses = 0;
    var guessesLeft = 9;
    var guessedLetter = [];
  
// // when user hits any key it will create a function to do stuff
document.onkeyup = function (event) {
    
//what key is being pressed by user
    var userGuess = String.fromCharCode(event.keyCode)
        .toLowerCase();
        
//randomly chooses a letter from the array from the computers guess
    var computerChoice = computerLetters[Math.floor(Math.random() * computerLetters.length)];
    
 //what will the functions do when these events are met     
        if (guessedLetter.indexOf(userGuess) < 0 && computerLetters.indexOf(userGuess) >= 0) {
            guessedLetter[guessedLetter.length] = userGuess;    
        }
        
        if (userGuess === computerChoice) {
            wins++;
            guessesLeft = 9;
            guessedLetter = [];
            alert('YOU WIN!')
        }
        
        else  {
            guessesLeft--;
        }
        
        if (guessesLeft === 0) {
            losses++;
            guessesLeft = 9;
            guessedLetter = [];
            alert('YOU LOST');
        }
        
        var result = guessedLetter.join(',');
        result = result.replace(/\s/g, '');
     
// write gameplay to the document
    var html =  "<p><h2>Guess what letter I'm thinking of:</h2></p>" +
                "<p><h3>Wins: " + wins + "</h3></p>" + 
                "<p><h3>Losses: " + losses + "</h3></p>" + 
                "<p><h3>Guesses Left: " + guessesLeft + "</h3></p>" + 
                "<p><h3>Your guesses so far: " + guessedLetter + "</h3></p>";
   
        document.querySelector("#gameplay").innerHTML = html;
};

// was not able to remove the commas from the string of letters for guessedLetter
                




