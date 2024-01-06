const boxOne = document.getElementById("boxOne");
const boxTwo = document.getElementById("boxTwo");
const boxThree = document.getElementById("boxThree");
const boxFour = document.getElementById("boxFour");

const c1 = document.getElementById("c1");
const c2 = document.getElementById("c2");
const c3 = document.getElementById("c3");
const c4 = document.getElementById("c4");

const coinBox = document.getElementById("coinBox");
const nextBtn = document.getElementById("nextBtn");

// function myFnc(boxOne) {
//     // Get references to all buttons
//     // var buttons = document.getElementsByTagName("button");

//     boxOne.style.top = "-150px";

// //    boxOne.disabled = false;
// //    boxTwo.disabled = true;
// //    boxThree.disabled = true;
// //    boxFour.disabled = true;

//     // Loop through the buttons and disable all except the clicked one
//     // for (var i = 0; i < buttons.length; i++) {
//     //     if (buttons[i].id !== clickedBtnId) {
//     //         buttons[i].disabled = true;
//     //     }
//     }

function myFnc(catchBtnName) {
  //   var buttons = document.getElementsByClassName('button');

  if (catchBtnName == "btnOne") {
    let x = Math.floor(Math.random() * 1000 + 1);
    c1.innerHTML = x;
    boxOne.style.top = "-150px";
    boxTwo.disabled = true;
    boxThree.disabled = true;
    boxFour.disabled = true;

    if (x > 500) {
        location.reload();
    }else{
        alert('Game Over! Again Restart')
    }
  } else if (catchBtnName == "btnTwo") {
    let x = Math.floor(Math.random() * 1000 + 1);
    c2.innerHTML = x;
    boxTwo.style.left = "350px";
    boxOne.disabled = true;
    boxThree.disabled = true;
    boxFour.disabled = true;

    if (x > 500) {
        location.reload();
    }else{
        alert('Game Over! Again Restart')
    }
  } else if (catchBtnName == "btnThree") {
    let x = Math.floor(Math.random() * 1000 + 1);
    c3.innerHTML = x;
    boxThree.style.top = "350px";
    boxOne.disabled = true;
    boxTwo.disabled = true;
    boxFour.disabled = true;
    if (x > 500) {
        location.reload();
    }else{
        alert('Game Over! Again Restart')
    }
  } else if (catchBtnName == "btnFour") {
    if (x > 500) {
        location.reload();
    }else{
        alert('Game Over! Again Restart')
    }
  }

  for (var i = 0; i < buttons.length; i++) {
    //   if (buttons[0].id !== clickedBtnId) {
    //     buttons[i].disabled = true;
    //     boxOne.style.top = "-150px";
    //   }else if(buttons[1].id !== clickedBtnId){
    //     boxTwo.style.left = "350px";
    //     buttons[i].disabled = true;
    //   }
    // if(buttons[0].id==btnOne){
    //     alert()
    // }
  }
}

// function myFnc(clickedBtnId) {
//   boxTwo.style.left = "350px";
//     let x = Math.floor(Math.random() * 1000 + 1);
//     c2.innerHTML = x;

//     clickedBtnId.disabled=false;
//     boxOne.disabled=true;
//     boxThree.disabled=true;
//     boxFour.disabled=true;

//   }

//   function myFnc(clickedBtnId) {
//     boxThree.style.top = "350px"
//       let x = Math.floor(Math.random() * 1000 + 1);
//       c3.innerHTML = x;

//       clickedBtnId.disabled=false;
//       boxOne.disabled=true;
//       boxTwo.disabled=true;
//       boxFour.disabled=true;

//     }

//     function myFnc(clickedBtnId) {
//         boxFour.style.left = "350px"
//           let x = Math.floor(Math.random() * 1000 + 1);
//           c4.innerHTML = x;

//           clickedBtnId.disabled=false;
//           boxOne.disabled=true;
//           boxTwo.disabled=true;
//           boxThree.disabled=true;

//         }

// function myFnc() {
//     var buttons = document.getElementsByClassName("button");
//     boxTwo.style.left = "350px";
//     let z = Math.floor(Math.random() * 1000 + 1);
//     c2.innerHTML = z;

//     for (var i = 0; i < buttons.length; i++) {
//       if(i==1){
//         buttons.disabled = false;
//       }else{
//         buttons.disabled =true
//       }
//     }
//   }

//   function myFnc(kkk) {
//     // Get references to all buttons
//     var buttons = document.getElementsByClassName("button");
//     boxThree.style.top = "350px"
//     let k = Math.floor(Math.random() * 1000 + 1);
//     c3.innerHTML = k;

//     // Loop through the buttons and disable all except the clicked one
//     for (var i = 0; i < buttons.length; i++) {
//       if (buttons[i].id !== kkk) {
//         buttons[i].disabled = true;
//       }
//     }
//   }

// function myFnc(boxTwo,boxThree,boxFour){
//     boxOne.style.top = "-150px";

//       let x = Math.floor(Math.random() * 1000 + 1);
//       c1.innerHTML = x;

//       boxTwo.style.display = true;
//       boxThree.disabled = true;
//       boxFour.disabled = true;
// }

// let elementClicked = false;
// boxOne.addEventListener("click", function () {
//   boxOne.style.top = "-150px";

//   let x = Math.floor(Math.random() * 1000 + 1);
//   c1.innerHTML = x;

//   if(boxOne.click==true){
//     alert("")
// }

//
// boxTwo.addEventListener("click", function () {
//         boxTwo.style.left = "350px";
//     // event.target.disabled = true;
//   });

// boxTwo.addEventListener("click", function () {
//   boxTwo.style.left = "350px";
//   let x = Math.floor(Math.random() * 1000 + 1);
//   c2.innerHTML = x;

//   boxOne.addEventListener("click", function (e) {
//     e.target.disabled = true;
//   });
// });

/* let cnt = 0;
function coutnFnc(){
    let x = Math.floor(Math.random()*10+1)
    return cnt+=x
}
 */

/* 
boxOne.addEventListener('click',function(){
    boxOne.style.top = "-150px"
})

boxTwo.addEventListener('click',function(){
    boxTwo.style.left = "350px"
    // alert("❌⛔🚫❌OOPS")
})

boxThree.addEventListener('click',function(){
    boxThree.style.top = "350px"
   

})

boxFour.addEventListener('click',function(){
    boxFour.style.left = "350px"
}) */
