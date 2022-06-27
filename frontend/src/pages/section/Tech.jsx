import React from "react";
import Window from "../../components/Window";
import AccordionTree from "../../components/AccordionTree";
import { List } from "@styled-icons/entypo/List";

const Tech = (constraintsRef) => {
  return (
    <Window
      title="SKILLS & EXP"
      navcolor="blue"
      constraintsRef={constraintsRef}
      icon={List}
      allowMaximize={false}
    >
      <AccordionTree title="MAIN" defaultOpen={true}>
        <AccordionTree title="CODE"></AccordionTree>
        <AccordionTree title="SKILLS"></AccordionTree>
        <AccordionTree title="TOOLBOX"></AccordionTree>
        <AccordionTree title="EXPERIENCE"></AccordionTree>
        <AccordionTree title="UPCOMING"></AccordionTree>
      </AccordionTree>
    </Window>
  );
};

export default Tech;
