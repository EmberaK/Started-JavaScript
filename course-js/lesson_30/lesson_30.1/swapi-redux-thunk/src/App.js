import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSWAPIData, clearTODO } from './store/actions';

function App() {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state);

  useEffect(() => {
    dispatch(fetchSWAPIData());
  }, [dispatch]);

  return (
    <div>
      <header>
        <h1>SWAPI People</h1>
      </header>
      <main>
        {loading && <p>Loading...</p>}
        {error && <p style={{ color: 'red' }}>Error: {error.message}</p>}
        <ul>
          {data.map((person) => (
            <li key={person.name}>{person.name}</li>
          ))}
        </ul>
      </main>
      <footer>
        <button onClick={() => dispatch(clearTODO())}>Clear TODO</button>
      </footer>
    </div>
  );
}

export default App;
