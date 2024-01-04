let showHours = document.getElementById("showHours");
let showMinutes = document.getElementById("showMinutes");
let showSeconds = document.getElementById("showSeconds");
let showAP = document.getElementById("showAP");

function myTimer() {
  const date = new Date();

  let h = date.getHours();
  let m = date.getMinutes();
  let s = date.getSeconds();

  let amPM = h >= 12 ? "PM" : "AM";

  let mm = m < 10 ? "0" + m : m;
  let ss = s < 10 ? "0" + s : s;


/* 
    ! let hm = .... {jodi hours 12 upore and 23 ar soman ba choto hole hours theke 12 minus aar jodi ai condition a na pore tahole h ar value no change thakbe}

    * let hh = .... {jokhon hours 10 r niche thakbe tokhon setar sathe "0" string hisabe add kora hobe}

    TODO :: let xx = .... {jodi hh==0 hoi tahole h+12 mane jokhon hours 23 r por 24 hobe tokhon time hoi 00:00 tai ai niom kora hoiche}

*/


  function hourSet() {
    let hm = h > 12 && h <= 23 ? h - 12 : h;
    let hh = hm < 10 ? "0" + hm : hm;
    let xx = hh == 0 ? h + 12 : hh;

    return xx;
  }

  showHours.innerHTML = hourSet();
  showMinutes.innerHTML = mm;
  showSeconds.innerHTML = ss;
  showAP.innerHTML = amPM;
}

myTimer();

setInterval(myTimer, 1000);
