document.addEventListener("DOMContentLoaded", () => {
    let index = 0;
    const slides = document.querySelector('.slides');
    const slideCount = document.querySelectorAll('.slide').length;

    const dotsContainer = document.querySelector('.dots');

   
    for (let i = 0; i < slideCount; i++) {
        const dot = document.createElement("span");
        dot.addEventListener("click", () => showSlide(i));
        dotsContainer.appendChild(dot);
    }

    const dots = document.querySelectorAll('.dots span');

    function showSlide(n) {
        index = (n + slideCount) % slideCount;
        slides.style.transform = `translateX(-${index * 100}%)`;

        dots.forEach(d => d.classList.remove("active"));
        dots[index].classList.add("active");
    }

    document.querySelector('.next').addEventListener("click", () => showSlide(index + 1));
    document.querySelector('.prev').addEventListener("click", () => showSlide(index - 1));

    showSlide(0);

    
    setInterval(() => {
        showSlide(index + 1);
    }, 4000);
});
