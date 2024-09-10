"use strict";

var slideIndex = 0;
function showSlider(index) {
  var slides = document.querySelector('.slides');
  var totalSlides = document.querySelectorAll('.slides img').length;

  // Используем _.clamp для ограничения индекса слайдов
  slideIndex = _.clamp(index, 0, totalSlides - 1);
  slides.style.transform = "translateX(".concat(-slideIndex * 100, "%)");
  updateActivePoint(slideIndex);
}
function moveSlider(step) {
  showSlider(slideIndex + step);
}
function updateActivePoint(index) {
  var points = document.querySelectorAll('.button-point'); // Находим все кнопки точек слайдера.
  points.forEach(function (point, i) {
    // Проходим по каждой точке.
    if (i === index) {
      // Если индекс текущей точки совпадает с индексом активного слайда:
      point.classList.add('active'); // Добавляем этой точке класс 'active', чтобы визуально выделить её.
    } else {
      point.classList.remove('active'); // Для всех остальных точек удаляем этот класс, чтобы они не были активны.
    }
  });
}

// Добавляем события для точек
var points = document.querySelectorAll('.button-point');
points.forEach(function (point, index) {
  point.addEventListener('click', function () {
    showSlider(index);
  });
});
showSlider(slideIndex);
