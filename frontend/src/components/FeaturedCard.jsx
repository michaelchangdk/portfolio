import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { urlFor } from "../client";
import styled from "styled-components/macro";
import { H2, P, RecessedWrapper } from "../styles/global";
import { tagsFeaturing } from "../helpers/functions";

const FeaturedCard = (props) => {
  const controlFade = useAnimation();
  const data = props.data;
  const index = props.index;
  const fade = props.fade;

  useEffect(() => {
    if (fade) {
      controlFade.start(() => ({
        opacity: [0, 1],
        transition: { duration: 0.8, times: [0, 0.2, 1] },
      }));
    }
  });

  return (
    <>
      <FeaturedWrapper>
        <RecessedWrapper
          flexdirection="column"
          justifycontent="space-between"
          // gap="16px"
          padding="0px"
        >
          <FeaturedImage
            src={urlFor(data[0].featured[index].image.asset._ref)}
            alt={data[0].featured[index].title}
            animate={controlFade}
          />
          {/* <P>{data[0].featured[index].description}</P> */}
        </RecessedWrapper>
        {/* <FullWidthImage
                src={urlFor(data[0].featured[index].image.asset._ref)}
                alt={data[0].featured[index].title}
              /> */}
        <TitleTechWrapper animate={controlFade}>
          <H2 weight={400}>{data[0].featured[index].title}</H2>
          <P weight={300} size="14px">
            {tagsFeaturing(data[0].featured[index].stack)}
          </P>
        </TitleTechWrapper>
      </FeaturedWrapper>
    </>
  );
};

export default FeaturedCard;

const FeaturedImage = styled(motion.img)`
  width: 100%;
`;

const TitleTechWrapper = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 0 4px;
  height: 60px;
`;

const FeaturedWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;
