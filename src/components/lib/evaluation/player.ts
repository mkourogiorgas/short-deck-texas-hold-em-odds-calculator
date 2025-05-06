import { evaluateHand } from "./hand/evaluator";
import { getCombinations } from "./utils/combination";
import { isCurrentStrongerThanBest } from "./utils/validation";
import { Hand, HandEvaluation, Players, PlayerEvaluation } from "../types";

const evaluatePlayer = (combinations: Hand[]): HandEvaluation => {
  return combinations.reduce(
    (best, hand) => {
      const current = evaluateHand(hand);
      return isCurrentStrongerThanBest(current, best) ? current : best;
    },
    { name: "High Card", value: 0, kickers: 0 } as HandEvaluation
  );
};

const evaluateAllPlayers = (
  community: Hand,
  players: Players
): PlayerEvaluation => {
  return Object.entries(players).reduce((accumulator, [key, player]) => {
    const combinations = getCombinations([...community, ...player], 5);
    accumulator[key] = evaluatePlayer(combinations);
    return accumulator;
  }, {} as PlayerEvaluation);
};

export { evaluateAllPlayers };
