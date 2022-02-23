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
const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
  button.addEventListener("click", playgame);
});

const pointCounter = document.querySelector("#counter");

const para1 = document.createElement("p");
const para2 = document.createElement("p");
const para3 = document.createElement("p");
const para4 = document.createElement("p");

let playerScore = 0;
let computerScore = 0;

function playgame(e) {
  let result = "";

  const playerSelection = e.target.dataset.value;
  const computerSelection = computerPlay();

  if (playRound(playerSelection, computerSelection) == "You Lose") {
    computerScore++;
    para1.textContent = ` Player Score: ${playerScore}`;
    para2.textContent = `Computer Score: ${computerScore}`;
    result = `You Lose`;
    para3.textContent = result;
    pointCounter.appendChild(para1);
    pointCounter.appendChild(para2);
    pointCounter.appendChild(para3);
  } else if (playRound(playerSelection, computerSelection) == "You Win") {
    playerScore++;
    para1.textContent = ` Player Score: ${playerScore}`;
    para2.textContent = `Computer Score: ${computerScore}`;
    result = `You Win`;
    para3.textContent = result;
    pointCounter.appendChild(para1);
    pointCounter.appendChild(para2);
    pointCounter.appendChild(para3);
  } else if (playRound(playerSelection, computerSelection) == "It Was a Tie!") {
    para1.textContent = ` Player Score: ${playerScore}`;
    para2.textContent = `Computer Score: ${computerScore}`;
    result = "It Was a Tie!";
    para3.textContent = result;
    pointCounter.appendChild(para1);
    pointCounter.appendChild(para2);
    pointCounter.appendChild(para3);
  }

  if (playerScore == 5) {
    result = "The winner is Player";
    para3.textContent = result;
    pointCounter.appendChild(para3);
  } else if (computerScore == 5) {
    result = "The winner is Computer";
    para3.textContent = result;
    pointCounter.appendChild(para3);
  }
}
