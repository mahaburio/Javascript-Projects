const menuBtn = document.getElementById('menuBtn');
const navItem = document.getElementById('navItem');
const cancelBtn = document.getElementById('cancelBtn');

menuBtn.addEventListener('click', function(){
  // navItem.style.display = 'block';
  navItem.style.right = "0vw";
})

cancelBtn.addEventListener('click', function(){
  navItem.style.right = "-50vw"
})









