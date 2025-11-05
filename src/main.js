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

const moves = 8;
const cells = document.querySelectorAll(".cell");
const endMessage = document.getElementById("endMessage");
const players = ["X", "O"];
let currentPlayer = players[0];

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
    currentPlayer = currentPlayer === "X" ? "O" : "X";
    if (currentPlayer == players[0]) {
      endMessage.textContent = `X's turn!`;
    } else {
      endMessage.textContent = `O's turn!`;
    }
  });
}

function checkWin(currentPlayer) {
    for(let i = 0; i < winningCombination.length; i++){
        const [a, b, c] = winningCombination[i]
        if(cells[a].textContent === currentPlayer && cells[b].textContent === currentPlayer && cells[c].textContent === currentPlayer){
            return true
        }
    }
    return false
}
