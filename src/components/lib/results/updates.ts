import { FrequencyCounter, PlayerEvaluation } from "../types";

const updateFrequencyCounter = (
  object: FrequencyCounter,
  key: string
): void => {
  object[key] = (object[key] || 0) + 1;
};

const updateResults = (
  winners: FrequencyCounter,
  ties: FrequencyCounter,
  roundEvaluation: string[]
) => {
  if (roundEvaluation.length === 1) {
    updateFrequencyCounter(winners, roundEvaluation[0]);
  } else {
    for (const winner of roundEvaluation) {
      updateFrequencyCounter(ties, winner);
    }
  }
};

const updateHeroRanking = (
  ranking: FrequencyCounter,
  allPlayersEvaluation: PlayerEvaluation
) => updateFrequencyCounter(ranking, allPlayersEvaluation.hero.name);

const updateCounter = (rounds: FrequencyCounter, key: string) =>
  updateFrequencyCounter(rounds, key);

export { updateResults, updateHeroRanking, updateCounter };
