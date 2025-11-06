import { playersScore } from "../features/score.js";
import { appIntroWrapper, gameWrapper, homeWrapper } from "./uiElements.js";
import { oDrawScoreElement, oLossScoreElement, oWinScoreElement, xDrawScoreElement, xLossScoreElement, xWinScoreElement } from "../ui/uiElements";

export function showNewGameScreen() {
  gameWrapper.style.display = "block";
  homeWrapper.style.display = "none";
}

export function showAppIntroScreen() {
  gameWrapper.style.display = "none";
  homeWrapper.style.display = "none";
  appIntroWrapper.style.display = "block";
}

export function showMainMenuScreen() {
  gameWrapper.style.display = "none";
  homeWrapper.style.display = "block";
}

export function updateScoreUI() {
  xWinScoreElement.textContent = playersScore.xPlayerScore.win;
  xLossScoreElement.textContent = playersScore.xPlayerScore.lose;
  xDrawScoreElement.textContent = playersScore.xPlayerScore.draw;

  oWinScoreElement.textContent = playersScore.oPlayerScore.win;
  oLossScoreElement.textContent = playersScore.oPlayerScore.lose;
  oDrawScoreElement.textContent = playersScore.oPlayerScore.draw;
}
