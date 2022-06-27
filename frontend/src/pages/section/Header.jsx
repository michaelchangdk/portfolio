import React from "react";
import Window from "../../components/Window";
import { H2, P } from "../../styles/global";
import styled from "styled-components/macro";
import profile from "../../assets/profile.jpg";
import { Github } from "@styled-icons/entypo-social/Github";
import { Linkedin } from "@styled-icons/evaicons-solid/Linkedin";
import { TwitterOutline } from "@styled-icons/evaicons-outline/TwitterOutline";
import { MailSend } from "@styled-icons/boxicons-regular/MailSend";
import { PersonBadgeFill } from "@styled-icons/bootstrap/PersonBadgeFill";

const Header = (constraintsRef) => {
  return (
    <Window
      title="MICHAEL CHANG"
      navcolor="red"
      constraintsRef={constraintsRef}
      icon={PersonBadgeFill}
      allowMinimize={false}
    >
      <ContactCard>
        <div>
          <ContactImage src={profile} alt="Profile of Michael" />
          <SocialWrapper>
            <SocialButton>
              <Github />
            </SocialButton>
            <SocialButton>
              <Linkedin />
            </SocialButton>
            <SocialButton>
              <TwitterOutline />
            </SocialButton>
            <SocialButton>
              <MailSend />
            </SocialButton>
          </SocialWrapper>
        </div>
        <RecessedWrapper>
          <H2>Hi! I'm Michael.</H2>
          <P>I like to build things for the web.</P>
          <P>
            I'm a frontend dev with project manager experience, with a strong
            background in customer service and a proven track record of
            successful projects.
          </P>
          <P>
            I'm a quick learner with a keen eye for detail, and I'm passionate
            about building beautiful, fun, and user-friendly websites.
          </P>
        </RecessedWrapper>
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
    grid-template-columns: 1fr 1fr;
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
  outline: 0.5px solid #343a40;
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

const RecessedWrapper = styled.div`
  border-left: 4px solid #6c757d;
  border-top: 4px solid #6c757d;
  border-right: 4px solid #e9ecef;
  border-bottom: 4px solid #e9ecef;
  padding: 8px;
  border-radius: 4px;
`;
