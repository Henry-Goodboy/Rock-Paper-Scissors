
//Declare variable outside of function
let caseInput;
let playerSelection;

//Allow the player to pick an option, option needs to be case neutral.
function userPlay() {
    anycaseInput = prompt('Rock, Paper or Scissors?');

    playerSelection = anycaseInput.toUpperCase();

    if (playerSelection == 'ROCK') {
        playerSelection = 'Rock';
        // console.log('Rock');
    }
    else if (playerSelection == 'PAPER') {
        playerSelection = 'Paper';
        // console.log('Paper');
    }
    else if (playerSelection == 'SCISSORS') {
        playerSelection = 'Scissors';
        // console.log('Scissors');
    }
    else {
        playerSelection = 'Invalid';
        // console.log('Invalid Input');
    }
}

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
}




// Sets the priority of one choice over another and returns a win or lose
let score;

function playRound() {
    if (playerSelection == computerSelection) {
        score = ('It\'s a Draw!');
    }
    
    else if (playerSelection == 'Paper' && computerSelection == 'Rock') {
        score = ('You Win! Paper covers Rock!');
    }
    
    else if (playerSelection == 'Scissors' && computerSelection == 'Rock') {
        score = ('You Lose! Rock smashes Scissors!');
    }
    
    else if (playerSelection == 'Scissors' && computerSelection == 'Paper') {
        score = ('You Win! Scissors cuts Paper!');
    }
    
    else if (playerSelection == 'Rock' && computerSelection == 'Paper') {
        score = ('You Lose! Paper covers Rock!');    
    }
    
    else if (playerSelection == 'Rock' && computerSelection == 'Scissors') {
        score = ('You Win! Rock Smashes Scissors!');
    }
    
    else if (playerSelection == 'Paper' && computerSelection == 'Scissors') {
        score = ('You Lose! Scissors cuts Paper!');    
    }
    
    else {
        score = ('Invalid');
    }
}

//Run function
computerPlay(); 
userPlay();
playRound();
console.log(`You picked: ${playerSelection} and the Computer picked: ${computerSelection}`);
console.log(score);