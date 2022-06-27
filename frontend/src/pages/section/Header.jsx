import React from "react";
import Window from "../../components/Window";
import { H1, P } from "../../styles/global";

const Header = (constraintsRef) => {
  return (
    <Window
      title="MICHAEL CHANG"
      navcolor="red"
      constraintsRef={constraintsRef}
    >
      <H1>Hi! I'm Michael.</H1>
      <P>
        I like to build things for the web. I'm a frontend dev with project
        manager experience, with a strong background in customer service and a
        proven track record of successful projects. I'm a quick learner with a
        keen eye for detail, and I'm passionate about building beautiful, fun,
        and user-friendly websites.
      </P>
    </Window>
  );
};

export default Header;
