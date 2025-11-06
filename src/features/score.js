import { updateScoreUI } from "../ui/uiController";

const playersScore = {
  xPlayerScore: {
    win: 0,
    lose: 0,
    draw: 0,
  },
  oPlayerScore: {
    win: 0,
    lose: 0,
    draw: 0,
  },
};

export function updateWinScore(player) {
  if (player === "X") {
    playersScore.xPlayerScore.win++;
    playersScore.oPlayerScore.lose++;
  } else {
    playersScore.oPlayerScore.win++;
    playersScore.xPlayerScore.lose++;
  }
  updateScoreUI();
}

export function updateDrawScore() {
  playersScore.oPlayerScore.draw++;
  playersScore.xPlayerScore.draw++;
  updateScoreUI();
}

export function resetScore() {
  playersScore.xPlayerScore = { win: 0, lose: 0, draw: 0 };
  playersScore.oPlayerScore = { win: 0, lose: 0, draw: 0 };
  updateScoreUI();
}

export { playersScore };
