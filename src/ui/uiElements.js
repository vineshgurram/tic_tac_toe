const xWinScoreElement = document.getElementById("xWinScore");
const xLossScoreElement = document.getElementById("xLossScore");
const xDrawScoreElement = document.getElementById("xDrawScore");
const oWinScoreElement = document.getElementById("oWinScore");
const oLossScoreElement = document.getElementById("oLossScore");
const oDrawScoreElement = document.getElementById("oDrawScore");
const cells = document.querySelectorAll(".cell");
const endMessage = document.getElementById("endMessage");
const restartButton = document.getElementById("restartButton");
const startNewgameButton = document.getElementById("startNewgameButton");
const resetScoreButton = document.getElementById("resetScoreButton");
const mainMenuButton = document.getElementById("mainMenuButton");
const gameWrapper = document.getElementById("game-wrapper");
const homeWrapper = document.getElementById("home-wrapper");
const appIntroWrapper = document.getElementById("app-intro-wrapper");

export {
  xWinScoreElement,
  xLossScoreElement,
  xDrawScoreElement,
  oWinScoreElement,
  oLossScoreElement,
  oDrawScoreElement,
  cells,
  endMessage,
  restartButton,
  startNewgameButton,
  resetScoreButton,
  gameWrapper,
  homeWrapper,
  mainMenuButton,
  appIntroWrapper
};
