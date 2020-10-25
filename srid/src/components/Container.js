import React from "react";

import About from "./About";
import ProjectsPage from "./ProjectsPage";
import Contact from "./Contact";

import "./styles/Container/Container.css"
const Container = () => {
  return (
    <div className="containerComponent">
      <About />
      <ProjectsPage />
      <Contact />
    </div>
  );
};

export default Container;
