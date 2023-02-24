//Esta función sirve para esconder o mostrar el menu
let menu = document.getElementById('menu');

function openMenu() {
    if (menu.classList.contains('hidden')) {
        menu.classList.remove('hidden')
    }
    else {
        menu.classList.add('hidden')
    }
}

//Esta función sirve para marcar como activo la en la página actual
const links = document.querySelectorAll('#menu a');
const currentURL = window.location.href;

links.forEach(link => {
    if (link.href === currentURL) {
        link.setAttribute('aria-current', 'page');
    }
});

//Prueba carrusel
currentSlideID = 1;

sliderElement = document.getElementById('slider');
totalSlides = sliderElement.childElementCount;

showSlide(); // llamada inicial para mostrar la primera diapositiva

function next() {
    if (totalSlides > currentSlideID) {
        currentSlideID++;
        showSlide();
    }
}

function prev() {
    if (currentSlideID > 1) {
        currentSlideID--;
        showSlide();
    }
}

function showSlide() {
    slides = document.getElementById('slider').getElementsByTagName('li')
    for (let index = 0; index < totalSlides; index++) {
        const element = slides[index];
        if (currentSlideID === index + 1) {
            element.classList.remove('hidden')
        } else {
            element.classList.add('hidden')
        }
    }
}

