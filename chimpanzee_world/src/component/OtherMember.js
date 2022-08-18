import { Link } from "react-router-dom";
import styled from "styled-components";
import Responsive from "./common/Responsive";
import palette from "../lib/palette";

const MemberListBlock = styled(Responsive)`
  margin-top: 1rem;
`;

const MemberItemBlock = styled.div`
  padding-top: 1rem;
  padding-bottom: 1rem;

  &:first-child {
    padding-top: 0;
  }
  & + & {
    border-top: 1px solid ${palette.gray[2]};
  }

  h2 {
    font-size: 1rem;
    margin-bottom: 0;
    margin-top: 0;
    &:hover {
      color: ${palette.gray[6]};
    }
  }
  p {
    margin-top: 2rem;
  }
`;

const OtherMember = () => {};

export default OtherMember;
