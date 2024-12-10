import React from 'react';
import './App.css';  
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import Footer from './Footer';

const App = () => {
  return (
    <div className="app">
      <h1>Todo App</h1>
      <TodoForm />
      <TodoList />
      <Footer />
    </div>
  );
};

export default App;
