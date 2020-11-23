import React from "react";
import './styles.scss';
import { Link as LinkR } from "react-router-dom";
import { Link as LinkS } from "react-scroll";
// MobileIcon

function Navbar({ toggle }) {
  return (
    <nav className="nav">
      <div className="navBarContainer">
        <LinkR to="/" className="navLogo" />
        <div className="menuBtn" onClick={toggle}>
          Menu
        </div>
        <ul className="navMenu">
          <li className="navItem">
            <LinkS to="about" className="navLinks">À propos</LinkS>
          </li>
          <li className="navItem">
            <LinkS to="skills" className="navLinks">Compétences</LinkS>
          </li>
          <li className="navItem">
            <LinkS to="trainings" className="navLinks">Expériences</LinkS>
          </li>
          <li className="navItem">
            <LinkS to="testimonials" className="navLinks">Avis</LinkS>
          </li>
        </ul>
        <nav className="navBtn">
          <LinkR to="/contact" className="navBtnLink">Me contacter</LinkR>
        </nav>
      </div>
    </nav>
  );
}

export default Navbar;
