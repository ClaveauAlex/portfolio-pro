import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
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
    </div>
  );
}

export default NavBar;
