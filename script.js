// 1 завдання
const itemBloggingEl = document.getElementById("blogging");
itemBloggingEl.onclick = changeElementStyles;

function changeElementStyles() {
  itemBloggingEl.style.backgroundColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  itemBloggingEl.style.color = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const itemProgrammingEl = document.querySelector(".hobbies-list_programming");

itemProgrammingEl.addEventListener("click", () => {
  itemProgrammingEl.style.backgroundColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  itemProgrammingEl.style.color = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
});

// 2 завданя
const btnAddEl = document.querySelector(".btnAdd");
const btnIncreaseEl = document.querySelector(".btnIncrease");
const btnDecreaseEl = document.querySelector(".btnDecrease");
const btnDeleteEl = document.querySelector(".btnDelete");
const linkEl = document.querySelector(".img-link");
const imgEl = document.querySelector(".img");

btnAddEl.addEventListener("click", () => {
  if (!linkEl.classList.contains("hidden")) {
    alert("This photo is already on your site!");
  }

  linkEl.classList.remove("hidden");
});

btnIncreaseEl.addEventListener("click", () => {
  let imgSize = imgEl.clientWidth;

  if (linkEl.classList.contains("hidden")) {
    alert("Add the photo to the site!");
  }

  imgEl.style.width = imgSize + 50 + "px";
});

btnDecreaseEl.addEventListener("click", () => {
  if (linkEl.classList.contains("hidden")) {
    alert("Add the photo to the site!");
  }

  let imgSize = imgEl.clientWidth;

  imgEl.style.width = imgSize - 50 + "px";
});

btnDeleteEl.addEventListener("click", () => {
  if (linkEl.classList.contains("hidden")) {
    alert("This photo is already deleted from your site!");
  }

  linkEl.classList.add("hidden");
});
