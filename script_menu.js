function toggleMenu() {
  document.getElementById("menu-lateral").classList.toggle("open");
  document.getElementById("overlay").classList.toggle("show");
  console.log("Toggle menu called");
}

function closeMenu() {
  document.getElementById("menu-lateral").classList.remove("open");
  document.getElementById("overlay").classList.remove("show");
  console.log("Close menu called");
}

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
  console.log("Je crois c raciste");
}