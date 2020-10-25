//import libraries
import React from "react";
import { Switch, Route } from "react-router-dom";
//importing custom components
// import NavBar from "./components/NavBar";
import ErrorComponent from "./components/ErrorComponent";
import About from "./components/About";
import ProjectsPage from "./components/ProjectsPage";
import Contact from "./components/Contact";
import NavBar from "./components/NavBar";

//importing css

function App() {
  return (
    <div className="App">
      
      <About />
      <ProjectsPage />
      <Contact />
      {/* <Switch>
        <Route exact path="/">
          
        </Route>
        <Route exact path="/projects">
          
        </Route>
        <Route exact path="/contact">
          
        </Route>
        <Route>
          <ErrorComponent />
        </Route>
      </Switch> */}
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
 * Eventually: I want this app to
 *  Host multiple portfolios of multiple users
 *  Connect to a database
 *  Have authentication
 *  Have great CSS
 *  Have a contact form
 *  Donation Form with stripe
 *  Use .env to hide api key for mongoDB
 */
