
const menuButton = document.getElementById("menuButton");
const closeButton = document.getElementById("closeButton");
const sideMenu = document.getElementById("sideMenu");

const shareButton = document.getElementById("shareButton");
const shareMenu = document.getElementById("shareMenu");

// Открыть боковое меню
menuButton.addEventListener("click", function() {
    sideMenu.classList.add("active");
});

// Закрыть боковое меню
closeButton.addEventListener("click", function() {
    sideMenu.classList.remove("active");
});

// Открыть и закрыть Share меню
shareButton.addEventListener("click", function() {
    shareMenu.classList.toggle("active");
});
