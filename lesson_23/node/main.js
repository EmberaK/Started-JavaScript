const addFunction = require('./math');
console.log(addFunction(2, 1)); 


const http = require('http');
const fs = require('fs');
const path = './data.txt';

// Функция для чтения данных из файла
const readDataFromFile = () => {
  if (!fs.existsSync(path)) {
    return [];
  }
  const data = fs.readFileSync(path, 'utf8');
  return JSON.parse(data);
};

// Функция для записи данных в файл
const writeDataToFile = (data) => {
  fs.writeFileSync(path, JSON.stringify(data, null, 2));
};

// Инициализация: если файла data.txt нет, создаем его с пустым массивом
if (!fs.existsSync(path)) {
  fs.writeFileSync(path, '[]');
}

// Создание HTTP сервера
const server = http.createServer((req, res) => {
  const { method, url } = req;
  
  // Устанавливаем заголовки для JSON-ответов
  res.setHeader('Content-Type', 'application/json');

  // GET /items - Получение всех items из файла
  if (method === 'GET' && url === '/items') {
    const items = readDataFromFile();
    res.writeHead(200);
    res.end(JSON.stringify(items));

  // POST /items - Добавление нового item в файл
  } else if (method === 'POST' && url === '/items') {
    let body = '';

    req.on('data', chunk => {
      body += chunk.toString();
    });

    req.on('end', () => {
      const { name } = JSON.parse(body);
      const items = readDataFromFile();
      const newItem = { id: items.length + 1, name };
      items.push(newItem); // Добавляем новый item
      writeDataToFile(items); // Записываем в файл
      res.writeHead(201);
      res.end(JSON.stringify(newItem));
    });

  // PUT /items/:id - Обновление item по id
  } else if (method === 'PUT' && url.startsWith('/items/')) {
    const id = parseInt(url.split('/')[2], 10); // Получаем id из URL
    let body = '';

    req.on('data', chunk => {
      body += chunk.toString();
    });

    req.on('end', () => {
      const { name } = JSON.parse(body);
      const items = readDataFromFile();
      const itemIndex = items.findIndex(i => i.id === id);

      if (itemIndex !== -1) {
        items[itemIndex].name = name; // Обновляем имя элемента
        writeDataToFile(items); // Записываем изменения в файл
        res.writeHead(200);
        res.end(JSON.stringify(items[itemIndex]));
      } else {
        res.writeHead(404);
        res.end(JSON.stringify({ message: 'Item not found' }));
      }
    });

  // DELETE /items/:id - Удаление item по id
  } else if (method === 'DELETE' && url.startsWith('/items/')) {
    const id = parseInt(url.split('/')[2], 10); // Получаем id из URL
    const items = readDataFromFile();
    const updatedItems = items.filter(i => i.id !== id);

    if (updatedItems.length !== items.length) {
      writeDataToFile(updatedItems); // Записываем обновлённые данные в файл
      res.writeHead(204); // Успешное удаление
      res.end();
    } else {
      res.writeHead(404);
      res.end(JSON.stringify({ message: 'Item not found' }));
    }

  // Неподдерживаемый маршрут
  } else {
    res.writeHead(404);
    res.end(JSON.stringify({ message: 'Not found' }));
  }
});

// Запуск сервера на порту 3000
server.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});





