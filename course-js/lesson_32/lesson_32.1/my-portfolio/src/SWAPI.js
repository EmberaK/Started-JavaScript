import { useEffect, useState } from 'react';
import { Container, Typography, List, ListItem, ListItemText } from '@mui/material';

const SWAPI = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://swapi.dev/api/people/')
      .then((res) => res.json())
      .then((data) => setData(data.results))
      .catch((err) => console.error('Ошибка загрузки данных:', err));
  }, []);

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Персонажи из Звездных войн
      </Typography>
      <List>
        {data.map((character, index) => (
          <ListItem key={index}>
            <ListItemText primary={character.name} />
          </ListItem>
        ))}
      </List>
    </Container>
  );
};

export default SWAPI;
