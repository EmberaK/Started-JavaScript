// Функція для вирахування середнього арифметичного числових елементів масиву
function calculateAverage(array) {
    let sum = 0; // Ця змінна для зберігання суми всіх чисел
    let count = 0; // Ця змінна для підрахунку кількості чисел
    
    // Проходимося по кожному елементу масиву
    array.forEach(element => {
    // Перевіряємо, чи елемент є числом
    if (typeof element === 'number' && !isNaN(element)) {
    sum += element; // Додаємо елемент до суми
    count++; // Збільшуємо лічильник
    }
    });
    
    // Якщо були числа, повертаємо середнє, інакше - 0
    return count > 0 ? sum / count : 0;
    }
    
    // Функція для отримання масиву з рядка, введеного користувачем
    function getArrayFromUserInput() {
    // Запитуємо у користувача ввести дані
    const inputString = prompt('Будь ласка, введіть числа, розділені комами');
    // Розділяємо введений рядок на масив за допомогою коми
    const stringArray = inputString.split(',');
    // Перетворюємо кожен елемент рядка у число або залишаємо як рядок
    const mixedArray = stringArray.map(item => {
    const number = parseFloat(item);
    return isNaN(number) ? item : number;
    });
    // Повертаємо отриманий масив
    return mixedArray;
    }
    
    // Отримуємо масив з введення користувача
    const mixedArray = getArrayFromUserInput();
    
    // Викликаємо функцію calculateAverage і передаємо їй масив
    const average = calculateAverage(mixedArray);
    
    // Виводимо результат у консоль
    console.log('Середнє арифметичне числових елементів:', average);
    // Виводимо результат у спливаючому вікні
    alert(`Середнє арифметичне числових елементів: ${average}`);
    