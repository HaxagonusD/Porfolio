import React from "react";
import { Link } from "react-scroll";
import "./styles/NavBar/NavBar.css";
const NavBar = () => {
  return (
    <div className="navBarContainer">
      <div className="linkContainer">
        <div className="link aboutLink">
          <Link
            activeClass="active"
            spy={true}
            smooth={true}
            offset={0}
            duration={1000}
            to="about"
          >
            About
          </Link>
        </div>
        <div className="link projectsLink">
          <Link
            activeClass="active"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
            to="projects"
          >
            Projects
          </Link>
        </div>
        <div className="link contactLink">
          <Link
            activeClass="active"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
            to="contact"
          >
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
