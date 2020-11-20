import styled from "styled-components";
import { Link as LinkS } from "react-scroll";
import { Link as LinkR } from "react-router-dom";

export const SidebarContainer = styled.aside`
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 100%;
  background: #fafafa;
  display: grid;
  align-items: center;
  top: 0;
  left: 0;
  transition: 0.3s ease-in-out;
  opacity: ${({ isOpen }) => (isOpen ? "100%" : "0")};
  top: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
`;

export const MenuCloseBtn = styled.div`
  background: #fff;
  border: 2px solid #1a222b;
  border-radius: 4px;
  color: #1a222b;
  cursor: pointer;
  font-size: 1rem;
  outline: none;
  position: absolute;
  padding: 8px 16px;
  right: 1.5rem;
  text-decoration: none;
  top: 1.8rem;
  transition: all 0.2s ease-in-out;
  white-space: nowrap;

  &:hover {
    background: #e0e0e0;
    /* color: #7d7d7d; */
    color: #1a222b;
    transition: all 0.2s ease-in-out;
  }
`;

export const SidebarWrapper = styled.div`
  color: #1a222b;
`;

export const SidebarMenu = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(6, 80px);
  text-align: center;

  @media screen and (max-width: 480px) {
    grid-template-rows: repeat(6, 60px);
  }
`;

export const SidebarLink = styled(LinkS)`
  align-items: center;
  cursor: pointer;
  display: flex;
  font-size: 1.2rem;
  justify-content: center;
  text-decoration: none;
  list-style: none;
  transition: 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    color: #bfbfbf;
    transition: 0.2s ease-in-out;
  }
`;

export const SideBtnWrap = styled.div`
  display: flex;
  justify-content: center;
`;

export const SidebarRoute = styled(LinkR)`
    background: #fff;
    border-radius: 4px;
    /* color: #347c90; */
    color: #1a222b;
    border: 2px solid #1a222b;
    cursor: pointer;
    font-size: 1rem;
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
