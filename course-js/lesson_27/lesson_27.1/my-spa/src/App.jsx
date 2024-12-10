import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./pages/Home";
import Contacts from "./pages/Contacts";
import About from "./pages/About";

export default function App() {
  const [darkTheme, setDarkTheme] = useState(false);

  return (
    <div className={darkTheme ? "dark" : ""}>
      <Router>
        <header>
          <nav>
            <Link to="/">Головна</Link>
            <Link to="/contacts">Контакти</Link>
            <Link to="/about">Про мене</Link>
          </nav>
          <button onClick={() => setDarkTheme(!darkTheme)}>
            {darkTheme ? "Світла тема" : "Темна тема"}
          </button>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<div>404: Сторінка не знайдена</div>} />
          </Routes>
        </main>
      </Router>
    </div>
  );
}
