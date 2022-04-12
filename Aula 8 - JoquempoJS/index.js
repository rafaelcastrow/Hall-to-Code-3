const $rockButton1 = document.querySelector(".button-rock-player-1");
const $paperButton1 = document.querySelector(".button-paper-player-1");
const $scissorsButton1 = document.querySelector(".button-scissors-player-1");

const $rockButton2 = document.querySelector(".button-rock-player-2");
const $paperButton2 = document.querySelector(".button-paper-player-2");
const $scissorsButton2 = document.querySelector(".button-scissors-player-2");

const $fieldPlayer1 = document.querySelector(".field-player-1");
const $fieldPlayer2 = document.querySelector(".field-player-2");

$rockButton1.addEventListener("click", function () {
  $fieldPlayer1.innerHTML =
    '<img class="move-image" src="/src/rock.png" alt="Imagem de uma mão fechada com luva">';
});
$paperButton1.addEventListener("click", function () {
  $fieldPlayer1.innerHTML =
    '<img class="move-image" src="/src/paper.png" alt="Imagem de uma mão com todos os dedos abertos com luva">';
});
$scissorsButton1.addEventListener("click", function () {
  $fieldPlayer1.innerHTML =
    '<img class="move-image" src="/src/scissors.png" alt="Imagem de uma mão com o dedo indicador e o dedo medio com luva">';
});

$rockButton2.addEventListener("click", function () {
  $fieldPlayer2.innerHTML =
    '<img class="move-image" src="/src/rock.png" alt="Imagem de uma mão fechada com luva">';
});
$paperButton2.addEventListener("click", function () {
  $fieldPlayer2.innerHTML =
    '<img class="move-image" src="/src/paper.png" alt="Imagem de uma mão com todos os dedos abertos com luva">';
});
$scissorsButton2.addEventListener("click", function () {
  $fieldPlayer2.innerHTML =
    '<img class="move-image" src="/src/scissors.png" alt="Imagem de uma mão com o dedo indicador e o dedo medio com luva">';
});
