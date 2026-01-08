document.addEventListener("DOMContentLoaded", () => {
    const slides = document.querySelector(".slides");
    const images = document.querySelectorAll(".slide");
    const prev = document.querySelector(".prev");
    const next = document.querySelector(".next");
    const dotsContainer = document.querySelector(".dots");

    let index = 0;
    let interval;

    function updateCarousel() {
        slides.style.transform = `translateX(-${index * 100}%)`;
        document.querySelectorAll(".dot").forEach(dot => dot.classList.remove("active"));
        dotsContainer.children[index].classList.add("active");
    }

    function nextSlide() {
        index = (index + 1) % images.length;
        updateCarousel();
    }

    function prevSlide() {
        index = (index - 1 + images.length) % images.length;
        updateCarousel();
    }

    images.forEach((_, i) => {
        const dot = document.createElement("span");
        dot.classList.add("dot");
        if (i === 0) dot.classList.add("active");
        dot.addEventListener("click", () => {
            index = i;
            updateCarousel();
            resetAutoSlide();
        });
        dotsContainer.appendChild(dot);
    });

    next.addEventListener("click", () => {
        nextSlide();
        resetAutoSlide();
    });

    prev.addEventListener("click", () => {
        prevSlide();
        resetAutoSlide();
    });

    function startAutoSlide() {
        interval = setInterval(nextSlide, 4000);
    }

    function resetAutoSlide() {
        clearInterval(interval);
        startAutoSlide();
    }

    startAutoSlide();
});
