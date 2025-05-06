import { calculateKickersScore } from "./kickers";
import {
  countPairs,
  getCardFrequencies,
  hasTrips,
  hasQuads,
} from "../utils/frequency";
import {
  areCardsDifferent,
  isHandFlush,
  hasAnAce,
  isHandStraight,
} from "../utils/validation";
import {
  Hand,
  HandAnalysis,
  HandName,
  FrequencyCounter,
  HandEvaluation,
} from "../../types";
import C from "./constants";

const analyzeHand = (hand: Hand): HandAnalysis => {
  const { cardFrequencies, suitFrequencies, cardStrengths } =
    getCardFrequencies(hand);
  const areDifferent = areCardsDifferent(cardFrequencies);
  const isFlush = isHandFlush(suitFrequencies);
  const containsAce = hasAnAce(cardFrequencies);
  const isStraight = areDifferent && isHandStraight(cardStrengths);

  return {
    cardFrequencies,
    areDifferent,
    isFlush,
    isStraight,
    containsAce,
    cardStrengths,
  };
};

const determineHandName = (
  frequencies: FrequencyCounter,
  areDifferent: boolean,
  isFlush: boolean,
  isStraight: boolean,
  containsAce: boolean
): HandName => {
  if (areDifferent) {
    if (isFlush && isStraight)
      return containsAce ? "Flush Royal" : "Straight Flush";
    if (isFlush) return "Flush";
    if (isStraight) return "Straight";
    return "High Card";
  }

  const counts = Object.values(frequencies);
  const quads = hasQuads(counts);
  const trips = hasTrips(counts);
  const pairs = countPairs(counts);

  if (quads) return "Quads";
  if (trips && pairs) return "Full House";
  if (trips) return "Three of a Kind";
  if (pairs === 2) return "Two Pairs";
  return pairs === 1 ? "One Pair" : "High Card";
};

const evaluateHand = (hand: Hand): HandEvaluation => {
  const {
    cardFrequencies,
    areDifferent,
    isFlush,
    isStraight,
    containsAce,
    cardStrengths,
  } = analyzeHand(hand);

  const name = determineHandName(
    cardFrequencies,
    areDifferent,
    isFlush,
    isStraight,
    containsAce
  );

  const value = C.HAND_STRENGTH[name];
  const kickers = calculateKickersScore(name, cardFrequencies, cardStrengths);
  return { name, value, kickers };
};

export { evaluateHand };
