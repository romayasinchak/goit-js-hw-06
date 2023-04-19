const inputEl = document.querySelector(`#name-input`);
const outputEl = document.querySelector(`#name-output`);

const inputRef = document.querySelector("#name-input");
const nameRef = document.querySelector("#name-output");

const inputValue = ({ currentTarget }) => {
  if (currentTarget.value.trim() !== "") {
    outputEl.textContent = currentTarget.value.trim();
  } else {
    outputEl.textContent = "Anonymous";
  }
};

inputEl.addEventListener("input", inputValue);
