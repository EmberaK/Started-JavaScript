import { render, screen } from '@testing-library/react';
import App from './App';
import userEvent from '@testing-library/user-event';


test('Page has a title TODO', () => {
  render(<App />);
  const title = screen.getByText(/TODO/i);
  expect(title).toBeInTheDocument();
});


test('Can enter both letters and numbers in the input field', () => {
  render(<App />);
  const input = screen.getByPlaceholderText('Додати нову задачу');
  userEvent.type(input, 'Task 123');
  expect(input.value).toBe('Task 123');
});

test('Shows error message when trying to add without text', () => {
  render(<App />);
  const addButton = screen.getByText('Додати');
  userEvent.click(addButton);
  const errorMessage = screen.getByText('Будь ласка, введіть текст');
  expect(errorMessage).toBeInTheDocument();
});

test('New item is added to the list after clicking Add', () => {
  render(<App />);
  const input = screen.getByPlaceholderText('Додати нову задачу');
  const addButton = screen.getByText('Додати');
  
  userEvent.type(input, 'New task');
  userEvent.click(addButton);

  const newTask = screen.getByText('New task');
  expect(newTask).toBeInTheDocument();
});

test('Task list updates after adding new items', () => {
  render(<App />);
  const input = screen.getByPlaceholderText('Додати нову задачу');
  const addButton = screen.getByText('Додати');
  
  userEvent.type(input, 'First task');
  userEvent.click(addButton);
  
  userEvent.type(input, 'Second task');
  userEvent.click(addButton);

  const firstTask = screen.getByText('First task');
  const secondTask = screen.getByText('Second task');
  expect(firstTask).toBeInTheDocument();
  expect(secondTask).toBeInTheDocument();
});
