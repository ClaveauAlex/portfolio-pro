import React from "react";
import { Link as LinkS } from "react-scroll";
import { Link as LinkR } from "react-router-dom";

function Sidebar({isOpen, toggle}) {
  return (
      <aside isOpen={isOpen}>
        <div onClick={toggle}>Fermer</div>
        <div>
          <ul>
            <LinkS to="about" onClick={toggle}>À propos</LinkS>
            <LinkS to="skills" onClick={toggle}>Compétences</LinkS>
            <LinkS to="trainings" onClick={toggle}>Expériences</LinkS>
            <LinkS to="testimonials" onClick={toggle}>Avis</LinkS>
          </ul>
          <div>
            <LinkR to="/contact">Me contacter</LinkR>
          </div>
        </div>
      </aside>
  );
}

export default Sidebar;
