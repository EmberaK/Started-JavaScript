import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

function App() {
  // Шаг 4: Получаем текущее состояние из store
  const count = useSelector(state => state.count);
  const dispatch = useDispatch();

  // Шаг 5: Обработчики для кнопок
  const increment = () => {
    dispatch({ type: 'INCREMENT' });
  };

  const decrement = () => {
    dispatch({ type: 'DECREMENT' });
  };

  return (
    <div className="App">
      <h1>Counter: {count}</h1>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </div>
  );
}

export default App;
