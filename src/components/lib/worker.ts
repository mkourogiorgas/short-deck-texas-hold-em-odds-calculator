import { getResults } from "./results/results";

self.onmessage = function (message) {
  const { communities, players } = message.data;
  const results = getResults(communities, players);

  self.postMessage(results);
};
