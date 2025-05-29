// navbarScroll.js
let lastScroll = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
  const currentScroll = window.pageYOffset;

  if (currentScroll > lastScroll) {
    navbar.style.transform = 'translateY(-100%)'; // Oculta
  } else {
    navbar.style.transform = 'translateY(0)'; // Muestra
  }

  lastScroll = currentScroll;
});
