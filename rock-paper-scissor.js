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
    return "You Lose";
  } else if (
    (playerSelection.toLowerCase() == "rock" &&
      computerSelection == "Scissors") ||
    (playerSelection.toLowerCase() == "paper" && computerSelection == "Rock") ||
    (playerSelection.toLowerCase() == "scissors" &&
      computerSelection == "Paper")
  ) {
    return "You Win";
  } else if (playerSelection.toLowerCase() == computerSelection.toLowerCase()) {
    return "It Was a Tie!";
  }
}

function game() {
  let playerScore = 0;
  let computerScore = 0;

  for (let i = 0; i < 5; i++) {
    const playerSelection = prompt(
      "what option will you choose, Rock-Paper-Scissors?"
    );
    const computerSelection = computerPlay();
    if (playRound(playerSelection, computerSelection) == "You Lose") {
      console.log(
        `You Lose: Player Score: ${playerScore}, Computer Score: ${computerScore}`
      );
      computerScore++;
    } else if (playRound(playerSelection, computerSelection) == "You Win") {
      console.log(
        `You Win: Player Score: ${playerScore}, Computer Score: ${computerScore}`
      );
      playerScore++;
    } else {
      console.log("It Was a Tie!");
    }
  }
  if (playerScore > computerScore) {
    alert("You Win");
  } else if (playerScore < computerScore) {
    alert("Computer Win");
  }
}

game();
