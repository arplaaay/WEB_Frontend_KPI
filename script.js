// Завдання 1

const formEl = document.querySelector(".info-form");

const inputInitialsEl = document.querySelector("#initials");
const inputFacultyEl = document.querySelector("#faculty");
const inputDateEl = document.querySelector("#date");
const inputAddressEl = document.querySelector("#address");
const inputEmailEl = document.querySelector("#mail");
const submitBtnEl = document.querySelector("button[type=submit]");

const dataInitialsEl = document.querySelector("#data-initials");
const dataFacultyEl = document.querySelector("#data-faculty");
const dataDateEl = document.querySelector("#data-date");
const dataAddressEl = document.querySelector("#data-address");
const dataEmailEl = document.querySelector("#data-mail");

const initialsValidation = /[А-Я-ІЄ][а-я-іє]+\s+[А-Я-ІЄ]\.\s+[А-Я-ІЄ]\./;
const facultyValidation = /^[А-Я-ІЄ]{4}$/;
const dateValidation = /^\d{2}\.\d{2}\.\d{4}$/;
const addressValidation = /[м]\.\s[А-Я-ІЄ][а-я-ієї]+/;
const emailValidation = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

formEl.addEventListener("submit", (e) => {
  e.preventDefault();

  const target = e.target;

  if (
    inputInitialsEl.classList.contains("success-input") &&
    inputFacultyEl.classList.contains("success-input") &&
    inputDateEl.classList.contains("success-input") &&
    inputAddressEl.classList.contains("success-input") &&
    inputEmailEl.classList.contains("success-input")
  ) {
    dataInitialsEl.textContent = `ПІБ: ${target[0].value}`;
    dataFacultyEl.textContent = `Група: ${target[1].value}`;
    dataDateEl.textContent = `Дата народження: ${target[2].value}`;
    dataAddressEl.textContent = `Адреса: ${target[3].value}`;
    dataEmailEl.textContent = `Пошта: ${target[4].value}`;
  } else {
    alert("Please enter correct values!");
  }
});

inputInitialsEl.addEventListener("input", (e) => {
  if (e.target.value.length === 0) {
    e.target.classList.remove("error-input");
  } else if (initialsValidation.test(e.target.value)) {
    e.target.classList.add("success-input");
    e.target.classList.remove("error-input");
  } else {
    e.target.classList.remove("success-input");
    e.target.classList.add("error-input");
  }
});

inputFacultyEl.addEventListener("input", (e) => {
  if (facultyValidation.test(e.target.value)) {
    e.target.classList.add("success-input");
    e.target.classList.remove("error-input");
  } else {
    e.target.classList.remove("success-input");
    e.target.classList.add("error-input");
  }
});

inputDateEl.addEventListener("input", (e) => {
  if (dateValidation.test(e.target.value)) {
    e.target.classList.add("success-input");
    e.target.classList.remove("error-input");
  } else {
    e.target.classList.remove("success-input");
    e.target.classList.add("error-input");
  }
});

inputAddressEl.addEventListener("input", (e) => {
  if (addressValidation.test(e.target.value)) {
    e.target.classList.add("success-input");
    e.target.classList.remove("error-input");
  } else {
    e.target.classList.remove("success-input");
    e.target.classList.add("error-input");
  }
});

inputEmailEl.addEventListener("input", (e) => {
  if (emailValidation.test(e.target.value)) {
    e.target.classList.add("success-input");
    e.target.classList.remove("error-input");
  } else {
    e.target.classList.remove("success-input");
    e.target.classList.add("error-input");
  }
});

// Завдання 2

const tableCellEl = document.querySelector(".my-variant");
const allTableCells = document.querySelectorAll("td");
const colorPickerEl = document.querySelector(".color-picker");
let color = "";

tableCellEl.addEventListener("mouseover", (e) => {
  e.target.style.backgroundColor = `#${parseInt(Math.random() * 0xffffff)
    .toString(16)
    .padStart(6, "0")}`;
});

colorPickerEl.addEventListener("change", (e) => {
  tableCellEl.style.backgroundColor = e.target.value;
  color = e.target.value;
});

tableCellEl.addEventListener("dblclick", (e) => {
  allTableCells.forEach((element) => {
    if (!element.classList.contains("my-variant")) {
      element.style.backgroundColor = color;
    }
  });
});
