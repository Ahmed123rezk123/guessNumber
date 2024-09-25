"use strict";

let check = document.querySelector(".check");
let again = document.querySelector(".again");
let number = +(Math.trunc(Math.random() * 20) + 1);
let score = 20;

let displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

let displayNumber = function (number) {
  document.querySelector(".number").textContent = number;
};
check.addEventListener("click", function () {
  let guess = +document.querySelector(".guess").value;
  if (!guess) {
    displayMessage("⛔ No Number!");
  } else if (guess === number) {
    displayNumber(number);
    displayMessage("🎉 Correct Number!");
    document.body.style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";
    document.querySelector(".highscore").textContent = score;
  } else if (guess !== number) {
    if (score > 1) {
      displayMessage(guess > number ? "📈 Too high!" : "📉 Too low!");
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      displayMessage("💥 You lost the game!");
      document.querySelector(".score").textContent = 0;
    }
  }
});

again.addEventListener("click", function () {
  document.body.style.backgroundColor = "#222";
  number = +(Math.trunc(Math.random() * 20) + 1);
  score = 20;
  displayNumber("?");
  displayMessage("Start guessing...");
  document.querySelector(".score").textContent = score;
  document.querySelector(".guess").value = "";
  document.querySelector(".number").style.width = "15rem";
});
