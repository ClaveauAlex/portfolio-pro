import React from "react";

function Sidebar() {
  return (
    <>
      <SidebarContainer>
        <Icon>
          <CloseIcon />
        </Icon>
        <SidebarWrapper>
          <SidebarMenu>
            <SidebarLink to="about">À propos</SidebarLink>
            <SidebarLink to="skills">Compétences</SidebarLink>
            <SidebarLink to="trainings">Expériences</SidebarLink>
            <SidebarLink to="testimonials">Avis</SidebarLink>
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
