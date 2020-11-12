import React from "react";
import NavBar from "./NavBar";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Error404 from "./pages/Error404";

function App() {
  return (
    <section className="colored-section" id="header">
      <div className="container-fluid">
        <BrowserRouter>
            <NavBar />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/projects" component={Projects} />
              <Route path="/services" component={Services} />
              <Route path="/contact-me" component={Contact} />
              <Route path="*" component={Error404} />
            </Switch>
        </BrowserRouter>
      </div>
    </section>
  );
}

export default App;
