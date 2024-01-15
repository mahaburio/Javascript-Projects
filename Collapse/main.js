let updateBtn = document.getElementById('updateBtn');
let contactBtn = document.getElementById('contactBtn');
let programBtn = document.getElementById('programBtn');
let newsBtn = document.getElementById('newsBtn');

let updateText = document.getElementById('updateText');
let contactTxt = document.getElementById('contactTxt');
let programText = document.getElementById('programText');
let newsText = document.getElementById('newsText');

let box = document.getElementById('box');


contactBtn.addEventListener('click', function(){
  updateText.style.display='none'
  programText.style.display = 'none';
  newsText.style.display = 'none';
  contactTxt.style.display = 'block';

  this.classList.add("active");

  contactTxt.classList.add('animd');



  programBtn.classList.remove('active')
  newsBtn.classList.remove('active')
  updateBtn.classList.remove('active')



})


programBtn.addEventListener('click', function(){
  updateText.style.display='none'
  contactTxt.style.display = 'none';
  newsText.style.display = 'none';
  programText.style.display = 'block';

  this.classList.add("active");
  programText.classList.add('animd');

  contactBtn.classList.remove('active')
  newsBtn.classList.remove('active')
  updateBtn.classList.remove('active')
})


newsBtn.addEventListener('click', function(){
  updateText.style.display='none'
  contactTxt.style.display = 'none';
  programText.style.display = 'none';
  newsText.style.display = 'block';

  this.classList.add("active");

  newsText.classList.add('animd');

  contactBtn.classList.remove('active')
  programBtn.classList.remove('active')
  updateBtn.classList.remove('active')
})

updateBtn.addEventListener('click', function(){
  newsText.style.display='none'
  contactTxt.style.display = 'none';
  programText.style.display = 'none';
  updateText.style.display = 'block';

  this.classList.add("active");

  updateText.classList.add('animd')

  contactBtn.classList.remove('active')
  programBtn.classList.remove('active')
  newsBtn.classList.remove('active')
})





