import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Responsive from "./Responsive";
import Menu from "./Menu";
import Toggle from "./Toggle";

const HeaderBlock = styled.div`
  position: fixed;
  height: 100px;
  width: 100%;
  background-color: rgba(0, 141, 98, 1);
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.7);
`;

const Wrapper = styled(Responsive)`
    height: 6rem;
    display: flex;
    align-items: center;
    justify-content: center;
    .logo {
        font-size: 1.75rem;
        font-weight: 900;
        letter-spacing 4px;
        justify-content: center;
    }
`;

const StyledLink = styled(Link)`
  color: #eee;
  tex-decoration: none;
  font-size: clamp(1rem, 3vw, 6vw);
  transition: 0.2s all ease-in-out;

  @font-face {
    font-size: clamp(1rem, 3vw, 6vw);
    font-family: "Pacifico-Regular";
    src: url("../../public/fonts/Pacifico-Regular.woff") format("woff");
  }

  user-select: none;
  -moz-user-select: none;

  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    transition: 0.2s all ease-in-out;
    color: black;
    text-decoration: none;
  }
`;

const Spacer = styled.div`
  height: 4rem;
`;

const Header = () => {
  const [navToggled, setNavToggled] = useState(false);

  const handleNavToggle = () => {
    setNavToggled(!navToggled);
  };

  /*
  <Link to="/" className="title">
    <img src="/images/everywak_logo.png" alt="Everywak 로고"/>
  </Link>
  */
  return (
    <>
      <HeaderBlock>
        <Wrapper>
          <Toggle handleNavToggle={handleNavToggle} />
          {navToggled ? <Menu handleNavToggle={handleNavToggle} /> : null}
          <StyledLink to="/" className="logo">
            Chimpanzee_World
          </StyledLink>
        </Wrapper>
      </HeaderBlock>
      <Spacer />
    </>
  );
};

export default Header;
