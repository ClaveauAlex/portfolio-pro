import React from "react";
// import {FaBars} from "react-icons/fa";
import {Nav, NavbarContainer, NavLogo, NavMenu, NavItem, NavLinks, NavBtn, NavBtnLink, MenuBtn} from "./NavbarElements";
// MobileIcon

function Navbar() {
  return (
    <Nav>
      <NavbarContainer>
        <NavLogo to="/" />
        {/* <MobileIcon>
          <FaBars />
        </MobileIcon> */}
        <MenuBtn>Menu</MenuBtn>
        <NavMenu>
          <NavItem>
            <NavLinks to="about">À propos</NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks to="skills">Compétences</NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks to="trainings">Expériences</NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks to="testimonials">Avis</NavLinks>
          </NavItem>
        </NavMenu>
        <NavBtn>
          <NavBtnLink to="/contact">Me contacter</NavBtnLink>
        </NavBtn>
      </NavbarContainer>
    </Nav>
  );
}

export default Navbar;
