const validationInputEl = document.getElementById(`validation-input`);

validationInputEl.addEventListener(`blur`, getValidationInput);

function getValidationInput(event) {
  const inputDataLength = Number(validationInputEl.dataset.length);
  const inputValueLength = Number(validationInputEl.value.trim().length);

  if (inputValueLength === inputDataLength) {
    validationInputEl.classList.add("valid");
    validationInputEl.classList.remove("invalid");
  } else {
    validationInputEl.classList.remove("valid");
    validationInputEl.classList.add("invalid");
  }
}
