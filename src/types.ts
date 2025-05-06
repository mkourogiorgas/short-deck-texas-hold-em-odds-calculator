export interface Card {
  suit: string;
  value: string;
  index: number;
  isSelected: boolean;
  isInTable?: boolean;
}

export type Hand = Card[];

export interface Players {
  [key: string]: Hand;
}

export interface FrequencyCounter {
  [key: string]: number;
}

export interface Results {
  [key: string]: FrequencyCounter;
}

export type ValidCards = boolean[];

export interface ValidationTable {
  [key: string]: ValidCards;
}
