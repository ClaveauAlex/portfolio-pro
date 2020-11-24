import React from "react";
import './styles.scss';
import { Link as LinkS } from "react-scroll";
import { Link as LinkR } from "react-router-dom";

function Sidebar({isOpen, toggle}) {

  function close(){
    console.log("Test");
  }

  return (
      <aside className="sidebarContainer" isOpen={isOpen}>
        <div className="menuCloseBtn" onClick={close}>Fermer</div>
        <div className="sidebarWrapper">
          <ul className="sidebarMenu">
            <LinkS to="about" onClick={toggle} className="sidebarLink">À propos</LinkS>
            <LinkS to="skills" onClick={toggle} className="sidebarLink">Compétences</LinkS>
            <LinkS to="trainings" onClick={toggle} className="sidebarLink">Expériences</LinkS>
            <LinkS to="testimonials" onClick={toggle} className="sidebarLink">Avis</LinkS>
          </ul>
          <div className="sideBtnWrap">
            <LinkR to="/contact" className="sidebarRoute">Me contacter</LinkR>
          </div>
        </div>
      </aside>
  );
}

export default Sidebar;
