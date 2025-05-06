export interface Card {
  suit: string;
  value: string;
}

export type Hand = Card[];

export interface HandAnalysis {
  cardFrequencies: FrequencyCounter;
  areDifferent: boolean;
  isFlush: boolean;
  isStraight: boolean;
  containsAce: boolean;
  cardStrengths: number[];
}

export interface FrequencyCounter {
  [key: string]: number;
}

export type HandName =
  | "Flush Royal"
  | "Straight Flush"
  | "Quads"
  | "Full House"
  | "Flush"
  | "Straight"
  | "Three of a Kind"
  | "Two Pairs"
  | "One Pair"
  | "High Card";

export interface Players {
  [key: string]: Hand;
}

export interface PlayerEvaluation {
  [key: string]: HandEvaluation;
}

export interface HandEvaluation {
  name: HandName;
  value: number;
  kickers: number;
}
