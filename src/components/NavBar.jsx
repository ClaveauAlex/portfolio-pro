import React from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Error404 from "./pages/Error404";

function NavBar() {
  return (
    <BrowserRouter>
      <div>
        <img
          src={process.env.PUBLIC_URL + "/logo_white.svg"}
          className="logo"
          alt="logo"
        />
        <ul>
          <li>
            <Link to="/">Accueil</Link>
          </li>
          <li>
            <Link to="/projects">Projets</Link>
          </li>
          <li>
            <Link to="/services">Services</Link>
          </li>
          <li>
            <Link to="/contact-me">Me contacter</Link>
          </li>
        </ul>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/projects">
            <Projects />
          </Route>
          <Route path="/services">
            <Services />
          </Route>
          <Route path="/contact-me">
            <Contact />
          </Route>
          <Route path="*">
            <Error404 />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default NavBar;
