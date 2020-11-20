import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
import { Link as LinkS } from "react-scroll";

export const Nav = styled.nav`
  align-items: center;
  /* background: #347c90; */
  background: transparent;
  display: flex;
  justify-content: center;
  padding: 24px 16px;

  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`;

export const NavbarContainer = styled.div`
  display: flex;
  height: 40px;
  justify-content: space-between;
  max-width: 1140px;
  width: 100%;
`;

export const NavLogo = styled(LinkR)`
  align-items: center;
  /* background-image: url(/images/logo_white.svg); */
  background-image: url(/images/logo_black.svg);
  background-repeat: no-repeat;
  cursor: pointer;
  height: 40px;
  justify-self: flex-start;
  width: 40px;
`;

// export const MobileIcon = styled.div`
//   display: none;

//   @media screen and (max-width: 768px) {
//     /* color: #fff; */
//     color: #1a222b;
//     cursor: pointer;
//     display: block;
//     padding: 16px;
//     position: absolute;
//     right: -32px;
//     top: -13px;
//     transition: all 0.2s ease-in-out;
//     transform: translate(-100%, 60%);
//   }
// `;

export const MenuBtn = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    background: #fff;
    border-radius: 4px;
    /* color: #347c90; */
    color: #1a222b;
    border: 1px solid #1a222b;
    cursor: pointer;
    display: block;
    font-size: 14px;
    outline: none;
    padding: 8px 16px;
    position: absolute;
    right: -55px;
    top: 5px;
    text-decoration: none;
    transition: all 0.2s ease-in-out;
    white-space: nowrap;
    transform: translate(-100%, 60%);

    &:hover {
      background: #e0e0e0;
      /* color: #7d7d7d; */
      color: #1a222b;
      transition: all 0.2s ease-in-out;
    }
  }
`;

export const NavMenu = styled.ul`
  align-items: center;
  display: flex;
  list-style: none;
  margin-right: -22px;
  text-align: center;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavItem = styled.li`
  font-size: 1rem;
  line-height: 24px;
  margin: 0 16px;
`;

export const NavLinks = styled(LinkS)`
  align-items: center;
  /* color: #fff; */
  color: #1a222b;
  cursor: pointer;
  display: flex;
  height: 100%;
  padding: 0 1rem;
  text-decoration: none;

  &:hover {
    /* color: #e0e0e0; */
    border-bottom: 1px solid #1a222b;
  }

  &:active {
    border-bottom: 2px solid #fff;
  }
`;

export const NavBtn = styled.nav`
  align-items: center;
  display: flex;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtnLink = styled(LinkR)`
  background: #fff;
  border-radius: 4px;
  /* color: #347c90; */
  color: #1a222b;
  border: 1px solid #1a222b;
  cursor: pointer;
  font-size: 14px;
  outline: none;
  padding: 8px 16px;
  text-decoration: none;
  transition: all 0.2s ease-in-out;
  white-space: nowrap;

  &:hover {
    background: #e0e0e0;
    /* color: #7d7d7d; */
    color: #1a222b;
    transition: all 0.2s ease-in-out;
  }
`;
