import React from "react";
import "./styles/Contact/Contact.css";

const Contact = () => {
  return (
    <div className="contactSection">
      <div className="backdrop">
        <div className="containerLinks">
          <div className="links">
            <a className="github">Github</a>
            <a className="linkedin">LinkedIn</a>
            <a className="instagram">Instagram</a>
          </div>
        </div>
        <div className="divider"></div>
        <div className="formContainer">
          <form className="questions">
              <div className="emailText">Email</div>
              <input className="emailInput"></input>
              <div className="messageInput">Message</div>
              <input></input>
              <button>Send</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
