AOS.init();



let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.header .navbar');

menu.onclick = () => {
    menu.classList.toggle('fa-times'); //vai dar a classe fa-times para o menu, que faz o "X, que chama fa-times na lib"
    navbar.classList.toggle('active'); //vai dar a classe active para o navbar, que faz o "polígono cheio"
};

window.onscroll = () => {
    menu.classList.remove('fa-times'); //vai dar a classe fa-times para o menu, que faz o "X, que chama fa-times na lib"
    navbar.classList.remove('active'); //vai dar a classe active para o navbar, que faz o "polígono cheio"
};

//swiper
var swiper = new Swiper(".home-slider", {
    spaceBetween: 20,
    effect: "fade",
    grabCursor : true,
    loop: true,
    centeredSlides: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
});

//cardswipper
var swiper2 = new Swiper(".mySwiper", {
    effect: "cards",
    grabCursor: true,
});