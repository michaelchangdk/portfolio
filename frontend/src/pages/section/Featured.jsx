import React from "react";
import styled from "styled-components/macro";
import Window from "../../components/Window";
import { H1, P, RecessedWrapper, LinkButton } from "../../styles/global";
import { MusicPlayerFill } from "@styled-icons/bootstrap/MusicPlayerFill";
import { ExternalLink } from "@styled-icons/heroicons-outline/ExternalLink";
import { Github } from "@styled-icons/entypo-social/Github";
import { PlayArrow } from "@styled-icons/material-rounded/PlayArrow";
import { SkipPrevious } from "@styled-icons/material-rounded/SkipPrevious";
import { SkipNext } from "@styled-icons/material-rounded/SkipNext";

const Featured = (constraintsRef) => {
  return (
    <Window
      title="FEAT. PROJECTS"
      navcolor="green"
      constraintsRef={constraintsRef}
      icon={MusicPlayerFill}
      allowMaximize={false}
    >
      <FeaturedCard>
        <RecessedWrapper
          flexdirection="row"
          justifycontent="space-between"
          gap="16px"
        ></RecessedWrapper>
        <H1>With Purpose - E-learning Platform</H1>
        <P>React feat. Redux, React-Router, Sanity.io & MUI</P>
        <CarouselNavWrapper>
          <CarouselButton>
            <SkipPrevious />
          </CarouselButton>
          <PlayButton>
            <PlayArrow />
          </PlayButton>
          <CarouselButton>
            <SkipNext />
          </CarouselButton>
        </CarouselNavWrapper>
        <ButtonWrapper>
          <LinkButton>
            <Github />
          </LinkButton>
          <LinkButton>
            <ExternalLink />
          </LinkButton>
        </ButtonWrapper>
      </FeaturedCard>
    </Window>
  );
};

export default Featured;

const FeaturedCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const CarouselNavWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 16px;
`;

const PlayButton = styled.button`
  width: 72px;
  height: 72px;
  border-radius: 50%;
  color: #212529;
  background-color: #ced4da;
  padding: 4px;
  border-left: 4px solid #e9ecef;
  border-top: 4px solid #e9ecef;
  border-right: 4px solid #6c757d;
  border-bottom: 4px solid #6c757d;
  :active {
    padding: 2px;
    border-left: 4px solid #6c757d;
    border-top: 4px solid #6c757d;
    border-right: 4px solid #e9ecef;
    border-bottom: 4px solid #e9ecef;
  }
`;

const CarouselButton = styled.button`
  width: 52px;
  height: 52px;
  border-radius: 50%;
  color: #212529;
  background-color: #ced4da;
  padding: 4px;
  border-left: 4px solid #e9ecef;
  border-top: 4px solid #e9ecef;
  border-right: 4px solid #6c757d;
  border-bottom: 4px solid #6c757d;
  :active {
    padding: 2px;
    border-left: 4px solid #6c757d;
    border-top: 4px solid #6c757d;
    border-right: 4px solid #e9ecef;
    border-bottom: 4px solid #e9ecef;
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  gap: 8px;
`;
