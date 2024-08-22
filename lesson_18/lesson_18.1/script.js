// Устанавливаем начальное время таймера (например, 1 минута 25 секунд)
let totalTimeInSeconds = 85; // 1 минута 25 секунд

// Функция для форматирования времени в формате 01:25
function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
}

// Функция для обновления таймера на странице
function updateTimer() {
    const timerElement = document.getElementById('timer');
    timerElement.textContent = formatTime(totalTimeInSeconds);

    // Если время вышло, останавливаем таймер
    if (totalTimeInSeconds === 0) {
        clearInterval(timerInterval);
    } else {
        totalTimeInSeconds--;
    }
}

// Запускаем таймер с интервалом 1 секунда
const timerInterval = setInterval(updateTimer, 1000);

// Обновляем таймер сразу при загрузке страницы
updateTimer();
