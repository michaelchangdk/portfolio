import React from "react";
import Window from "../../components/Window";
import {
  H2,
  P,
  LinkButton,
  RecessedWrapper,
  FullWidthImage,
} from "../../styles/global";
import styled from "styled-components/macro";
import profile from "../../assets/profile.jpg";
import { Github } from "@styled-icons/entypo-social/Github";
import { Linkedin } from "@styled-icons/evaicons-solid/Linkedin";
import { MailSend } from "@styled-icons/boxicons-regular/MailSend";
import { Medium } from "@styled-icons/simple-icons/Medium";
import { Download } from "@styled-icons/icomoon/Download";
import { PersonBadgeFill } from "@styled-icons/bootstrap/PersonBadgeFill";

const Header = (constraintsRef) => {
  return (
    <Window
      title="MICHAEL CHANG"
      navcolor="red"
      constraintsRef={constraintsRef}
      icon={PersonBadgeFill}
      allowMaximize={false}
    >
      <ContactCard>
        <FullWidthImage src={profile} alt="Profile of Michael" />
        <SocialWrapper>
          <LinkButton
            onClick={() =>
              window.open("https://github.com/michaelchangdk", "_blank")
            }
          >
            <Github />
          </LinkButton>
          <LinkButton
            onClick={() =>
              window.open(
                "https://www.linkedin.com/in/michaelchangdk/",
                "_blank"
              )
            }
          >
            <Linkedin />
          </LinkButton>
          <LinkButton
            onClick={() =>
              window.open("https://medium.com/@michaelchangdk", "_blank")
            }
          >
            <Medium />
          </LinkButton>
          <LinkButton
            onClick={() =>
              window.open("mailto:michaelchangdk@icloud.com?subject=Hello!")
            }
          >
            <MailSend />
          </LinkButton>
          <LinkButton onClick={() => window.open("", "_blank")}>
            <Download />
          </LinkButton>
        </SocialWrapper>
        <ContactWrapper>
          <RecessedWrapper gap="16px">
            <H2 size="22px">Hi! I'm Michael.</H2>
            <P>I like to make things for the web.</P>
            <P>
              I'm a quick learner with a keen eye for detail, and I'm passionate
              about building beautiful, fun, and user-friendly websites.
            </P>
            <P>
              Feel free to connect with me using any of the buttons, or download
              my resume.
            </P>
          </RecessedWrapper>
        </ContactWrapper>
      </ContactCard>
    </Window>
  );
};

export default Header;

const ContactCard = styled.div`
  display: grid;
  gap: 8px;
  max-width: 900px;
  margin: 0 auto;

  @media (min-width: 600px) {
    grid-template-columns: 0.6fr 1fr;
    grid-template-rows: auto auto;
  }
`;

const ContactWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 16px;

  @media (min-width: 600px) {
    grid-row-start: 1;
    grid-row-end: 3;
    grid-column-start: 2;
    grid-column-end: 2;
  }
`;

const SocialWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
  padding: 8px;
  border-left: 4px solid #6c757d;
  border-top: 4px solid #6c757d;
  border-right: 4px solid #e9ecef;
  border-bottom: 4px solid #e9ecef;
  border-radius: 4px;
  max-height: 66px;

  @media (min-width: 600px) {
    grid-column-start: 1;
    grid-column-end: 1;
  }
`;
