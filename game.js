let score = JSON.parse(localStorage.getItem("score")) || {
  wins: 0,
  losses: 0,
  draws: 0,
};
let isPlayerTurn = true;
let computerMove = "";
updateScore();

function playGame(playermove) {
  computerMove = randomMove();
  let result = "";
  //Rock
  if (playermove == "Rock" && computerMove == "Rock") {
    result = "Draw";
    score.draws++;
  } else if (playermove == "Rock" && computerMove == "Paper") {
    result = "Computer Win";
    score.losses++;
  } else if (playermove == "Rock" && computerMove == "Scissor") {
    result = "You Win";
    score.wins++;
    //paper
  } else if (playermove == "Paper" && computerMove == "Paper") {
    result = "Draw";
    score.draws++;
  } else if (playermove == "Paper" && computerMove == "Rock") {
    result = "You Win";
    score.wins++;
  } else if (playermove == "Paper" && computerMove == "Scissor") {
    result = "Computer Win";
    score.losses++;
    //Scissor
  } else if (playermove == "Scissor" && computerMove == "Rock") {
    result = "Computer  Win";
    score.losses++;
  } else if (playermove == "Scissor" && computerMove == "Scissor") {
    result = "Draw";
    score.draws++;
  } else if (playermove == "Scissor" && computerMove == "Paper") {
    result = "You  Win";
    score.wins++;
  } else {
    result = "";
  }

  let results = JSON.stringify(score);
  localStorage.setItem("score", results);

  let fin = JSON.stringify(result);
  localStorage.setItem("value", fin);

  document.querySelector(".jsStatus").innerHTML = `Result:${result}`;
  document.querySelector(
    ".jsScore"
  ).innerHTML = `Wins:${score.wins} Losses:${score.losses} Draws:${score.draws}`;
  isPlayerTurn = !isPlayerTurn;
  updateTurnDisplay();
}

function randomMove() {
  let computerMove = "";
  computerChoose = Math.random();
  if (computerChoose < 1 / 3) {
    computerMove = "Rock";
  } else if (computerChoose < 2 / 3) {
    computerMove = "Paper";
  } else {
    computerMove = "Scissor";
  }
  return computerMove;
}

function resetFunc() {
  document.querySelector(".jsStatus").innerHTML = `Result: `;
  localStorage.removeItem("score");
  clear();
  document.querySelector(
    ".jsScore"
  ).innerHTML = `Wins: ${score.wins} Losses:${score.losses} Draws: ${score.draws}`;
}

function clear() {
  score.wins -= score.wins;
  score.losses -= score.losses;
  score.draws -= score.draws;
}

function updateScore() {
  document.querySelector(
    ".jsScore"
  ).innerHTML = `Wins:${score.wins} Losses:${score.losses} Draws:${score.draws}`;
}
function updateTurnDisplay() {
  const turnDisplay = document.querySelector(".jsturn");
  if (isPlayerTurn) {
    turnDisplay.innerHTML = "Your Turn";
  } else {
    turnDisplay.innerHTML = `Computer selected ${computerMove}`;
  }
}
updateTurnDisplay();
