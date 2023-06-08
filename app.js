const birthday = document.getElementById("birthday");
const age = document.getElementById("age");
const prompt = document.getElementById("prompt");
const timer = document.getElementById("timer");
const countdown = document.getElementById("countdown");
const checkIt = document.getElementById("checkIt");

let birthdayTime = 0;
let ageTime = 0;
let countDownValue = 0;
const yearInMiliSec = 31556952000;

birthday.addEventListener("input", (e) => {
  birthdayTime = e.target.valueAsNumber;
});
age.addEventListener("input", (e) => {
  ageTime = e.target.value * yearInMiliSec;
});
checkIt.addEventListener("click", countDown);

function countDown() {
  if (birthdayTime && ageTime) {
    countDownValue = ageTime - birthdayTime;
    prompt.classList.remove("visible");
    prompt.classList.add("hidden");
    timer.classList.remove("hidden");
    timer.classList.add("visible");
    const interval = setInterval(() => {
      countDownValue--;
      countdown.innerHTML = countDownValue;
    }, 1);
  }
}
