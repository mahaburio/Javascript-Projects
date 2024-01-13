const inputOne = document.getElementById('inputOne');
const adult = document.getElementById('adult');
const child = document.getElementById('child');

function checkVal(){
  let x = inputOne.value;
  if(x <=18){
    child.style.display = "block"
  }else{
    adult.style.display = "block"
  }
}
