const score = JSON.parse(localStorage.getItem("score")) || {
  wins: 0,
  losses: 0,
  ties: 0,
};

updateScore();

function pickComputerMove() {
  let computerMove = "";
  const randomNumber = Math.random();
  if (randomNumber >= 0 && randomNumber < 1 / 3) {
    computerMove = "Rock";
  } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
    computerMove = "Paper";
  } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
    computerMove = "Scissors";
  }

  return computerMove;
}

function playGame(playerMove) {
  let result = "";
  const computerMove = pickComputerMove();
  console.log(computerMove);
  if (playerMove == "Scissors") {
    if (computerMove === "Rock") {
      result = "You lose";
    } else if (computerMove === "Paper") {
      result = "You win";
    } else if (computerMove === "Scissors") {
      result = "Tie.";
    }
  } else if (playerMove === "Paper") {
    if (computerMove === "Rock") {
      result = "You win";
    } else if (computerMove === "Paper") {
      result = "Tie.";
    } else if (computerMove === "Scissors") {
      result = "You lose";
    }
  } else if (playerMove === "Rock") {
    if (computerMove === "Rock") {
      result = "Tie.";
    } else if (computerMove === "Paper") {
      result = "You lose";
    } else if (computerMove === "Scissors") {
      result = "You win";
    }
  }

  if (result === "You win") {
    score.wins += 1;
  } else if (result === "You lose") {
    score.losses += 1;
  } else if (result === "Tie.") {
    score.ties += 1;
  }

  //convert the score object into a string and store in local storage

  localStorage.setItem("score", JSON.stringify(score));
  updateScore();

  document.querySelector(".js-status").innerHTML = result;

  document.querySelector(
    ".js-results"
  ).innerHTML = `You Pick ${playerMove}. And the computer picked ${computerMove}.  ${result}
  Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;

  alert(
    `You Pick ${playerMove}. And the computer picked ${computerMove}.  ${result}scripts/10-rock-paper-scissors.js
      Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`
  );
}

//Update the score
function updateScore() {
  document.querySelector(
    ".js-score"
  ).innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
}