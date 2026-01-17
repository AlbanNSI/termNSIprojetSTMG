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
}
//commit pk ça ne commit pas

document.addEventListener("DOMContentLoaded", function () {
const map = L.map("map").setView([45.7181, 4.8084], 14);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
attribution: "&copy; OpenStreetMap contributors"
}).addTo(map);

L.marker([45.7181, 4.8084])
.addTo(map)
.bindPopup("Strik3r – Oullins")
.openPopup();
  });
-------------
document.addEventListener("DOMContentLoaded", () => {
  document.body.classList.add("loaded");
  });

document.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", e => {
    const href = link.getAttribute("href");

    if (href && !href.startsWith("#") && !href.startsWith("http")) {
      e.preventDefault();
      document.body.classList.remove("loaded");
      setTimeout(() => {
        window.location.href = href;
      }, 500);
    }
  });
});


