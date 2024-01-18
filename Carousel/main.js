
//  ? ========== Card JS ==========

let prevBtn = document.getElementById("prevBtn");
let nextBtn = document.getElementById("nextBtn");

let cardSec = document.getElementById("cardSec");

let personOne = document.getElementById("personOne");
let personTwo = document.getElementById("personTwo");
let personThree = document.getElementById("personThree");

let isClick = 0;

nextBtn.addEventListener("click", function () {
  isClick++;
  if (isClick == 1) {
    cardSec.style.transform = "translateX(-33%)";
    prevBtn.addEventListener("click", function () {
      cardSec.style.transform = "translateX(-0%)";
      isClick = 0;
    });
  } else if (isClick == 2) {
    cardSec.style.transform = "translateX(-66.5%)";
    prevBtn.addEventListener("click", function () {
      cardSec.style.transform = "translateX(-33%)";
      prevBtn.addEventListener("click", function () {
        cardSec.style.transform = "translateX(-0%)";
      });
    });
  } else {
    isClick === 0;
  }
});