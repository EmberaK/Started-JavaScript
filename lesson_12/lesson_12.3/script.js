document.addEventListener('DOMContentLoaded', () => {
    const todoList = document.getElementById('todoList');
    const newTaskInput = document.getElementById('newTask');
    const addItemButton = document.getElementById('addItemButton');

    // Добавляем обработчик события клика для кнопки добавления
    addItemButton.addEventListener('click', function () {
        if (newTaskInput.value === '' || newTaskInput.value === ' ') {
            alert('Please, enter sentence');
        } else {
            const newItem = document.createElement('li'); // Создаем новый элемент списка
            let saveNewTaskInput = newTaskInput.value + ' '; // Получаем значение из input

            newItem.textContent = saveNewTaskInput; // Устанавливаем текст элемента списка

            const button = document.createElement('button'); // Создаем кнопку удаления
            button.textContent = 'Видалити'; // Устанавливаем текст кнопки
            button.className = 'deleteBtn'; // Добавляем класс кнопке

            newItem.appendChild(button); // Добавляем кнопку в элемент списка

            todoList.appendChild(newItem); // Добавляем новый элемент списка в ul
            newTaskInput.value = ''; // Очищаем поле ввода

            // Добавляем обработчик события для кнопки удаления
            button.addEventListener('click', function () {
                todoList.removeChild(newItem); // Удаляем элемент списка при клике на кнопку
            });
        }
    });
});

