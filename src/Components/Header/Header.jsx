import React from "react";
import "./header.css";
const Header = () => {
  return (
    <div>
      <h2>this is header</h2>
      <nav>
        <a href="/">Home</a>
        <a href="/laptop">Laptop</a>
        <a href="/mobiles">Mobiles</a>
        <a href="/Books">Books</a>
      </nav>
    </div>
  );
};

export default Header;
