import React from "react";
import NavBar from "./NavBar";
import { Link } from "react-scroll";
import "./styles/About/About.css";

const About = () => {
  return (
    <div id="about" className="about">
      <div className="left">
        <div className="logo">Hax</div>
        <div className="greeting">
          Hi, I'm <div className="julian">Julian</div>
        </div>
        <div className="description">I'm a Full Stack Software Developer</div>
        <div className="contact">
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
      <div className="right">
        <NavBar />
      </div>
    </div>
  );
};

export default About;
