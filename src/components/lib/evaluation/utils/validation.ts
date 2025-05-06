import { FrequencyCounter, HandEvaluation } from "../../types";

const areCardsDifferent = (cardsFrequency: FrequencyCounter): boolean =>
  Object.keys(cardsFrequency).length === 5;

const isHandFlush = (suitsFrequency: FrequencyCounter): boolean =>
  Object.keys(suitsFrequency).length === 1;

const hasAnAce = (cardsFrequency: FrequencyCounter): boolean =>
  Boolean(cardsFrequency["A"]);

const isHandStraight = (cardStrengths: number[]) => {
  cardStrengths.sort((a, b) => a - b);
  return cardStrengths[4] - cardStrengths[0] === 4;
};

const isCurrentStrongerThanBest = (
  current: HandEvaluation,
  best: HandEvaluation
): boolean => {
  return (
    !best ||
    current.value > best.value ||
    (current.value === best.value && current.kickers > best.kickers)
  );
};

export {
  areCardsDifferent,
  hasAnAce,
  isCurrentStrongerThanBest,
  isHandFlush,
  isHandStraight,
};
