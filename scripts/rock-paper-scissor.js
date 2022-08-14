let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
  let choice = Math.floor(Math.random() * 3);
  return choice === 0
    ? "rock"
    : choice === 1
    ? "paper"
    : choice === 2
    ? "scissor"
    : null;
}

function playRound(playerChoice) {
  playerChoice = playerChoice.toLowerCase();
  const computerChoice = getComputerChoice();
  let winner = 1;
  let winText;

  if (
    (playerChoice.toLowerCase() == "rock" && computerChoice == "scissor") ||
    (playerChoice.toLowerCase() == "paper" && computerChoice == "rock") ||
    (playerChoice.toLowerCase() == "paper" && computerChoice == "rock")
  ) {
    winner = 0;
  } else if (playerChoice.toLowerCase() === computerChoice) {
    winner = 2;
  }

  switch (winner) {
    case 0:
      winText = `You win with ${playerChoice} against ${computerChoice}!`;
      break;
    case 1:
      winText = `You lost with ${playerChoice} against ${computerChoice}!`;
      break;
    case 2:
      winText = `It's a draw with ${playerChoice} against ${computerChoice}!`;
      break;
  }
  console.log(winText);
  return winner;
}

function game() {
  let playerChoice;

  for (let rounds = 0; rounds < 5; rounds++) {
    let accepted = false;

    while (!accepted) {
      playerChoice = prompt("Rock, Paper, Scissor?") || "";
      if (
        playerChoice.toLowerCase() === "rock" ||
        playerChoice.toLowerCase() === "scissor" ||
        playerChoice.toLowerCase() === "paper"
      )
        accepted = true;
      else alert("Must input rock paper or scissor!");
    }
    storeScore(playRound(playerChoice));
  }

  determineWinner();
}

function storeScore(winner) {
  if (winner === 0) playerScore++;
  else if (winner === 1) computerScore++;
}

function determineWinner() {
  if (playerScore > computerScore)
    console.log(`You won with ${playerScore} against ${computerScore}!`);
  else if (playerScore < computerScore)
    console.log(`You lost with ${playerScore} against ${computerScore}!`);
  else console.log(`It's a draw with ${playerScore} against ${computerScore}!`);
}
