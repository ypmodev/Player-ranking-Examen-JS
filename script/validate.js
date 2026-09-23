const inputNa = document.querySelector("#name");
const inputSc = document.querySelector("#score");

const inputName = inputNa.value.trim().toLowerCase();
const inputScore = inputSc.value.trim();

function validate(inputName, inputScore) {
  if (
    inputName == "" ||
    inputScore == "" ||
    isNaN(inputName) ||
    !isNaN(Number(inputScore) || inputScore < 0)
  ) {
    return false;
  }

  return true;
}

console.log(validate());
