import React, { useState, useEffect } from 'react';

const VotingApp = () => {
  const [votes, setVotes] = useState({ smile1: 0, smile2: 0, smile3: 0 });
  const [showResults, setShowResults] = useState(false);

  // Загружаем данные из localStorage, если они есть
  useEffect(() => {
    const storedVotes = JSON.parse(localStorage.getItem('votes'));
    if (storedVotes) {
      setVotes(storedVotes);
    }
  }, []);

  // Сохраняем данные голосования в localStorage
  useEffect(() => {
    localStorage.setItem('votes', JSON.stringify(votes));
  }, [votes]);

  // Функция для добавления голосов
  const handleVote = (smile) => {
    setVotes((prevVotes) => ({
      ...prevVotes,
      [smile]: prevVotes[smile] + 1,
    }));
  };

  // Функция для отображения победившего смайла
  const getWinner = () => {
    const maxVotes = Math.max(...Object.values(votes));
    const winner = Object.keys(votes).find((key) => votes[key] === maxVotes);
    return winner;
  };

  // Функция для очистки результатов
  const clearResults = () => {
    setVotes({ smile1: 0, smile2: 0, smile3: 0 });
    localStorage.removeItem('votes');
  };

  return (
    <div>
      <h1>Голосование за смайлы</h1>

      <div>
        <button onClick={() => handleVote('smile1')}>😀 Смайл 1</button>
        <button onClick={() => handleVote('smile2')}>😊 Смайл 2</button>
        <button onClick={() => handleVote('smile3')}>😂 Смайл 3</button>
      </div>

      <button onClick={() => setShowResults(true)}>Show Results</button>
      <button onClick={clearResults}>Очистити результати</button>

      {showResults && (
        <div>
          <h2>Результати голосования:</h2>
          <p>Смайл 1: {votes.smile1} голосов</p>
          <p>Смайл 2: {votes.smile2} голосов</p>
          <p>Смайл 3: {votes.smile3} голосов</p>
          <h3>Победил: {getWinner()}</h3>
        </div>
      )}
    </div>
  );
};

export default VotingApp;
