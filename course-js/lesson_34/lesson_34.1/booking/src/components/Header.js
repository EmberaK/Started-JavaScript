import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <nav>
        <Link to="/">Main</Link>
        <Link to="/about">About</Link>
        <Link to="/hotels">Hotels</Link>
      </nav>
    </header>
  );
};

export default Header;
