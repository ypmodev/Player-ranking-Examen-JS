import {
  getInputName,
  getInputScore,
  clearInputName,
  clearInputScore,
  showMessage,
  renderScore,
} from "/script/ui.js";

import {
  duplicate,
  duplicateAll,
  updateScore,
  sortScore,
} from "/script/playersLogic.js";

import { validate } from "/script/validate.js";

const nameData = document.querySelector("#name");
const scoreData = document.querySelector("#score");
const form = document.querySelector("#form");

const players = [];
let newPlayer;

form.addEventListener("submit", (event) => {
  event.preventDefault();
  showMessage("");

  const inputName = getInputName(nameData);
  const inputScore = getInputScore(scoreData);

  newPlayer = { name: inputName, score: inputScore };

  if (!validate(inputName, inputScore)) {
    showMessage("Debe introducir datos correctos");
    return;
  }

  if (duplicateAll(players, inputName, inputScore)) {
    showMessage("El jugador con los datos introducidos ya existe");
  } else if (duplicate(players, inputName)) {
    updateScore(players, inputName, inputScore);
    showMessage(`Se ha modificado la puntuación de: ${inputName}`);
  } else {
    players.push(newPlayer);
    clearInputName(nameData);
    clearInputScore(scoreData);
  }

  sortScore(players);
  renderScore(players);
});
