import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'; // Импортируем основной компонент приложения
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root')); // Находим элемент с id 'root' в HTML

root.render(
  <React.StrictMode>
    <App /> {/* Рендерим компонент App */}
  </React.StrictMode>
);
