const showMenu = document.getElementById("menu");
const clickAbrir = document.getElementById("abrir");
const clickRemove = document.getElementById("cerrar");

clickAbrir.addEventListener("click", (e) => {
   showMenu.classList.add("show")
});

clickRemove.addEventListener("click", (e) => {
    showMenu.classList.remove("show");
})