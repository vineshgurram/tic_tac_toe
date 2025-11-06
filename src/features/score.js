import { updateScoreUI } from "../ui/uiController";
import { setLocal } from "../utils/storage";
import { playersScore } from "../state/store";

export function updateWinScore(player) {
  if (player === "X") {
    playersScore.xPlayerScore.win++;
    playersScore.oPlayerScore.lose++;
  } else {
    playersScore.oPlayerScore.win++;
    playersScore.xPlayerScore.lose++;
  }
  setLocal("playersScore", playersScore);
  updateScoreUI();
}

export function updateDrawScore() {
  playersScore.oPlayerScore.draw++;
  playersScore.xPlayerScore.draw++;
  setLocal("playersScore", playersScore);
  updateScoreUI();
}

export function resetScore() {
  playersScore.xPlayerScore = { win: 0, lose: 0, draw: 0 };
  playersScore.oPlayerScore = { win: 0, lose: 0, draw: 0 };
  setLocal("playersScore", playersScore);
  updateScoreUI();
}

export { playersScore };