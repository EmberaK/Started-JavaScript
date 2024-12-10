import React from 'react';
import { useSelector } from 'react-redux';
import './Footer.css';  // Підключаємо стилі

const Footer = () => {
  const todos = useSelector((state) => state.todos);

  return (
    <footer className="footer">
      <p>Total todos: {todos.length}</p>
    </footer>
  );
};

export default Footer;
