import { TwitchPlayer } from "react-twitch-embed";
import styled from "styled-components";
import Responsive from "./common/Responsive";

const StyledPlayer = styled(Responsive)`
  padding-top: 5rem;
  padding-bottom: 5rem;
  display: flex;
`;

const ChimPlayer = () => {
  const channel = "woowakgood";

  return (
    <StyledPlayer>
      <TwitchPlayer
        channel={channel}
        id="Live"
        height={480}
        width={720}
        theme="dark"
      />
    </StyledPlayer>
  );
};

export default ChimPlayer;
