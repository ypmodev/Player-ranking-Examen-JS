const inputNa = document.querySelector("#name");
const inputSc = document.querySelector("#score");
const message = document.querySelector("#message");

export function getInputName(inputNa) {
  return inputNa.value;
}
export function getInputScore(inputSc) {
  return inputSc.value;
}

export function showMessage(resultValidate) {
  if (!resultValidate) {
    message.textcontent = "Los datos introducidos no son correctos";
  }
}

export function renderScore(scoreData) {
  score.innerHTML = "";
  items.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = scoreData(item);
    score.appendChild(li);
  });
}

export function clearInputName(inputNa) {
  inputNa.value = "";
}
export function clearInputScore(inputSc) {
  inputSc.value = "";
}
