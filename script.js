let computerScore = 0;

let userScore = 0;

function getComputerChoice() {
  let compChoice = Math.floor(Math.random() * 3); // math floor gera um numero  entre 0 e 1 depois disso multiplica por 3 ou seja multiplica por exemplo o 0.9x3 vai dar um numero perto de 2.8 apois isso o math floor arrendonda o numero para um inteiro.
  if (compChoice === 0) return "rock";
  if (compChoice === 1) return "paper";
  if (compChoice === 2) return "scissors";
}

// console.log(getComputerChoice()); // Para ver o resultado no console



function playRound(choice) {
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

    const h4resultadosJogador = document.getElementById('h4resultadosJogador')
    h4resultadosJogador.innerText = `Resultado do jogador: ${userScore}`
    const h4resultadosComputador = document.getElementById('h4resultadosComputador')
    h4resultadosComputador.innerText = `Resultado do computador: ${computerScore}`

  
}

function WhoWhins() {

  if (computerScore >= 3) {
    computerScore = 0;
    userScore = 0;
    alert("O computador ganhou a competição");
    document.getElementById('h4resultadosJogador').innerText = `Resultado do jogador: ${userScore}`;
    document.getElementById('h4resultadosComputador').innerText = `Resultado do computador: ${computerScore}`;

 

  }

  else if (userScore >= 3) {
    computerScore = 0;
    userScore = 0;
    alert(" O humano ganhou a competição");
    document.getElementById('h4resultadosJogador').innerText = `Resultado do jogador: ${userScore}`;
    document.getElementById('h4resultadosComputador').innerText = `Resultado do computador: ${computerScore}`;



  }
  else {

      console.log("erro ao  determinar pontuações");
  }
}


const rock = document.querySelector("#rockBtn");
const paper = document.querySelector("#paperBtn");
const scissors = document.querySelector("#scissorsBtn");

rock.addEventListener("click", () => {
  playRound("rock");
  WhoWhins()
})

paper.addEventListener("click", () => {
  playRound("paper");
  WhoWhins()
})

scissors.addEventListener("click", () => {
  playRound("scissors");
  WhoWhins()

})



