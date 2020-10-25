import React from "react";
import NavBar from "./NavBar"
import "./styles/Contact/Contact.css";

const Contact = () => {
  return (
    <div id="contact" className="contactSection">
        <NavBar/>
      <div className="backdrop">
        <div className="containerLinks">
          <div className="links">
            <a
              target="_blank"
              href="https://github.com/HaxagonusD"
              className="github"
            >
              Github
            </a>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/julian-quezada-379184ba/"
              className="linkedin"
            >
              LinkedIn
            </a>
            <a
              target="_blank"
              href="https://www.instagram.com/haxagonus/"
              className="instagram"
            >
              Instagram
            </a>
          </div>
        </div>
        <div className="divider"></div>
        <div className="formContainer">
          <form className="questions">
            <div className="inputContainer">
              <input placeholder="Your email" className="emailInput"></input>
              <textarea className="messageInput" placeholder="Message"></textarea>
              <button type="submit">Send</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
