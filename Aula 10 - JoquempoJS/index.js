const $rockButton1 = document.querySelector(".button-rock-player-1");
const $paperButton1 = document.querySelector(".button-paper-player-1");
const $scissorsButton1 = document.querySelector(".button-scissors-player-1");

const $rockButton2 = document.querySelector(".button-rock-player-2");
const $paperButton2 = document.querySelector(".button-paper-player-2");
const $scissorsButton2 = document.querySelector(".button-scissors-player-2");

const $fieldPlayer1 = document.querySelector(".field-player-1");
const $fieldPlayer2 = document.querySelector(".field-player-2");

const $winnerTitle = document.querySelector(".winner-title");

let movePlayer1 = "";
let movePlayer2 = "";
let gameResult = null

function verifyGame() {
  if (movePlayer1 == "rock" && movePlayer2 == "paper") {
   gameResult = 2
  } else if (movePlayer1 == "rock" && movePlayer2 == "scissors") {
    gameResult = 1
  } else if (movePlayer1 == "paper" && movePlayer2 == "rock") {
    gameResult = 1
  } else if (movePlayer1 == "paper" && movePlayer2 == "scissors") {
   gameResult = 2
  } else if (movePlayer1 == "scissors" && movePlayer2 == "rock") {
   gameResult = 2
  } else if (movePlayer1 == "scissors" && movePlayer2 == "paper") {
    gameResult = 1
  } else if (movePlayer1 == movePlayer2) {
    gameResult = 0
  }
}

function printGameResult(){
  if (gameResult == 0){
    $winnerTitle.innerHTML = 'Empatou!'
  } else if (gameResult == 1){
    $winnerTitle.innerHTML = 'Jogadora 1 ganhou!'
  } else if (gameResult == 2){
    $winnerTitle.innerHTML = 'Jogadora 2 ganhou!'
  }
}

$rockButton1.addEventListener("click", function () {
  $fieldPlayer1.innerHTML =
    '<img class="move-image" src="/src/rock.png" alt="Imagem de uma mão fechada com luva">';
  movePlayer1 = "rock";
  verifyGame();
  printGameResult()
});
$paperButton1.addEventListener("click", function () {
  $fieldPlayer1.innerHTML =
    '<img class="move-image" src="/src/paper.png" alt="Imagem de uma mão com todos os dedos abertos com luva">';
  movePlayer1 = "paper";
  verifyGame();
  printGameResult()
});
$scissorsButton1.addEventListener("click", function () {
  $fieldPlayer1.innerHTML =
    '<img class="move-image" src="/src/scissors.png" alt="Imagem de uma mão com o dedo indicador e o dedo medio com luva">';
  movePlayer1 = "scissors";
  verifyGame();
  printGameResult()
});

$rockButton2.addEventListener("click", function () {
  $fieldPlayer2.innerHTML =
    '<img class="move-image" src="/src/rock.png" alt="Imagem de uma mão fechada com luva">';
  movePlayer2 = "rock";
  verifyGame();
  printGameResult()
});
$paperButton2.addEventListener("click", function () {
  $fieldPlayer2.innerHTML =
    '<img class="move-image" src="/src/paper.png" alt="Imagem de uma mão com todos os dedos abertos com luva">';
  movePlayer2 = "paper";
  verifyGame();
  printGameResult()
});
$scissorsButton2.addEventListener("click", function () {
  $fieldPlayer2.innerHTML =
    '<img class="move-image" src="/src/scissors.png" alt="Imagem de uma mão com o dedo indicador e o dedo medio com luva">';
  movePlayer2 = "scissors";
  verifyGame();
  printGameResult()
});
