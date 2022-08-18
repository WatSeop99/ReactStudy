import styled from "styled-components";
import { FaBars } from "react-icons/fa";

const StyledToggle = styled.button`
  position: fixed;
  top: 2%;
  left: 2%;
  color: #222;
  background: rgba(238, 238, 238, 0);
  padding: 0.5rem;
  display: flex;
  place-items: center;
  font-size: 2rem;
  border: 0;
  outline: 0;
  cursor: pointer;
`;

const Toggle = ({ handleNavToggle }) => {
  return (
    <StyledToggle onClick={handleNavToggle}>
      <FaBars />
    </StyledToggle>
  );
};

export default Toggle;
