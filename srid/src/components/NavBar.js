import React from "react";
import { Link } from "react-router-dom";
import "./styles/NavBar/NavBar.css";
const NavBar = () => {
  return (
    <div className="navBarContainer">
      <div className="linkContainer">
        <div className="link aboutLink">
          <Link to="/">About</Link>
        </div>
        <div className="link projectsLink">
          <Link to="/projects">Projects</Link>
        </div>
        <div className="link contactLink">
          <Link to="/contact">Contact</Link>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
