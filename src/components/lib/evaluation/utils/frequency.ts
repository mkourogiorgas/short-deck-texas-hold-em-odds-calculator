import { Hand, FrequencyCounter } from "../../types";
import C from "./constants";

const getCardFrequencies = (
  hand: Hand
): {
  cardFrequencies: FrequencyCounter;
  suitFrequencies: FrequencyCounter;
  cardStrengths: number[];
} => {
  const cardFrequencies: FrequencyCounter = {};
  const suitFrequencies: FrequencyCounter = {};
  const cardStrengths: number[] = [];
  hand.forEach((card) => {
    const { suit, value } = card;
    cardFrequencies[value] = (cardFrequencies[value] || 0) + 1;
    suitFrequencies[suit] = (suitFrequencies[suit] || 0) + 1;
    cardStrengths.push(C.CARD_STRENGTH[value]);
  });
  return { cardFrequencies, suitFrequencies, cardStrengths };
};

const getCardsByFrequency = (
  frequencies: FrequencyCounter,
  targetFrequency: number
): string[] =>
  Object.keys(frequencies).filter(
    (key) => frequencies[key] === targetFrequency
  );

const countPairs = (counts: number[]): number =>
  counts.filter((count) => count === 2).length;

const hasQuads = (counts: number[]): boolean => counts.includes(4);

const hasTrips = (counts: number[]): boolean => counts.includes(3);

export {
  getCardFrequencies,
  getCardsByFrequency,
  countPairs,
  hasQuads,
  hasTrips,
};
