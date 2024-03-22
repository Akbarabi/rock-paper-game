const buttons = document.querySelectorAll("button");

const resultEl = document.getElementById("result");

const playerScoreEl = document.getElementById("user-score");

const computerScoreEl = document.getElementById("computer-score");

// Declare variable and give it value
let playerScore = 0;
let computerScore = 0;

// Everytime button get clicked it wild show result
buttons.forEach((button) => {
  button.addEventListener("click", (anonyanus) => {
    const result = playRound(button.id, computerPlay());
    resultEl.textContent = result;
    
  });
});

// Create a function for computer to pick a random number(Rock,Paper,Scissors)
function computerPlay() {
  const choices = ["rock", "paper", "scissors"];
  const randomChoice = Math.floor(Math.random() * choices.length);
  return choices[randomChoice];
}

// Function for game to work 
function playRound(playerSelection, computerSelection) {
  // If math.random pick choices from function computerPlay same as player 
  if (playerSelection === computerSelection) {
    return "It's a tie!";
  }
  // To know what player pick and what it does
  else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    // To give a score for player if computer win
    playerScore++;
    playerScoreEl.textContent = playerScore;
    return "You win! " + playerSelection + " beats " + computerSelection;
  }
  // To give a score for computer if computer win
  else {
    computerScore++;
    computerScoreEl.textContent = computerScore;
    return "You lose! " + computerSelection + " beats " + playerSelection;
  }
}