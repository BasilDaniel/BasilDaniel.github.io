const birthdayEl = document.getElementById("birthday");
const ageEl = document.getElementById("age");
const promptEl = document.getElementById("prompt");
const timerEl = document.getElementById("timer");
const countdown = document.getElementById("countdown");
const checkItEl = document.getElementById("checkIt");

let birthday = 0;
let age = 0;
let countDownValue = 0;
const secInYear = 31536000;

birthdayEl.addEventListener("input", (e) => {
  birthday = e.target.valueAsNumber / 1000;
});
ageEl.addEventListener("input", (e) => {
  age = e.target.value * secInYear;
});
checkItEl.addEventListener("click", countDown);

function countDown() {
  const now = Date.now() / 1000;
  if (birthday && age) {
    countDownValue = age - (now.toFixed(0) - birthday);
    promptEl.classList.remove("visible");
    promptEl.classList.add("hidden");
    timerEl.classList.remove("hidden");
    timerEl.classList.add("visible");
    countdown.innerHTML = countDownValue;
    const interval = setInterval(() => {
      countDownValue--;
      countdown.innerHTML = countDownValue;
    }, 1000);
  }
}
