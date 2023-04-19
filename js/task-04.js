let counterValue = 0;
const valueEL = document.getElementById("value");

const btnDecrementEl = document.querySelector(`[data-action="decrement"]`);
const btnIncrementEl = document.querySelector(`[data-action="increment"]`);

const onBtnClickDecrement = (event) => {
  counterValue -= 1;
  valueEL.textContent = counterValue;
};

const onBtnClickIncrement = (event) => {
  counterValue += 1;
  valueEL.textContent = counterValue;
};

btnDecrementEl.addEventListener(`click`, onBtnClickDecrement);

btnIncrementEl.addEventListener(`click`, onBtnClickIncrement);
