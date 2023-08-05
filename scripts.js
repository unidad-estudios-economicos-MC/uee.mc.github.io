const mobileMenu = document.getElementById("mobile-menu");
const navbarMenu = document.getElementById("navbar-menu");
const dropdowns = document.querySelectorAll(".menu-dropdown");

mobileMenu.addEventListener("click", () => {
    navbarMenu.classList.toggle("show");
});

// Agregar evento de clic para submenús en móviles
if (window.innerWidth <= 768) {
    dropdowns.forEach((dropdown) => {
        dropdown.addEventListener("click", (e) => {
            e.preventDefault();
            dropdown.querySelector(".sub-menu").classList.toggle("show");
        });
    });
}
