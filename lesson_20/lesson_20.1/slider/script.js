let slideIndex = 0;

function showSlider(index) {
    const slides = document.querySelector('.slides');
    const totalSlides = document.querySelectorAll('.slides img').length;

    // Используем _.clamp для ограничения индекса слайдов
    slideIndex = _.clamp(index, 0, totalSlides - 1);
    
    slides.style.transform = `translateX(${-slideIndex * 100}%)`;
}

function moveSlider(step) {
    showSlider(slideIndex + step);
}

showSlider(slideIndex);