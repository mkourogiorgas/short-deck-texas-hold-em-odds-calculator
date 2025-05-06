import { evaluateAllPlayers } from "./player";
import { isCurrentStrongerThanBest } from "./utils/validation";
import { PlayerEvaluation } from "../types";

const getRoundWinner = (evaluations: PlayerEvaluation): string[] => {
  const bestEvaluation = Object.values(evaluations).reduce((best, current) =>
    isCurrentStrongerThanBest(current, best) ? current : best
  );

  const roundEvaluation: string[] = [];

  for (const player in evaluations) {
    if (
      evaluations[player].value === bestEvaluation.value &&
      evaluations[player].kickers === bestEvaluation.kickers
    ) {
      roundEvaluation.push(player);
    }
  }
  return roundEvaluation;
};

export { evaluateAllPlayers, getRoundWinner };
