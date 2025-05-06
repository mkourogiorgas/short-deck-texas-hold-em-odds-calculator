import { Hand } from "../../types";
import C from "./constants";

const getCombinations = (
  cards: Hand,
  size: number,
  start = 0,
  combo: Hand = [],
  result: Hand[] = []
): Hand[] => {
  if (combo.length === size) {
    result.push([...combo]);
    return result;
  }

  for (let i = start; i < cards.length; i++) {
    combo.push(cards[i]);
    getCombinations(cards, size, i + 1, combo, result);
    combo.pop();
  }

  return result;
};

const composeKickersScore = (...kickers: string[]): number =>
  kickers.reduce(
    (accumulator, currentValue, currentIndex) =>
      accumulator +
      C.CARD_STRENGTH[currentValue] *
        Math.pow(10, kickers.length - 1 - currentIndex),

    0
  );

const sortKickers = (values: string[]) =>
  values.sort((a, b) => C.CARD_STRENGTH[b] - C.CARD_STRENGTH[a]);

export { composeKickersScore, getCombinations, sortKickers };
