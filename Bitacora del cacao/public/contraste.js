// switch.js
document.addEventListener("DOMContentLoaded", function () {
  const toggle = document.getElementById('toggle-contraste');
  toggle.addEventListener('change', function () {
    document.body.classList.toggle('alto-contraste', this.checked);
  });
});
