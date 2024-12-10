import { AppBar, Toolbar, Button, Typography } from '@mui/material';
import { Link } from 'react-router-dom'; // Для роутинга, чтобы сделать ссылки работающими

const Header = () => (
  <AppBar position="static">
    <Toolbar>
      <Typography variant="h6" sx={{ flexGrow: 1 }}>
        Мой сайт
      </Typography>
      <Button color="inherit" component={Link} to="/home">Главная</Button>
      <Button color="inherit" component={Link} to="/todo">TODO</Button>
      <Button color="inherit" component={Link} to="/swapi">SWAPI</Button>
    </Toolbar>
  </AppBar>
);

export default Header;
