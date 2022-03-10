function computerPlay() {
  const options = ["rock", "paper", "scissors"];
  return options[Math.floor(Math.random() * options.length)];
}

function playRound(playerSelection, computerSelection) {
  if (
    (playerSelection.toLowerCase() == "rock" && computerSelection == "paper") ||
    (playerSelection.toLowerCase() == "paper" &&
      computerSelection == "scissors") ||
    (playerSelection.toLowerCase() == "scissors" && computerSelection == "rock")
  ) {
    return "You Lose";
  } else if (
    (playerSelection.toLowerCase() == "rock" &&
      computerSelection == "scissors") ||
    (playerSelection.toLowerCase() == "paper" && computerSelection == "rock") ||
    (playerSelection.toLowerCase() == "scissors" &&
      computerSelection == "paper")
  ) {
    return "You Win";
  } else if (playerSelection.toLowerCase() == computerSelection.toLowerCase()) {
    return "It Was a Tie!";
  }
}
const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
  button.addEventListener("click", playGame);
});

buttons.forEach((button) => {
  button.addEventListener("mouseover", (e) => {
    if (e.target.dataset.value == "rock") {
      document.querySelector(".img-player").setAttribute("src", "img/rock.png");
    }
    if (e.target.dataset.value == "paper") {
      document
        .querySelector(".img-player")
        .setAttribute("src", "img/paper.png");
    }
    if (e.target.dataset.value == "scissors") {
      document
        .querySelector(".img-player")
        .setAttribute("src", "img/scissors.png");
    }
  });
});

const pointCounter = document.querySelector("#counter");

const pPlayerScore = document.createElement("p");
const pComputerScore = document.createElement("p");
const pResult = document.createElement("p");

pPlayerScore.textContent = "player Score: 0";
pComputerScore.textContent = "Computer Score: 0";

pointCounter.appendChild(pPlayerScore);
pointCounter.appendChild(pComputerScore);
pointCounter.appendChild(pResult);

let playerScore = 0;
let computerScore = 0;

eventOverlay = (winner) => {
  const divOverlay = document.querySelector(".overlay");
  const boxEndGame = document.querySelector(".box-endGame");
  const paraEndGame = document.createElement("p");
  const btnPlayAgain = document.createElement("button");

  paraEndGame.textContent = winner;
  btnPlayAgain.textContent = "Play again";
  boxEndGame.classList.add("box-endGame-overlay");
  btnPlayAgain.classList.add("btn");
  divOverlay.classList.add("active-overlay");

  boxEndGame.appendChild(paraEndGame);
  boxEndGame.appendChild(btnPlayAgain);

  btnPlayAgain.addEventListener("click", () => {
    divOverlay.classList.remove("active-overlay");
    boxEndGame.classList.remove("box-endGame-overlay");
    btnPlayAgain.classList.remove("btn");
    paraEndGame.textContent = "";
    boxEndGame.removeChild(btnPlayAgain);

    playerScore = 0;
    computerScore = 0;
    pPlayerScore.textContent = "player Score: 0";
    pComputerScore.textContent = "Computer Score: 0";
    pResult.textContent = "";
  });
};

function playGame(e) {
  let result = "";

  const playerSelection = e.target.dataset.value;
  const computerSelection = computerPlay();

  if (computerSelection == "rock") {
    document.querySelector(".img-computer").setAttribute("src", "img/rock.png");
  }
  if (computerSelection == "paper") {
    document
      .querySelector(".img-computer")
      .setAttribute("src", "img/paper.png");
  }
  if (computerSelection == "scissors") {
    document
      .querySelector(".img-computer")
      .setAttribute("src", "img/scissors.png");
  }

  if (playRound(playerSelection, computerSelection) == "You Lose") {
    computerScore++;
    pPlayerScore.textContent = ` Player Score: ${playerScore}`;
    pComputerScore.textContent = `Computer Score: ${computerScore}`;
    result = `You Lose`;
    pResult.textContent = result;
    pointCounter.appendChild(pPlayerScore);
    pointCounter.appendChild(pComputerScore);
    pointCounter.appendChild(pResult);
  } else if (playRound(playerSelection, computerSelection) == "You Win") {
    playerScore++;
    pPlayerScore.textContent = ` Player Score: ${playerScore}`;
    pComputerScore.textContent = `Computer Score: ${computerScore}`;
    result = `You Win`;
    pResult.textContent = result;
    pointCounter.appendChild(pPlayerScore);
    pointCounter.appendChild(pComputerScore);
    pointCounter.appendChild(pResult);
  } else if (playRound(playerSelection, computerSelection) == "It Was a Tie!") {
    pPlayerScore.textContent = ` Player Score: ${playerScore}`;
    pComputerScore.textContent = `Computer Score: ${computerScore}`;
    result = "It Was a Tie!";
    pResult.textContent = result;
    pointCounter.appendChild(pPlayerScore);
    pointCounter.appendChild(pComputerScore);
    pointCounter.appendChild(pResult);
  }

  if (playerScore == 5) {
    result = "The winner is Player";
    pResult.textContent = result;
    pointCounter.appendChild(pResult);
    eventOverlay("You Win");
  } else if (computerScore == 5) {
    result = "The winner is Computer";
    pResult.textContent = result;
    pointCounter.appendChild(pResult);
    eventOverlay("You Lose");
  }
}
