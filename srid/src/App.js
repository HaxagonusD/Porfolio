//import libraries
import React from "react";
import { Switch, Route } from "react-router-dom";
//importing custom components
import NavBar from "./components/NavBar";
import ErrorComponent from "./components/ErrorComponent";
import About from "./components/About";
import ProjectsPage from "./components/ProjectsPage";

//importing css

function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path="/">
          <About />
        </Route>
        <Route exact path="/projects">
          <ProjectsPage />
        </Route>
        <Route>
          <ErrorComponent />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
/**
 * What kind of things should be in this portfolio
 *  Thumbnails that are links to projects
 *  Project components
 *  about page
 *    What does this mean
 *      a picture
 *      Resume
 *      about paragraph and mission
 *      contact info
 *      links to other websites
 * 
 * Eventually:
 */
