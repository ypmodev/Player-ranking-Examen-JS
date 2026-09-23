const nameData = document.querySelector("#name");
const scoreData = document.querySelector("#score");
const form = document.querySelector("#form");
const message = document.querySelector("#message");
const scoreList = document.querySelector("#scoreList");

const players = [];
let newPlayer;

// DOM extraer valor de los input
function getInputName(inputName) {
  return inputName.value.trim().toLowerCase();
}
function getInputScore(inputScore) {
  return inputScore.value.trim();
}

function clearInputName(inputName) {
  inputName.value = "";
}
function clearInputScore(inputScore) {
  inputScore.value = "";
}

function showMessage(text) {
  message.textContent = text;
}

function renderScore(players) {
  scoreList.innerHTML = "";
  players.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = `${item.name}: ${item.score}`;
    scoreList.appendChild(li);
  });
}

//validate
function validate(inputName, inputScore) {
  if (
    inputName == "" ||
    inputScore == "" ||
    !isNaN(inputName) ||
    isNaN(inputScore) ||
    inputScore < 0
  ) {
    return false;
  }

  return true;
}

//JS

function duplicate(players, inputName) {
  return players.some((item) => item.name === inputName);
}

function duplicateAll(players, inputName, inputScore) {
  return players.some(
    (item) => item.name === inputName && item.score === inputScore,
  );
}

function updateScore(players, inputName, inputScore) {
  players.forEach((item) => {
    if (item.name === inputName) {
      item.score = inputScore;
    }
  });
}

function sortScore(players) {
  return players.sort((a, b) => b.score - a.score);
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  message.innerHTML = "";

  const inputName = getInputName(nameData);
  const inputScore = getInputScore(scoreData);

  newPlayer = { name: inputName, score: inputScore };

  if (!validate(inputName, inputScore)) {
    showMessage("Debe introducir datos correctos");
    return;
  }

  //llamamos a la funcion duplicado
  if (duplicateAll(players, inputName, inputScore)) {
    showMessage("El jugador con los datos introducidos ya existe");
  } else if (duplicate(players, inputName)) {
    updateScore(players, inputName, inputScore);
    showMessage(`Se han modificado la puntuación de: ${inputName}`);
  } else {
    players.push(newPlayer);
    clearInputName(nameData);
    clearInputScore(scoreData);
  }

  sortScore(players);
  renderScore(players);
});
