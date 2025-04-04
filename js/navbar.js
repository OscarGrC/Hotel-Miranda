document.addEventListener("DOMContentLoaded", () => {
    const menuIcon = document.getElementById("menu-icon");
    const dropdownMenu = document.getElementById("dropdown-menu");
    const menuToggleIcon = document.getElementById("menu-toggle-icon");

    let menuOpen = false;

    menuIcon.addEventListener("click", () => {
        menuOpen = !menuOpen;
        dropdownMenu.style.display = menuOpen ? "block" : "none";
        menuToggleIcon.src = menuOpen
            ? "../resources/icons/close.png"
            : "../resources/icons/navHambur.png";
        document.querySelector(".navbar").classList.toggle("navbar--expanded", menuOpen);
    });
});