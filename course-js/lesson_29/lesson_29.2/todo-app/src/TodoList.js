import React from 'react';
import { useSelector } from 'react-redux';
import './TodoList.css';  // Підключаємо стилі

const TodoList = () => {
  const todos = useSelector((state) => state.todos);

  return (
    <ul className="todo-list">
      {todos.map((todo, index) => (
        <li key={index}>{todo}</li>
      ))}
    </ul>
  );
};

export default TodoList;
