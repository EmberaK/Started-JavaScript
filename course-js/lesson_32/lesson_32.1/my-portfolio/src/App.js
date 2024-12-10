import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import Todo from './Todo';
import SWAPI from './SWAPI';
import Footer from './Footer';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/todo" element={<Todo />} />
        <Route path="/swapi" element={<SWAPI />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;

