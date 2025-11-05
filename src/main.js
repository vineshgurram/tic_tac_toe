import "./assets/css/style.css";

const winningCombination = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

const cells = document.querySelectorAll(".cell");
const endMessage = document.getElementById("endMessage");
const players = ["X", "O"];
let currentPlayer = players[0];

endMessage.textContent = `${currentPlayer}'s turn!`

for (const cell of cells) {
  cell.addEventListener("click", function () {
    if (cell.textContent !== "") {
      return;
    }
    cell.textContent = currentPlayer;

    if (checkWin(currentPlayer)) {
      endMessage.textContent = `Game over! ${currentPlayer} wins!`;
      return;
    }

    if (checkTie()) {
      endMessage.textContent = `Game is tied!`;
      return;
    }

    currentPlayer = currentPlayer === players[0] ? players[1] : players[0];

    if (currentPlayer == players[0]) {
      endMessage.textContent = `${players[0]}'s turn!`;
    } else {
      endMessage.textContent = `${players[1]}'s turn!`;
    }
  });
}

function checkWin(currentPlayer) {
  for (let i = 0; i < winningCombination.length; i++) {
    const [a, b, c] = winningCombination[i];
    if (
      cells[a].textContent === currentPlayer &&
      cells[b].textContent === currentPlayer &&
      cells[c].textContent === currentPlayer
    ) {
      return true;
    }
  }
  return false;
}

function checkTie() {
  for (let i = 0; i < cells.length; i++) {
    if (cells[i].textContent === "") {
      return false;
    }
  }
  return true;
}

function restartGame(){
  for (const cell of cells) {
    cell.textContent = "";
  }
  currentPlayer = players[0];
  endMessage.textContent = `${currentPlayer}'s turn!`;
}


const restartButton = document.getElementById("restartButton");

restartButton.addEventListener("click",function(){
  for (const cell of cells) {
    cell.textContent = "";
  }
  currentPlayer = players[0];
  endMessage.textContent = `${currentPlayer}'s turn!`;
});