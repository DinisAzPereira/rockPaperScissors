let computerScore = 0;

let userScore = 0;

function getComputerChoice() {
  let compChoice = Math.floor(Math.random() * 3); // math floor gera um numero  entre 0 e 1 depois disso multiplica por 3 ou seja multiplica por exemplo o 0.9x3 vai dar um numero perto de 2.8 apois isso o math floor arrendonda o numero para um inteiro.
  if (compChoice === 0) return "rock";
  if (compChoice === 1) return "paper";
  if (compChoice === 2) return "scissors";
}

// console.log(getComputerChoice()); // Para ver o resultado no console

function getHumanChoice() {
  let choice = prompt("Rock,Paper ou Scissors?").toLowerCase();

  if (choice === "rock") return choice;
  if (choice === "paper") return choice;
  if (choice === "scissors") return choice;
  else {
    console.log("Invalid response");
    getHumanChoice();
  }

  return choice;
}

function playRound(choice,) {
  const computerSelection = getComputerChoice();

  if (
    (choice === "rock" && computerSelection === "scissors") ||
    (choice === "scissors" && computerSelection === "paper") ||
    (choice === "paper" && computerSelection === "rock")
  ) {
    userScore++; // Aumenta 1 ao valor atual de userScore
    console.log("Tu ganhaste");
  } else {
    console.log("o Computador ganhou");
    computerScore++;
  }

  console.log(
    `Computer score: ${computerScore}, and Human score: ${userScore}`
  );
}

function playGame() {
  const humanSelection = getHumanChoice();
  const computerSelection = getComputerChoice();

  playRound(humanSelection, computerSelection);
}

function WhoWhins() {

    if (computerScore >= 3) {

        console.log("O computador ganhou a co,+");
    }

    else if (userScore >= 3) {
        console.log(" O humano ganhou a comp");
    }
    else {

        console.log("erro ao  determinar pontuações");
    }
}

playGame();
playGame();
playGame();
playGame();
playGame();
WhoWhins();