
//Declare variable outside of function
let caseInput;
let playerSelection;

//Allow the player to pick an option, option needs to be case neutral.
function userPlay() {
    anycaseInput = prompt('Rock, Paper or Scissors?');

    playerSelection = anycaseInput.toUpperCase();

    if (playerSelection == 'ROCK') {
        console.log('Rock');
    }
    else if (playerSelection == 'PAPER') {
        console.log('Paper');
    }
    else if (playerSelection == 'SCISSORS') {
        console.log('Scissors');
    }
    else {
        console.log('Invalid Input');
    }
}

//Run userPlay function
userPlay();

//Declare variable outside of function
let ranNum;

//Computer picks option at random
function computerPlay() {

    ranNum = Math.floor(Math.random() * 3);

    if (ranNum == 0) {
        computerSelection = 'Rock';
    }
    else if (ranNum == 1) {
        computerSelection = 'Paper';
    }
    else if (ranNum == 2) {
        computerSelection = 'Scissors';
    }
    
    console.log(computerSelection);
   
}
//Run computerPlay function
computerPlay();
