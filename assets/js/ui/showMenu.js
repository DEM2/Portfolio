export function showMenu() {
    var menu = document.getElementsByClassName("site-nav");
    var boton = document.getElementById("hamburger-btn");

    boton.addEventListener("click", ()=>{
         menu[0].classList.toggle("active")
         boton.classList.toggle("is-active")
    })
}