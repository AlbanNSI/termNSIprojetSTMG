function toggleMenu() {
  document.getElementById("menu-lateral").classList.toggle("open");
  document.getElementById("overlay").classList.toggle("show");
}

function closeMenu() {
  document.getElementById("menu-lateral").classList.remove("open");
  document.getElementById("overlay").classList.remove("show");
}

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}