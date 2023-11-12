let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.header .navbar');

menu.onclick = () => {
    menu.classList.toggle('fa-times'); //vai dar a classe fa-times para o menu, que faz o "X, que chama fa-times na lib"
    navbar.classList.toggle('active'); //vai dar a classe active para o navbar, que faz o "polígono cheio"
}