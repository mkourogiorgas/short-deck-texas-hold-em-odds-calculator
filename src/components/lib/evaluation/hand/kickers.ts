import { FrequencyCounter, HandName } from "../../types";
import { composeKickersScore, sortKickers } from "../utils/combination";
import { getCardsByFrequency } from "../utils/frequency";

const quadKickersScore = (frequencies: FrequencyCounter): number => {
  const quads = getCardsByFrequency(frequencies, 4)[0];
  const highCard = getCardsByFrequency(frequencies, 1)[0];
  return composeKickersScore(quads, highCard);
};

const fullHouseKickersScore = (frequencies: FrequencyCounter): number => {
  const trips = getCardsByFrequency(frequencies, 3)[0];
  const pair = getCardsByFrequency(frequencies, 2)[0];
  return composeKickersScore(trips, pair);
};

const flushKickersScore = (frequencies: FrequencyCounter): number => {
  const sortedCards = sortKickers(Object.keys(frequencies));
  return composeKickersScore(...sortedCards);
};

const tripsScore = (frequencies: FrequencyCounter): number => {
  const trips = getCardsByFrequency(frequencies, 3)[0];
  const highCards = getCardsByFrequency(frequencies, 1);
  const sortedHighCards = sortKickers(highCards);
  return composeKickersScore(trips, ...sortedHighCards);
};

const twoPairKickersScore = (frequencies: FrequencyCounter): number => {
  const pairs = getCardsByFrequency(frequencies, 2);
  const sortedPairs = sortKickers(pairs);
  const highCard = getCardsByFrequency(frequencies, 1)[0];
  return composeKickersScore(...sortedPairs, highCard);
};

const onePairKickersScore = (frequencies: FrequencyCounter): number => {
  const pair = getCardsByFrequency(frequencies, 2)[0];
  const highCards = getCardsByFrequency(frequencies, 1);
  const sortedHighCards = sortKickers(highCards);
  return composeKickersScore(pair, ...sortedHighCards);
};

const highCardKickersScore = (frequencies: FrequencyCounter): number => {
  const sortedHighCards = sortKickers(Object.keys(frequencies));
  return composeKickersScore(...sortedHighCards);
};

const calculateKickersScore = (
  name: HandName,
  frequencies: FrequencyCounter,
  sortedValues: number[]
): number => {
  const handToKickers: Record<HandName, () => number> = {
    "Flush Royal": () => 0,
    "Straight Flush": () => sortedValues[0],
    Quads: () => quadKickersScore(frequencies),
    "Full House": () => fullHouseKickersScore(frequencies),
    Flush: () => flushKickersScore(frequencies),
    Straight: () => sortedValues[0],
    "Three of a Kind": () => tripsScore(frequencies),
    "Two Pairs": () => twoPairKickersScore(frequencies),
    "One Pair": () => onePairKickersScore(frequencies),
    "High Card": () => highCardKickersScore(frequencies),
  };

  return handToKickers[name]();
};
export { calculateKickersScore };
