import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

function App() {
  const todos = useSelector(state => state.todos);
  const dispatch = useDispatch();
  const [editText, setEditText] = useState('');

  const addTodo = () => {
    const newTodo = { id: Date.now(), text: 'New Todo', completed: false };
    dispatch({ type: 'ADD_TODO', payload: newTodo });
  };

  const deleteTodo = (id) => {
    dispatch({ type: 'DELETE_TODO', payload: id });
  };

  const toggleTodo = (id) => {
    dispatch({ type: 'TOGGLE_TODO', payload: id });
  };

  const editTodo = (id) => {
    dispatch({ type: 'EDIT_TODO', payload: { id, text: editText } });
  };

  return (
    <div>
      <h1>Simple Todo App</h1>
      <button onClick={addTodo}>Add Todo</button>
      <input
        type="text"
        value={editText}
        onChange={(e) => setEditText(e.target.value)}
        placeholder="Edit text"
      />
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => toggleTodo(todo.id)}
            />
            {todo.text}
            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
            <button onClick={() => editTodo(todo.id)}>Edit</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
