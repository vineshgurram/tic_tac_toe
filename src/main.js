import "./assets/css/style.css";
import {
  cells,
  mainMenuButton,
  endMessage,
  restartButton,
  resetScoreButton,
  startNewgameButton,
} from "./ui/uiElements";
import {
  showNewGameScreen,
  showMainMenuScreen,
  showAppIntroScreen,
  hideAppIntroScreen,
} from "./ui/uiController";
import { resetScore, updateWinScore, updateDrawScore } from "./features/score";

const players = ["X", "O"];
let currentPlayer = players[0];

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

endMessage.textContent = `${currentPlayer}'s turn!`;

for (const cell of cells) {
  cell.addEventListener("click", function () {
    if (cell.textContent !== "") {
      return;
    }
    cell.textContent = currentPlayer;

    if (cell.textContent === "X") {
      cell.classList.add("x-cell");
    } else {
      cell.classList.add("o-cell");
    }

    if (checkWin(currentPlayer)) {
      endMessage.textContent = `Game over! ${currentPlayer} wins!`;
      board.classList.add("no-click");
      setTimeout(() => {
        updateWinScore(currentPlayer);
        restartGame();
        document.querySelector(".board").classList.remove("no-click");
      }, 3000);
      return;
    }

    if (checkTie()) {
      endMessage.textContent = `Game is tied!`;
      setTimeout(() => {
        updateDrawScore();
        restartGame();
      }, 3000);
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
    if (cells[i].textContent.trim() === "") {
      return false;
    }
  }
  return true;
}

function restartGame() {
  for (const cell of cells) {
    cell.textContent = "";
    cell.classList.remove("x-cell", "o-cell");
  }
  currentPlayer = players[0];
  endMessage.textContent = `${currentPlayer}'s turn!`;
}

restartButton.addEventListener("click", restartGame);

resetScoreButton.addEventListener("click", resetScore);

startNewgameButton.addEventListener("click", showNewGameScreen);

mainMenuButton.addEventListener("click", showMainMenuScreen);

window.addEventListener("DOMContentLoaded", () => {
   showAppIntroScreen();
   setTimeout(() => {
    hideAppIntroScreen();
   }, 2000);
});

export { winningCombination, cells };
