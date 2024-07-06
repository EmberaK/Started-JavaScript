
function boxInput() {
    let inputUser; // Объявляем переменную для хранения ввода пользователя
    for (let i = 0; i <= 10; i++) { // Начинаем цикл, который выполнится максимум 11 раз
        inputUser = prompt(`Please enter a number greater than 100`); // Запрашиваем у пользователя число больше 100
        if (Number(inputUser) > 100 || isNaN(inputUser)) { // Проверяем, что введено число больше 100 или не число
            alert(`Result, last information: ${inputUser}`); // Выводим результат, если условие выполнено
            break; // Выходим из цикла
        } else {
            alert('Please enter a number greater than 100'); // Просим ввести число больше 100, если введено меньше
        }
    }
}
boxInput(); // Вызываем функцию
