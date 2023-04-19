function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const textColor = document.querySelector(".color");
const changeColorEl = document.querySelector(".change-color");
const bodyEl = document.body;

const changeColorEL = (event) => {
  textColor.textContent = bodyEl.style.backgroundColor = getRandomHexColor();
};

changeColorEl.addEventListener("click", changeColorEL);
