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

const sr = ScrollReveal({ // Capital 'S' here
    origin: 'bottom',
    distance: '60px',
    duration: 3000,
    delay: 600,
    // reset: true,
});

sr.reveal(".hero__text", { origin: 'top' });
sr.reveal(".steps_step", {distance: '100px', interval:100});
sr.reveal(".about__text", {origin: 'left'});
sr.reveal(".about__image", {origin: 'right', delay:800});
sr.reveal(".testimonials__bg", {delay:800});
sr.reveal(".testimonials__title");
sr.reveal(".testimonial_slider", {delay:100});
sr.reveal(".brans__img", {delay:600, distance:'100px', interval:100});
sr.reveal(".work__title");
sr.reveal(".work__subtitle", {delay:800});
sr.reveal(".work__grid", {delay:1000});
sr.reveal(".stats")
sr.reveal(".stats__items", {distance:'100px', interval:100});
sr.reveal(".news__title");
sr.reveal(".news__sutitle", {delay:800});