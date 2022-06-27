import React from "react";
import Window from "../../components/Window";
import { H2, P } from "../../styles/global";
import styled from "styled-components/macro";
import profile from "../../assets/profile.jpg";
import { Github } from "@styled-icons/entypo-social/Github";
import { Linkedin } from "@styled-icons/evaicons-solid/Linkedin";
import { TwitterOutline } from "@styled-icons/evaicons-outline/TwitterOutline";
import { MailSend } from "@styled-icons/boxicons-regular/MailSend";
import { Medium } from "@styled-icons/simple-icons/Medium";
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
        <ContactImage src={profile} alt="Profile of Michael" />
        <ContactWrapper>
          <RecessedWrapper>
            <H2 size="22px">Hi! I'm Michael.</H2>
            <P>I like to make things for the web.</P>
            <P>
              I'm a quick learner with a keen eye for detail, and I'm passionate
              about building beautiful, fun, and user-friendly websites.
            </P>
          </RecessedWrapper>
          <SocialWrapper>
            <SocialButton>
              <Github />
            </SocialButton>
            <SocialButton>
              <Linkedin />
            </SocialButton>
            <SocialButton>
              <Medium />
            </SocialButton>
            <SocialButton>
              <TwitterOutline />
            </SocialButton>
            <SocialButton>
              <MailSend />
            </SocialButton>
          </SocialWrapper>
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
  }
`;

const ContactImage = styled.img`
  width: 100%;
  border-left: 4px solid #6c757d;
  border-top: 4px solid #6c757d;
  border-right: 4px solid #e9ecef;
  border-bottom: 4px solid #e9ecef;
  border-radius: 4px;
`;

const ContactWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 8px;
`;

const RecessedWrapper = styled.div`
  border-left: 4px solid #6c757d;
  border-top: 4px solid #6c757d;
  border-right: 4px solid #e9ecef;
  border-bottom: 4px solid #e9ecef;
  padding: 8px;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  height: 100%;
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
    grid-column-start: 2;
    grid-column-end: 2;
  }
`;

const SocialButton = styled.button`
  height: 42px;
  width: 42px;
  color: #212529;
  background-color: #ced4da;
  padding: 4px;
  border-radius: 4px;
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
  /* :hover {
    color: red;
  } */
`;
