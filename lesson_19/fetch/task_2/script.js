document.getElementById('userForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Предотвращаем стандартное поведение формы

    // Получаем данные формы
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    // Создаем объект данных для отправки
    const data = {
        name: name,
        email: email
    };

    // Отправляем данные на сервер
    fetch('https://jsonplaceholder.typicode.com/posts', {
         // Используем метод POST для отправки данных на сервер
        method: 'POST',

        // Указываем заголовки для нашего запроса
        headers: {
        // Устанавливаем тип контента в формате JSON
        'Content-Type': 'application/json'
    },

        // Преобразуем данные в строку JSON и отправляем в теле запроса
        body: JSON.stringify(data)

    })
    .then(response => response.json())
    .then(data => {
        console.log('Success:', name.value);
    })
    .catch(error => {
        console.error('Error:', error);
    });
});
