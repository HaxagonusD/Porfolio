import React from "react";
import Thumbnail from "./Thumbnail";
import NavBar from "./NavBar";
import "./styles/Projects/ProjectsPage.css";
const ProjectsPage = () => {
  return (
    <div className="projectsPage">
      <div className="left">
        <div className="title">My Projects</div>
        <div className="project1">
          <Thumbnail />
        </div>
        <div className="project2">
          <Thumbnail />
        </div>
      </div>

      <div className="right">
        <div className="navbar">
          <NavBar />
        </div>
        <div className="project3">
          <Thumbnail />
        </div>
        <div className="project4">
          <Thumbnail />
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
