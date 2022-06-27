import React, { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import {
  H2SourceCode,
  TreeHeader,
  TreeButton,
  TreeIcon,
  TreeChild,
} from "../styles/global";

const AccordionTree = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (props.defaultOpen) {
      setIsOpen(true);
    }
  }, [props.defaultOpen]);

  return (
    <>
      <TreeHeader onClick={() => setIsOpen(!isOpen)} disabled={props.disabled}>
        {!props.disabled && <TreeButton>{isOpen ? "-" : "+"}</TreeButton>}
        {props.disabled && <TreeIcon>⨯</TreeIcon>}
        <H2SourceCode>{props.title}</H2SourceCode>
      </TreeHeader>
      {!props.disabled && (
        <AnimatePresence initial={false}>
          {isOpen && (
            <TreeChild
              key="content"
              initial="collapsed"
              animate="open"
              exit="collapsed"
              variants={{
                open: { opacity: 1, height: "auto" },
                collapsed: { opacity: 0, height: 0 },
              }}
              transition={{ duration: 0.4 }}
            >
              {props.children}
            </TreeChild>
          )}
        </AnimatePresence>
      )}
    </>
  );
};

export default AccordionTree;
