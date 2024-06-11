const dropDown = document.querySelector('.arrowdown');
const features = document.querySelector('.box-1');
const company = document.querySelector('.box-2');
const closeUp = document.querySelector('.arrow-up');
const menuDrop = document.querySelector('#menu');
const menuBar = document.querySelector('.mobile-menu')
const closeBtn = document.querySelector('#close-menu')
const menuClose = document.querySelector('.menu-button');

dropDown.addEventListener("click", () => {
  dropDown.style.display ="none";
  closeUp.classList.add("arrow-up");
  closeUp.style.display = "inline-flex";
  features.classList.add("box-1");
  features.style.display = "block";
})

closeUp.addEventListener("click", () => {
    closeUp.style.display = "none";
    dropDown.classList.add("arrowdown");
    dropDown.style.display = "row";
    features.style.display = "none";
}) 
dropDown.addEventListener("click", () => {
    dropDown.style.display = "none";
    closeUp.classList.add("arrow-up");
   closeUp.style.display = "block";
   company.classList.add("box-2");
    company.style.display ="block";
})
closeUp.addEventListener("click", () => {
    closeUp.style.display = "none";
    dropDown.classList.add("arrowdown");
    dropDown.style.display = "flex";
    company.style.display = "none";
})
menuDrop.addEventListener("click", () => {
    menuBar.classList.add("mobile-menu");
    menuBar.style.display = "block";
})
closeBtn.addEventListener("click", () => {
    menuBar.style.display = "none";
    menuClose.classList.add("menu-button");
    menuClose.style.display = "block";
    menuDrop.style.display = "block";
})