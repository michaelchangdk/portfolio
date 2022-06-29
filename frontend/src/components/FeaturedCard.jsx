import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { urlFor } from "../client";
import styled from "styled-components/macro";
import { H2, P, RecessedWrapper } from "../styles/global";
import { tagsFeaturing } from "../helpers/functions";

const FeaturedCard = (props) => {
  const controlTextFade = useAnimation();
  const controlImageFade = useAnimation();
  const controlDescription = useAnimation();
  const data = props.data;
  const index = props.index;
  const fade = props.fade;
  const flip = props.flip;

  const descriptionVariants = {
    hidden: {
      scale: 0,
    },
  };

  useEffect(() => {
    if (!fade & flip) {
      controlImageFade.start(() => ({
        opacity: [1, 0.2],
        transition: { duration: 0.8, times: [0, 0.2, 1] },
      }));
      controlDescription.start(() => ({
        scale: [0, 1],
      }));
    } else if (!fade & !flip) {
      controlDescription.start(() => ({
        scale: [1, 0],
      }));
      controlImageFade.start(() => ({
        opacity: [0.2, 1],
        transition: { duration: 0.8, times: [0, 0.2, 1] },
      }));
    } else if (fade) {
      controlTextFade.start(() => ({
        opacity: [0, 1],
        transition: { duration: 0.8, times: [0, 0.2, 1] },
      }));
      controlImageFade.start(() => ({
        opacity: [0, 1],
        scale: [1, 1],
        transition: { duration: 0.8, times: [0, 0.2, 1] },
      }));
      controlDescription.start(() => ({
        scale: [1, 0],
        transition: { duration: 0.01 },
      }));
    }
    // else if (!fade) {
    // controlImageFade.start(() => ({
    //   opacity: [1, 0.2],
    //   transition: { duration: 0.8, times: [0, 0.2, 1] },
    // }));
    // controlDescription.start(() => ({
    //   scale: [0, 1],
    // }));
    // }
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
            animate={controlImageFade}
          />
          <DescriptionWrapper
            variants={descriptionVariants}
            initial="hidden"
            animate={controlDescription}
          >
            <DescriptionParagraph
              variants={descriptionVariants}
              initial="hidden"
              animate={controlDescription}
            >
              {data[0].featured[index].description}
            </DescriptionParagraph>
          </DescriptionWrapper>
        </RecessedWrapper>
        {/* <FullWidthImage
                src={urlFor(data[0].featured[index].image.asset._ref)}
                alt={data[0].featured[index].title}
              /> */}
        <TitleTechWrapper animate={controlTextFade}>
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
  /* position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0; */
`;

const TitleTechWrapper = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 0 4px;
  height: 60px;
`;

const DescriptionWrapper = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  left: 0;
  bottom: 0;
  right: 0;
  top: 0;
  padding: 24px;
`;

const DescriptionParagraph = styled(motion.p)`
  font-family: "Prompt", sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.3;
`;

const FeaturedWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;
