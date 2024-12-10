import { createStore } from 'redux';

// Шаг 1: Определяем начальное состояние
const initialState = {
  count: 0
};

// Шаг 2: Создаем редьюсер
const counterReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'INCREMENT':
      return { ...state, count: state.count + 1 };
    case 'DECREMENT':
      return { ...state, count: state.count - 1 };
    default:
      return state;
  }
};

// Шаг 3: Создаем и экспортируем store
const store = createStore(counterReducer);

export default store;
