function getUserInput(nextPlayerSymbol) {
  return +prompt("Make your move here: ");
}

function isMoveValid(coordinates, newGameBoard, nextPlayerSymbol) {
  //console.log("3_ " + lastMove, newGameBoard, newGameBoard[coordinates]);
  if (newGameBoard[coordinates] === 11) {
    console.log("This coordinate was empty, now there is " + nextPlayerSymbol);
    lastMove = coordinates;
    newGameBoard[coordinates] = nextPlayerSymbol;
    console.log(lastMove, newGameBoard);
    return lastMove, newGameBoard, true;
  } else {
    console.log("This coordinate do not exist or is not available anymore");
    return false;
  }
}

function makeAMove(gameBoard, nextPlayerSymbol) {
  newGameBoard = [...gameBoard];
  // clone the gameBoard
  do {
    //console.log("2_" +  newGameBoard);
    coordinates = getUserInput();
    console.log(coordinates, typeof coordinates);
  } while (!isMoveValid(coordinates, newGameBoard, nextPlayerSymbol));

  newGameBoard[coordinates] = nextPlayerSymbol;
  return newGameBoard;
}

function hasLastMoveWon(lastMove, gameBoard) {
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
      gameBoard[i1] === gameBoard[lastMove] &&
      gameBoard[i1] === gameBoard[i2] &&
      gameBoard[i1] === gameBoard[i3]
    ) {
      return true;
    }
  }
  return false;
}

function gameIsOver(gameBoard, nextPlayerSymbol) {
  // 1. check if there is a winner
  if (hasLastMoveWon(lastMove, gameBoard)) {
    // Write a message that last mover has won the game
    alert(`Congratulations, ${nextPlayerSymbol} has won the game`);
    return true;
  }
  // 2. check if the board is full
  if (boardIsfull(gameBoard)) {
    alert(`This is a draw!`);
    return true;
  } else {
    alert(`Game still in progress`);
    return false;
  }

  // Return: winner/draw OR game is still in progress
}

let count = 0;

function boardIsfull() {
    if (count == 9) {
      return true;
    }

}

function ticTacToe() {
  //State space
  let gameBoard = new Array(9).fill(11);
  //let players = ["X", "O"];
  let nextPlayerSymbol = "O";
  let lastMove = 0;
  //let count = 0;

  // Computation
  do {
    nextPlayerSymbol = nextPlayerSymbol == "O" ? "X" : "O";
    gameBoard = makeAMove(gameBoard, nextPlayerSymbol);
    count ++;
    console.log("Count: "  + count);
  } while (!gameIsOver(gameBoard, nextPlayerSymbol));

  //Return value
  //Return undefined
}
