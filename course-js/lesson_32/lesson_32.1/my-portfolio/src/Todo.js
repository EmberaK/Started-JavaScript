import React, { useState } from 'react';
import { Container, TextField, Button, Typography } from '@mui/material'; // Добавлен импорт Typography

const Todo = () => {
  const [todo, setTodo] = useState('');
  const [todos, setTodos] = useState([]);

  const addTodo = () => {
    if (todo.length > 0) {
      setTodos([...todos, todo]);
      setTodo('');
    }
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>Список задач</Typography> {/* Использование Typography */}
      <TextField
        label="Добавить задачу"
        variant="outlined"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        fullWidth
      />
      <Button onClick={addTodo} variant="contained" color="primary" sx={{ mt: 2 }}>
        Добавить
      </Button>
      <ul>
        {todos.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </ul>
    </Container>
  );
};

export default Todo;
