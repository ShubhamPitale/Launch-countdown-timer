// Elements
const dDay = document.getElementById("d-day");
const dHour = document.getElementById("d-hour");
const dMin = document.getElementById("d-min");
const dSec = document.getElementById("d-sec");
const lDay = document.getElementById("l-day");
const lHour = document.getElementById("l-hour");
const lMin = document.getElementById("l-min");
const lSec = document.getElementById("l-sec");
const dayDis = document.querySelector(".days__display");
const setbtn = document.querySelector(".setbtn");
const closebtn = document.querySelector(".closebtn");
const submitbtn = document.querySelector(".submitbtn");
const overlay = document.querySelector(".overlay");
const form = document.querySelector(".form");
const date = document.getElementById("launch");
const title = document.querySelector(".title");
let time;
let reset;
// Functions
const calculateTime = function () {
  title.innerText = "We're launching soon";
  time = 0;
  let value = `${date.value}`;
  console.log(value);
  if (!value) return;
  console.log(
    value.slice(0, 4),
    value.slice(5, 7),
    value.slice(8, 10),
    value.slice(11, 13),
    value.slice(14, 16)
  );
  time =
    new Date(
      value.slice(0, 4),
      value.slice(5, 7) - 01,
      value.slice(8, 10),
      value.slice(11, 13),
      value.slice(14, 16)
    ) - new Date();

  console.log(time);

  const changeTime = function () {
    if (!(time > 0)) {
      title.innerText = "🎉🎉 Launched 🎉🎉";
      clearInterval(reset);
      return;
    }
    dDay.innerText = `${Math.floor(time / 86400000)}`.padStart(2, "0");
    lDay.innerText = `${Math.floor(time / 86400000)}`.padStart(2, "0");
    dHour.innerText = `${Math.floor((time / 3600000) % 24)}`.padStart(2, "0");
    lHour.innerText = `${Math.floor((time / 3600000) % 24)}`.padStart(2, "0");
    dMin.innerText = `${Math.floor(time / 1000 / 60) % 60}`.padStart(2, "0");
    lMin.innerText = `${Math.floor((time / 1000 / 60) % 60)}`.padStart(2, "0");
    dSec.innerText = `${Math.floor((time / 1000) % 60)}`.padStart(2, "0");
    lSec.innerText = `${Math.floor((time / 1000) % 60)}`.padStart(2, "0");
    time = time - 1000;
    console.log(time);
  };
  reset = setInterval(changeTime, 1000);
};

const showModal = function () {
  overlay.classList.remove("hidden");
  form.classList.remove("hidden");
};
const closeModal = function () {
  overlay.classList.add("hidden");
  form.classList.add("hidden");
};
const closeTime = function () {
  clearInterval(reset);
};
// Event listeners
setbtn.addEventListener("click", showModal);
closebtn.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);
[closeModal, closeTime, calculateTime].forEach((ev) =>
  submitbtn.addEventListener("click", ev)
);

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !form.classList.contains("hide")) {
    closeModal();
  }
});
