function removeCharacters() {
    // Запрашиваем у пользователя ввод строки
    const inputString = prompt(`Please enter your string`, `hello world`);
    
    // Запрашиваем у пользователя символы для удаления из строки
    const charactersToRemove = prompt(`Please enter characters to remove`, "ld");
    
    // Создаем переменную для хранения изменяемой строки
    let modifiedString = inputString;

    // Итерируемся по каждому символу в строке символов для удаления
    for (const character of charactersToRemove) {
        // Создаем регулярное выражение для замены всех вхождений текущего символа в строке
        const regexPattern = new RegExp(character, 'g');
        
        // Заменяем все вхождения текущего символа в modifiedString на пустую строку
        modifiedString = modifiedString.replace(regexPattern, '');
    }

    // Выводим результат после удаления символов пользователю
    alert(`Result: ${modifiedString}`);
}

