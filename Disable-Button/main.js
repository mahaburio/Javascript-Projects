const btnOne = document.getElementById("btnOne");
const btnTwo = document.getElementById("btnTwo");

btnOne.addEventListener("click", function (et) {
  et.target.disabled = true;
  btnTwo.addEventListener("click", function () {
    et.target.disabled = true;
  });
});
