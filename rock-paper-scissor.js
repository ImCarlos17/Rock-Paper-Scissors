function computerPlay() {
  const options = ["Rock", "Paper", "Scissors"];
  return options[Math.floor(Math.random() * options.length)];
}

function playRound(playerSelection, computerSelection) {
  if (
    (playerSelection.toLowerCase() == "rock" && computerSelection == "Paper") ||
    (playerSelection.toLowerCase() == "paper" &&
      computerSelection == "Scissors") ||
    (playerSelection.toLowerCase() == "scissors" && computerSelection == "Rock")
  ) {
    return "You Lose!";
  } else if (
    (playerSelection.toLowerCase() == "rock" &&
      computerSelection == "Scissors") ||
    (playerSelection.toLowerCase() == "paper" && computerSelection == "Rock") ||
    (playerSelection.toLowerCase() == "scissors" &&
      computerSelection == "Paper")
  ) {
    return "You Win!";
  } else if (playerSelection.toLowerCase() == computerSelection.toLowerCase()) {
    return "It Was a Tie!";
  }
}

const playerSelection = "rock";
const computerSelection = computerPlay();
console.log(computerSelection);
console.log(playRound(playerSelection, computerSelection));

function game() {
  for (let i = 0; i < 5; i++) {
    console.log(playRound(playerSelection, computerSelection));
  }
}

game();
