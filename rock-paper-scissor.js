function computerPlay() {
  const options = ["Rock", "Paper", "Scissors"];
  return options[Math.floor(Math.random() * options.length)];
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection.toLowerCase() == "rock" && computerSelection == "Paper") {
    return "You Lose! Paper beats Rock";
  } else if (
    playerSelection.toLowerCase() == "rock" &&
    computerSelection == "Scissors"
  ) {
    return "You Win! Rock beats Scissors";
  } else if (
    playerSelection.toLowerCase() == "rock" &&
    computerSelection == "Rock"
  ) {
    return "It Was a Tie!";
  } else if (
    playerSelection.toLowerCase() == "paper" &&
    computerSelection == "Rock"
  ) {
    return "You Win! Paper beats Rock";
  } else if (
    playerSelection.toLowerCase() == "paper" &&
    computerSelection == "Scissors"
  ) {
    return "You Lose! Scissors beats Paper";
  } else if (
    playerSelection.toLowerCase() == "paper" &&
    computerSelection == "Paper"
  ) {
    return "It Was a Tie!";
  } else if (
    playerSelection.toLowerCase() == "scissors" &&
    computerSelection == "Rock"
  ) {
    return "You Lose! Rock is beats Scissors";
  } else if (
    playerSelection.toLowerCase() == "scissors" &&
    computerSelection == "Paper"
  ) {
    return "You Win! Scissors is beats Paper";
  } else if (
    playerSelection.toLowerCase() == "scissors" &&
    computerSelection == "Scissors"
  ) {
    return "It Was a Tie!";
  }
}
const playerSelection = "rock";
const computerSelection = computerPlay();
console.log(computerSelection);
