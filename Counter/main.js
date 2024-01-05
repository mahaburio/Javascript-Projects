const countPoint = document.getElementById('countPoint');
const increBtn = document.getElementById('increBtn');
const decreBtn = document.getElementById('decreBtn');


var count = 0;
function increFnc(){
  count +=1
  countPoint.innerHTML=count
}

function decreFnc(){
    count -=1
    countPoint.innerHTML=count
  }
  
  
  

