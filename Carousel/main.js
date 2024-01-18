//  ? ========== Card JS ==========

  /* 
 TODO ========== Radio Button ========== */

let radioOne = document.getElementById("radioOne");
let radioTwo = document.getElementById("radioTwo");
let radioThree = document.getElementById("radioThree");

/* 
 TODO ========== Prev/Next Button ========== */

let prevBtn = document.getElementById("prevBtn");
let nextBtn = document.getElementById("nextBtn");
/* 
 TODO ========== Card ========== */

let cardSec = document.getElementById("cardSec");


let isClick = 0;

nextBtn.addEventListener("click", function () {
  isClick++;
  if (isClick == 1) {
    cardSec.style.transform = "translateX(-33%)";

    radioTwo.classList.add("active");

    radioOne.classList.remove("active");
    radioThree.classList.remove("active");

    prevBtn.addEventListener("click", function () {
      cardSec.style.transform = "translateX(-0%)";
      isClick = 0;

      radioOne.classList.add("active");

      radioThree.classList.remove("active");
      radioTwo.classList.remove("active");
    });
  } else if (isClick == 2) {
    cardSec.style.transform = "translateX(-66.5%)";

    radioThree.classList.add("active");

    radioTwo.classList.remove("active");
    radioOne.classList.remove("active");

    prevBtn.addEventListener("click", function () {
      cardSec.style.transform = "translateX(-33%)";

      radioTwo.classList.add("active");

      radioOne.classList.remove("active");
      radioThree.classList.remove("active");

      prevBtn.addEventListener("click", function () {
        cardSec.style.transform = "translateX(-0%)";

        radioOne.classList.add("active");

        radioTwo.classList.remove("active");
        radioThree.classList.remove("active");
      });
    });
  } else {
    isClick === 0;
  }
});

radioTwo.addEventListener("click", function () {
  cardSec.style.transform = "translateX(-33%)";

  radioTwo.classList.add("active");

  radioOne.classList.remove("active");
  radioThree.classList.remove("active");
});

radioThree.addEventListener("click", function () {
  cardSec.style.transform = "translateX(-66%)";

  radioThree.classList.add("active");

  radioOne.classList.remove("active");
  radioTwo.classList.remove("active");


});

radioOne.addEventListener("click", function () {
  cardSec.style.transform = "translateX(0%)";

  radioOne.classList.add("active");

  radioThree.classList.remove("active");
  radioTwo.classList.remove("active");
});


