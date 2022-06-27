import React from "react";
import Window from "../../components/Window";
import { FileTrayFull } from "@styled-icons/ionicons-solid/FileTrayFull";

const AllProjects = (constraintsRef) => {
  return (
    <Window
      title="ALL PROJECTS"
      navcolor="deeppink"
      constraintsRef={constraintsRef}
      icon={FileTrayFull}
      allowMaximize={true}
    ></Window>
  );
};

export default AllProjects;
