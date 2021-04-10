let computerScore = 0
let playerScore = 0
let champ

function game () {
  //Player picks option, option is formatted properly
  function playerSelection () {
    rawUserInput = prompt('Rock, Paper or Scissors?')
    userInput =
      rawUserInput.charAt(0).toUpperCase() + rawUserInput.slice(1).toLowerCase()
    return userInput
  }

  //Computer picks option at random
  function computerPlay () {
    ranNum = Math.floor(Math.random() * 3)

    if (ranNum == 0) {
      computerSelection = 'Rock'
    } else if (ranNum == 1) {
      computerSelection = 'Paper'
    } else if (ranNum == 2) {
      computerSelection = 'Scissors'
    }
    return computerSelection
  }

  //making it easier to write by subbing variables
  let w = 'Play again.'
  let x = 'Paper covers Rock.'
  let y = 'Rock smashes Scissors.'
  let z = 'Scissors cut Paper.'
  let result

  //this is where the game decisions are made
  function playRound (a, b) {
    if (a == b) {
      winner = 'No one'
      result = w
    } else if (a == 'Paper' && b == 'Rock') {
      winner = 'Player'
      result = x
    } else if (a == 'Scissors' && b == 'Rock') {
      winner = 'Computer'
      result = y
    } else if (a == 'Scissors' && b == 'Paper') {
      winner = 'Player'
      result = z
    } else if (a == 'Rock' && b == 'Paper') {
      winner = 'Computer'
      result = x
    } else if (a == 'Rock' && b == 'Scissors') {
      winner = 'Player'
      result = y
    } else if (a == 'Paper' && b == 'Scissors') {
      winner = 'Computer'
      result = z
    } else {
      winner = 'Invalid input. No one'
      result = w
    }
  }

  playRound(playerSelection(), computerPlay())

  //end of game score keeper
  function endScore () {
    if (winner == 'Player') {
      playerScore += 1
    } else if (winner == 'Computer') {
      computerScore += 1
    }
  }

  endScore()

  console.log(
    `You picked: ${userInput} and the Computer picked: ${computerSelection}`
  )
  console.log(`${winner} wins.`)
  console.log(result)
}

//run it five times
game()
game()
game()
game()
game()

//log relevant information in the console
console.log(`Player ${playerScore}`)
console.log(`Computer ${computerScore}`)
if (playerScore > computerScore) {
  console.log('Player Wins!')
} else if (playerScore < computerScore) {
  console.log('Computer Wins!')
} else {
  console.log('Tied Game - Play Again')
}
