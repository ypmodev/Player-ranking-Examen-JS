const inputNa = document.querySelector("#name");
const inputSc = document.querySelector("#score");
const formData = document.querySelector("#form");
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
