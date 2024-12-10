import { Container, Typography, List, ListItem } from '@mui/material';

const Home = () => (
  <Container>
    <Typography variant="h4" gutterBottom>
      Привет, я [Твое имя]!
    </Typography>
    <Typography variant="h6" gutterBottom>
      Навыки:
    </Typography>
    <List>
      <ListItem>JavaScript</ListItem>
      <ListItem>React</ListItem>
      <ListItem>Node.js</ListItem>
    </List>
  </Container>
);

export default Home;
