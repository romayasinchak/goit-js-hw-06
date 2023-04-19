const fontSizeControllerEl = document.getElementById(`font-size-control`);
const fontSizeTextEl = document.getElementById(`text`);

function fontSizeChange(event) {
  fontSizeTextEl.style.fontSize = event.currentTarget.value + "px";
}

fontSizeControllerEl.addEventListener("input", fontSizeChange);
