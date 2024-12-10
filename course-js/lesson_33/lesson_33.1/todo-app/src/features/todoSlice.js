import { createSlice } from '@reduxjs/toolkit';

export const todoSlice = createSlice({
  name: 'todos',
  initialState: [],
  reducers: {
    addTodo: (state, action) => {
      state.push({ text: action.payload, id: Date.now() });
    },
  },
});

export const { addTodo } = todoSlice.actions;

export const selectTodos = (state) => state.todos;

export default todoSlice.reducer;
