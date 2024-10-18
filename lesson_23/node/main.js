const addFunction = require('./math');
console.log(addFunction(2, 1)); 


const http = require('http');

let items = [{a:'awdawda'}]; // Хранилище для сущности items


const server = http.createServer((req, res) => {
  const { method, url } = req;

  // Устанавливаем заголовки для JSON-ответов
  res.setHeader('Content-Type', 'application/json');

  // GET /items - Получение всех items
  if (method === 'GET' && url === '/') {
    res.writeHead(202);
    res.end(JSON.stringify(items));
  
  // POST /items - Создание нового item
  } else if (method === 'POST' && url === '/items') {
    let body = '';

    req.on('data', chunk => {
      body += chunk.toString(); // Собираем данные
    });

    req.on('end', () => {
      const { name } = JSON.parse(body);
      const newItem = { id: items.length + 1, name }; // Создаем item
      items.push(newItem); // Добавляем item в массив
      res.writeHead(201);
      res.end(JSON.stringify(newItem)); // Возвращаем созданный item
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
      const item = items.find(i => i.id === id);

      if (item) {
        item.name = name; // Обновляем item
        res.writeHead(200);
        res.end(JSON.stringify(item));
      } else {
        res.writeHead(404);
        res.end(JSON.stringify({ message: 'Item not found' }));
      }
    });

  // DELETE /items/:id - Удаление item по id
  } else if (method === 'DELETE' && url.startsWith('/items/')) {
    const id = parseInt(url.split('/')[2], 10);
    const index = items.findIndex(i => i.id === id);

    if (index !== -1) {
      items.splice(index, 1); // Удаляем item из массива
      res.writeHead(204);
      res.end(); // Успешное удаление
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


// GET /items: Возвращает список всех элементов.

// GET http://localhost:3000/items

// POST /items: Создает новый элемент. Ожидает JSON-данные с полем name.

// Запрос: POST http://localhost:3000/items
// {
//   "name": "First item"
// }

// PUT /items/:id: Обновляет существующий элемент по ID. Ожидает JSON-данные с полем name.
// PUT http://localhost:3000/items/1
// {
//   "name": "Updated item"
// }

//DELETE http://localhost:3000/items/1

// DELETE /items/:id: Удаляет элемент по ID.




