import React from "react";
import "./header.css";

import { NavLink } from "react-router";
const Header = () => {
  return (
    <div>
      <h2>this is header</h2>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/laptop">Laptop</NavLink>
        <NavLink to="/mobiles">Mobiles</NavLink>
        <NavLink to="/Books">Books</NavLink>
      </nav>
    </div>
  );
};

export default Header;
