const message = document.querySelector("#message");
const scoreList = document.querySelector("#scoreList");

export function getInputName(inputName) {
  return inputName.value.trim().toLowerCase();
}
export function getInputScore(inputScore) {
  return inputScore.value.trim();
}

export function clearInputName(inputName) {
  inputName.value = "";
}
export function clearInputScore(inputScore) {
  inputScore.value = "";
}

export function showMessage(text) {
  message.textContent = text;
}

export function renderScore(players) {
  scoreList.innerHTML = "";
  players.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = `${item.name}: ${item.score}`;
    scoreList.appendChild(li);
  });
}
