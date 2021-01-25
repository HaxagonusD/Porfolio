import Landing from "./views/Landing";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "./views/About";
import Contact from "./views/Contact";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Landing />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/about">
          <About />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
