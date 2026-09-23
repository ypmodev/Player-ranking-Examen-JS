export function validate(inputName, inputScore) {
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
