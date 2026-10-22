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