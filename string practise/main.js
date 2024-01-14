let inputName = document.getElementById("inputName");
let inputAge = document.getElementById("inputAge");
let submitBtn = document.getElementById("submitBtn");

submitBtn.addEventListener("click", function () {
  let inputNameVal = inputName.value.trim().replace(" ", "").toLowerCase();
  let inputAgeVal = parseInt(
    inputAge.value.trim().replace(" ", "").toLowerCase()
  );

  if(inputNameVal=='' || inputAgeVal==''){
    alert('Please fill the input box')
  }else if (inputNameVal == "mahaburrahman" && inputAgeVal>20) {
    alert("Hello! Mahabur Rahman \nYour age is more than 20 \nNow you are adult")
  }
});
