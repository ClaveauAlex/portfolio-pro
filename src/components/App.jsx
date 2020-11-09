import React from "react";

function App() {
  return (
    <section className="colored-section">
      <div className="container-header">
        <nav>
          <div className="navBarLeft">
            <a href="/">
              <img
                src={process.env.PUBLIC_URL + "/logo_white.svg"}
                className="logo"
                alt="logo"
              />
            </a>
          </div>
          <div className="navBarRight">
            <ul>
              <li>
                <a href="/home">Accueil</a>
              </li>
              <li>
                <a href="/projets">Projets</a>
              </li>
              <li>
                <a href="/services">Services</a>
              </li>
              <li>
                <a href="/contact">Contact</a>
              </li>
            </ul>
          </div>
          <h1>Test Hello World !</h1>
        </nav>
      </div>
    </section>
  );
}

export default App;
