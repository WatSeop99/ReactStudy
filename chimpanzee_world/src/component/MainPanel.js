import { Link } from "react-router-dom";
import styled from "styled-components";
import KeyboardArrowRightRoundedIcon from "@material-ui/icons/KeyboardArrowRightRounded";

const MainPanelBox = styled.div`
  margin-top: 60px;
  list-style: none;

  .panelHeader {
    font-size: 24px;
    font-weight: 500;
    line-height: 24px;

    & > a {
      color: $primary-text-color;
      display: inline-flex;
      margin: 0 16px 21px;

      .more {
        color: $primary-color;
        display: inline-flex;
        align-items: center;
        font-size: 14px;
        line-height: 26px;
        padding-left: 9px;

        svg {
          fill: $primary-color;
          margin-left: 1px;
          padding-top: 1px;
          width: 18px;
          height: 18px;
        }
      }
    }
  }
`;

const MainPanel = ({ data }) => {
  const { link, title, compoennt, moreable } = data;
  return (
    <MainPanelBox>
      <li className="mainPanel">
        <section className="panelHeader">
          {moreable ? (
            <Link to={link}>
              <span className="tit">{title}</span>
              <sapn className="more">
                더 보기 <KeyboardArrowRightRoundedIcon fontSize="small" />
              </sapn>
            </Link>
          ) : (
            <a>
              <span className="tit">{title}</span>
            </a>
          )}
        </section>
        <div className="component">{compoennt}</div>
      </li>
    </MainPanelBox>
  );
};

export default MainPanel;
