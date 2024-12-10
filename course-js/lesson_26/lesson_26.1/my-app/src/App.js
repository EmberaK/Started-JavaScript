import React, { useState } from 'react';

const EmojiCounter = () => {
  // Начальное состояние для списка смайликов с их кликами
  const [emojiList, setEmojiList] = useState([
    { id: 1, emoji: '😀', count: 0 },
    { id: 2, emoji: '😊', count: 0 },
    { id: 3, emoji: '😂', count: 0 },
    { id: 4, emoji: '😎', count: 0 },
  ]);

  // Функция для увеличения счётчика кликов
  const incrementCount = (id) => {
    setEmojiList((prevList) =>
      prevList.map((item) =>
        item.id === id ? { ...item, count: item.count + 1 } : item
      )
    );
  };

  return (
    <div>
      <h1>Список смайликів</h1>
      <ul>
        {emojiList.map((emoji) => (
          <li key={emoji.id} style={{ fontSize: '24px', margin: '10px 0' }}>
            <span
              style={{ cursor: 'pointer', marginRight: '10px' }}
              onClick={() => incrementCount(emoji.id)}
            >
              {emoji.emoji}
            </span>
            Кліків: {emoji.count}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EmojiCounter;
