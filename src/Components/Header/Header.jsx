import React from "react";
import "./header.css";

import { NavLink } from "react-router";
const Header = () => {
  return (
    <div className="nav-container">
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/laptop">Laptop</NavLink>
        <NavLink to="/mobiles">Mobiles</NavLink>
        <NavLink to="/Books">Books</NavLink>
        <NavLink to="/users">Users</NavLink>
        <NavLink to="/users2">Users2</NavLink>
        <NavLink to="/posts">Posts</NavLink>
      </nav>
    </div>
  );
};

export default Header;
