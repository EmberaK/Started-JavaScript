const slides = document.querySelector('.slides');
const slide = document.querySelectorAll('.slide');
const nextBtn = document.querySelector('#next');
const prevBtn = document.querySelector('#prev');
const dots = document.querySelectorAll('.dot');

let currentIndex = 0;

function updateSlider() {
    slides.style.transform = `translateX(-${currentIndex * 100}%)`;
    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentIndex);
    });
    prevBtn.style.display = currentIndex === 0 ? 'none' : 'block';
    nextBtn.style.display = currentIndex === slide.length - 1 ? 'none' : 'block';
}

nextBtn.addEventListener('click', () => {
    if (currentIndex < slide.length - 1) {
        currentIndex++;
        updateSlider();
    }
});

prevBtn.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        updateSlider();
    }
});

dots.forEach(dot => {
    dot.addEventListener('click', (e) => {
        currentIndex = parseInt(e.target.getAttribute('data-index'));
        updateSlider();
    });
});

updateSlider();
