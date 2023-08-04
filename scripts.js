const mobileMenu = document.getElementById("mobile-menu");
const navbarMenu = document.getElementById("navbar-menu");

mobileMenu.addEventListener("click", () => {
    navbarMenu.classList.toggle("show");
});
