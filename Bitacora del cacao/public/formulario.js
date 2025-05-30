document.addEventListener('DOMContentLoaded', function () {
  const form = document.querySelector('.subscribe-form form');

  form.addEventListener('submit', function (e) {
    e.preventDefault(); // Evita que se recargue la página
    const email = document.getElementById('email').value;
    if (email) {
      alert('¡Gracias por suscribirte! Pronto recibirás novedades sobre la Bitácora del Cacao.');
      form.reset(); // Limpia el campo de correo
    }
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('formulario-suscripcion');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      alert("¡Gracias por suscribirte! Pronto recibirás noticias.");
      this.reset();
    });
  }
});
