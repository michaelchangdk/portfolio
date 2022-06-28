import React from "react";
import Window from "../../components/Window";
import AccordionTree from "../../components/AccordionTree";
import { List } from "@styled-icons/entypo/List";
import { FetchSection } from "../../services/clientFunctions";

const query = `*[_type == "tech" && !(_id in path('drafts.**'))]`;

const Tech = (constraintsRef) => {
  const [loading, data] = FetchSection(query);
  return (
    <>
      {!loading && (
        <Window
          title={!loading && data[0].title}
          navcolor="blue"
          constraintsRef={constraintsRef}
          icon={List}
          allowMaximize={false}
        >
          <AccordionTree title="MAIN" defaultOpen={true}>
            {!loading &&
              data[0].stack.map((item) => (
                <AccordionTree title={item.category} key={item._key}>
                  {item.items.map((item, index) => (
                    <AccordionTree disabled={true} title={item} key={index} />
                  ))}
                </AccordionTree>
              ))}
          </AccordionTree>
        </Window>
      )}
    </>
  );
};

export default Tech;
