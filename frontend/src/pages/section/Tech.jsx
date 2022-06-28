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
        <AccordionTree title="CODE">
          <AccordionTree disabled={true} title="React" />
          <AccordionTree disabled={true} title="React Native" />
          <AccordionTree disabled={true} title="Redux" />
          <AccordionTree disabled={true} title="React Router" />
          <AccordionTree disabled={true} title="HTML5" />
          <AccordionTree disabled={true} title="CSS3 & BEM" />
          <AccordionTree disabled={true} title="JavaScript ES6 & JSX" />
          <AccordionTree disabled={true} title="Webhooks & APIs" />
          <AccordionTree disabled={true} title="Node.js" />
          <AccordionTree disabled={true} title="Mongoose" />
          <AccordionTree disabled={true} title="MongoDB" />
        </AccordionTree>
        <AccordionTree title="TOOLBOX">
          <AccordionTree disabled={true} title="VSCode" />
          <AccordionTree disabled={true} title="Github" />
          <AccordionTree disabled={true} title="Sanity.io" />
          <AccordionTree disabled={true} title="Figma" />
          <AccordionTree disabled={true} title="Postman" />
          <AccordionTree disabled={true} title="Zapier & Make" />
          <AccordionTree disabled={true} title="Airtable" />
        </AccordionTree>
        <AccordionTree title="SKILLS">
          <AccordionTree disabled={true} title="Agile Methodology" />
          <AccordionTree disabled={true} title="Pair Programming" />
          <AccordionTree disabled={true} title="Mob Programming" />
          <AccordionTree disabled={true} title="Project Management" />
          <AccordionTree disabled={true} title="Workflow Automation" />
        </AccordionTree>
        <AccordionTree title="EXPERIENCE">
          <AccordionTree disabled={true} title="Tech Lead @ With Purpose" />
          <AccordionTree disabled={true} title="RHoK Hackathon" />
          <AccordionTree
            disabled={true}
            title="Technigo Frontend Dev Bootcamp"
          />
          <AccordionTree
            disabled={true}
            title="Dr Angela Yu's Web Dev Bootcamp"
          />
        </AccordionTree>
        <AccordionTree title="UPCOMING">
          <AccordionTree disabled={true} title="Typescript" />
          <AccordionTree disabled={true} title="OOP" />
        </AccordionTree>
      </AccordionTree>
    </Window>
  );
};

export default Tech;
