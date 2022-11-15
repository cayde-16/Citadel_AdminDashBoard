const closebtn = document.querySelector('#close-btn');
const menubtn = document.querySelector('.menu-btn');
const sideMenu = document.querySelector("aside");


menubtn.addEventListener("click", () => {
    sideMenu.style.display = "block"
})


closebtn.addEventListener("click", () => {
    sideMenu.style.display = "none";
})
