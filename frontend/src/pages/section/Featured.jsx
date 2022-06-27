import React from "react";
import Window from "../../components/Window";
import { MusicPlayerFill } from "@styled-icons/bootstrap/MusicPlayerFill";

const Featured = (constraintsRef) => {
  return (
    <Window
      title="FEAT. PROJECTS"
      navcolor="green"
      constraintsRef={constraintsRef}
      icon={MusicPlayerFill}
      allowMaximize={false}
    ></Window>
  );
};

export default Featured;
