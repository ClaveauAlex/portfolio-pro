import React from "react";
import {
  SidebarContainer,
  MenuCloseBtn,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
  SideBtnWrap,
  SidebarRoute,
} from "./SidebarElements";

function Sidebar({isOpen, toggle}) {
  return (
    <>
      <SidebarContainer isOpen={isOpen}>
        <MenuCloseBtn onClick={toggle}>Fermer</MenuCloseBtn>
        <SidebarWrapper>
          <SidebarMenu>
            <SidebarLink to="about" onClick={toggle}>À propos</SidebarLink>
            <SidebarLink to="skills" onClick={toggle}>Compétences</SidebarLink>
            <SidebarLink to="trainings" onClick={toggle}>Expériences</SidebarLink>
            <SidebarLink to="testimonials" onClick={toggle}>Avis</SidebarLink>
          </SidebarMenu>
          <SideBtnWrap>
            <SidebarRoute to="/contact">Me contacter</SidebarRoute>
          </SideBtnWrap>
        </SidebarWrapper>
      </SidebarContainer>
    </>
  );
}

export default Sidebar;
