import { getLocal } from "../utils/storage";

const defaultScore = {
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

export const playersScore = getLocal("playersScore", defaultScore);
