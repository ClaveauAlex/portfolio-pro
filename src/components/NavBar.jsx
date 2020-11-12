import React from "react";
import { Link } from "react-router-dom";
import { BiMenuAltRight } from "react-icons/bi";

function NavBar() {
  return (
    <div className="navbar">
      <img
        src={process.env.PUBLIC_URL + "/logo_white.svg"}
        className="logo"
        alt="logo"
      />
      <button
        className="button-toggle"
        type="button"
        data-toggle="collapse"
        data-target="#navbarToggler"
      >
        <BiMenuAltRight />
      </button>
      <nav id="navbarToggler">
        <ul className="navbar-links">
          <li>
            <Link to="/" className="link">Accueil</Link>
          </li>
          <li>
            <Link to="/projects" className="link">Projets</Link>
          </li>
          <li>
            <Link to="/services" className="link">Services</Link>
          </li>
          <li>
            <Link to="/contact-me" className="link">Me contacter</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default NavBar;
