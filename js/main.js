const navMenu = document.getElementById("nav-menu")
const navLink = document.getElementById("nav-link")
const Hambug = document.getElementById("hambug")

Hambug.addEventListener("click", ()=>{
   const wrapper = navMenu.parentElement;
   wrapper.classList.toggle('max-h-0');
   wrapper.classList.toggle('max-h-96');


    Hambug.classList.toggle("ri-menu-4-line");
    Hambug.classList.toggle("ri-close-large-fill");
})


const swiper = new Swiper('.swiper', {

    loop: true,

    pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  slidesPerView:3,
  spaceBetween:20,
  breakpoints:{
    320:{
        slidesPerView:1
    },
    968:{
        slidesPerView:2
    },
    1200:{
        slidesPerView:3
    },
  },
})