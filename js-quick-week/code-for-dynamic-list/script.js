// Напиши программу, которая добавляет элементы в список на странице при нажатии на кнопку.
const input = document.querySelector('#user-text');
const button = document.querySelector('#send');
const boxForList = document.querySelector('#block-list');

button.addEventListener('click', ()=>{
    const newItem = document.createElement('li');
    newItem.textContent = input.value;
    newItem.style.backgroundColor = 'red';
    boxForList.appendChild(newItem);
    input.value = '';
})