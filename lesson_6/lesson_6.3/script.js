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