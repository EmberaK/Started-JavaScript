function removeElement() {
    // Отримуємо масив від користувача та перетворюємо його в масив чисел
    const inputArray = prompt('Please enter your numbers, separated by commas', '1,3,4,6,2,5,7').split(',').map(Number);
    
    // Отримуємо елемент, який потрібно видалити
    const itemToRemove = Number(prompt('Please enter the number you want to remove', '4'));
    
    // Фільтруємо масив, щоб виключити елемент, який потрібно видалити
    const filteredArray = inputArray.filter(element => element !== itemToRemove);
    
    // Виводимо результат
    alert(`Result: ${filteredArray}`);
}

// Викликаємо функцію для тестування
removeElement();


// function removeElement() {
//     // Запрос ввода массива и преобразование его в массив чисел
//     let array = prompt('Введите массив чисел через запятую', '1,3,4,6,2,5,7').split(',').map(Number);
//     // Запрос ввода числа для удаления
//     let itemToRemove = Number(prompt('Введите число для удаления', 4));
    
//     // Фильтрация массива для удаления указанного элемента
//     let resultArray = array.filter(item => item !== itemToRemove);
    
//     alert(`Результат: ${resultArray}`);
//     }
    
//     removeElement();
    