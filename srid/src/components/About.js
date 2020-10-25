import React from "react";
import NavBar from "./NavBar";
import { Link } from "react-router-dom";
import "./styles/About/About.css";

const About = () => {
  return (
    <div className="about">
      <div className="left">
        <div className="logo">Hax</div>
        <div className="greeting">
          Hi, I'm <div className="julian">Julian</div>
        </div>
        <div className="description">I'm a Full Stack Software Developer</div>
        <div className="contact">
          <Link to="/contact">Contact me</Link>
        </div>
      </div>
      <div className="right">
        <NavBar />
      </div>
    </div>
  );
};

export default About;
