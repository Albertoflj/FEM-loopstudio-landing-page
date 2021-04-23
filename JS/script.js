const hamburgerMenu = document.getElementById("hamburger-menu");
const menu = document.getElementById("menu");
const body = document.getElementsByTagName('body')[0];

hamburgerMenu.addEventListener('click', function(){
    hamburgerMenu.classList.toggle("open");
    menu.classList.toggle("dn");
    body.classList.toggle("oyh");
})