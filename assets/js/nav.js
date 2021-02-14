const hamburger = document.querySelector(".hamburger");
const main__menu = document.querySelector(".main__menu");

hamburger.addEventListener('click', ()=>{
   //Animate Links
    main__menu.classList.toggle("open");

    //Hamburger Animation
    hamburger.classList.toggle("toggle");
});