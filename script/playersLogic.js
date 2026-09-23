export function duplicate(players, inputName) {
  return players.some((item) => item.name === inputName);
}

export function duplicateAll(players, inputName, inputScore) {
  return players.some(
    (item) => item.name === inputName && item.score === inputScore,
  );
}

export function updateScore(players, inputName, inputScore) {
  players.forEach((item) => {
    if (item.name === inputName) {
      item.score = inputScore;
    }
  });
}

export function sortScore(players) {
  return players.sort((a, b) => b.score - a.score);
}
