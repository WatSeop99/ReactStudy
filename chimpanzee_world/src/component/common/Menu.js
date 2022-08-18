import React from "react";
import { Link } from "react-router-dom";
import { FaTimes } from "react-icons/fa";
import styled from "styled-components";

const StyledMenu = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  @media screen and (min-width: 790px) {
    width: 30%;
  }
  background-color: rgb(58, 66, 81, 0.65);
  z-index: 99;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StyledLink = styled(Link)`
  color: #eee;
  tex-decoration: none;
  font-size: clamp(1rem, 1.75vw, 6vw);
  font-family: "SDSamliphopangche_Outline";
  transition: 0.2s all ease-in-out;
  line-height: 300%;

  user-select: none;
  -moz-user-select: none;

  &:hover {
    transition: 0.2s all ease-in-out;
    color: orangered;
  }

  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`;

const CloseToggle = styled.button`
  position: fixed;
  top: 2%;
  left: 2%;
  backround: #222;
  color: #fff;
  padding: 0.75rem;
  display: flex;
  palce-items: center;
  font-size: 1.5rem;
  border: 0;
  outline: 0;
  cursor: pointer;
`;

const Menu = ({ handleNavToggle }) => {
  return (
    <StyledMenu>
      <StyledLink to="/" onClick={handleNavToggle}>
        Home
      </StyledLink>
      <StyledLink to="/broadcaster" onClick={handleNavToggle}>
        Other member
      </StyledLink>
      <StyledLink to="/bestpost" onClick={handleNavToggle}>
        인기글
      </StyledLink>
      <CloseToggle onClick={handleNavToggle}>
        <FaTimes />
      </CloseToggle>
    </StyledMenu>
  );
};

export default Menu;
