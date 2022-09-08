import React from "react";
// import styled from "styled-components";
import Live from "../component/Live";
import OtherMember from "../component/OtherMember";
import MainPanel from "../component/MainPanel";
import BestPost from "../component/BestPost ";
import styles from "./MainContainer.scss";

/*
const MainPanelListBlock = styles.body`
  margin: 0 auto;
  padding-bottom: 31px;

  .MainPanel {
    &:nth-child(3),
    &:nth-child(4) {
      width: 100%;

      @include tablet {
        max-width: 447px;
      }
      margin-left: auto;
      margin-right: auto;

      .panelHeader {
        padding: 0 8px;
      }
    }
    &:nth-child(3) {
      grid-area: apps;
    }
    &:nth-child(4) {
      grid-area: etcs;
    }

    .panelHeader {
      @include tablet {
        margin: 0 calc((100% - 431px) / 2);
      }
    }
  }
`;*/

const MainPanelListBlock = () => (
  <div classname={`${styles.MainPanelListBlock}`} />
);

const MainPanelList = () => {
  const data = [
    {
      id: "main_live",
      title: "우왁굳 생방송",
      moreable: true,
      link: "/live",
      component: <Live front={true} />,
    },
    {
      id: "main_otherlives",
      title: "왁타버스 생방송들",
      moreable: true,
      link: "/otherlive",
      component: <OtherMember front={true} />,
    },
    {
      id: "main_popularpost",
      title: "왁물원 인기글",
      moreable: true,
      link: "/bestpost",
      component: <BestPost front={true} />,
    },
  ];

  const list = data.map((data) => <MainPanel key={data.id} data={data} />);

  return (
    <MainPanelListBlock>
      <ul className="mainPanelList">{list}</ul>
    </MainPanelListBlock>
  );
};

const MainContainer = () => {
  return (
    <div className="mainPage">
      <MainPanelList />
    </div>
  );
};

export default MainContainer;
