const $cellList = document.querySelectorAll(".js-cell");
const $gameFinalStatus = document.querySelector(".js-winner");
const $nextPlayerArea = document.querySelector(".js-next-player");

let gameBoard = new Array(9).fill(null);
let currentPlayerSymbol = "X";
let isgameover = false;

function clickHandler(event) {
  const boardIndex = event.target.dataset.index;
  if (gameBoard[boardIndex] == null && !isgameover) {
    gameBoard[boardIndex] = currentPlayerSymbol;
    event.target.innerText = currentPlayerSymbol;
    if (hasLastMoverWon()) {
        isgameover = true;
      $gameFinalStatus.innerText = `Congratulations, ${currentPlayerSymbol} has won the game!`;
    } else if (gameBoard.every((element) => element !== null)) {
        isgameover = true;
      $gameFinalStatus.innerText = `This is a draw`;
    } else {
      currentPlayerSymbol = currentPlayerSymbol === "X" ? "O" : "X";
      $nextPlayerArea.innerText = `Next player: ${currentPlayerSymbol}`;
    }
  }
}

for (let $cell of $cellList) {
  $cell.addEventListener("click", clickHandler);
}

function hasLastMoverWon() {
  let winnerCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let [i1, i2, i3] of winnerCombos) {
    if (
      gameBoard[i1] === currentPlayerSymbol &&
      gameBoard[i1] === gameBoard[i2] &&
      gameBoard[i1] === gameBoard[i3]
    ) {
      return true;
    }
  }
  return false;
}
