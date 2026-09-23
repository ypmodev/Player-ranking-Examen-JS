const inputNa = document.querySelector("#name");
const inputSc = document.querySelector("#score");
const message = document.querySelector("#message");

function getInputName(inputNa) {
  return inputNa.value;
}
function getInputName(inputSc) {
  return inputSc.value;
}

function showMessage(resultValidate) {
  if (!resultValidate) {
    message.textcontent = "Los datos introducidos no son correctos";
  }
}

export function renderScore(items, scoreData) {
  score.innerHTML = "";
  items.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = scoreData(item);
    score.appendChild(li);
  });
}

export function clearInput(inputNa) {
  inputNa.value = "";
}
export function clearInput(inputSc) {
  inputSc.value = "";
}
