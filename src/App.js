import Landing from "./views/Landing";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "./views/About";
import Contact from "./views/Contact";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <div tw="min-h-full">
        <NavBar />
        <Switch>
          <Route exact path="/">
            <Landing />
            <Footer />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/about">
            <About />
            <Footer />
          </Route>
          <Footer />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
