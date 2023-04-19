const categoriesEl = document.querySelectorAll("li.item");

console.log(`Number of categories: ${categoriesEl.length}`);

const listEl = document.querySelector(`li`);

const categoriesUlEl = document.querySelectorAll(`#categories>li`);

categoriesUlEl.forEach((el) => {
  console.log(`Category: ${el.firstElementChild.textContent} 
    Elements: ${el.lastElementChild.children.length}`);
});
