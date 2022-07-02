import React, { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import {
  H2SourceCode,
  TreeHeader,
  TreeButton,
  TreeIcon,
  TreeBody,
} from "../styles/global";

const AccordionTree = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const items = props.items;

  const variants = {
    open: {
      opacity: 1,
      height: "auto",
      transition: { staggerChildren: 0.3 },
    },
    collapsed: { opacity: 0, height: 0 },
  };

  useEffect(() => {
    if (props.defaultOpen) {
      setIsOpen(true);
    }
  }, [props.defaultOpen]);

  return (
    <>
      <TreeHeader onClick={() => setIsOpen(!isOpen)} variants={variants}>
        {<TreeButton>{isOpen ? "-" : "+"}</TreeButton>}
        <H2SourceCode>{props.title}</H2SourceCode>
      </TreeHeader>
      <AnimatePresence initial={false}>
        {!items & isOpen && (
          <TreeBody
            // key="content"
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={variants}
          >
            {props.children}
          </TreeBody>
        )}
        {!!items & isOpen && (
          <TreeBody
            // key="content"
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={variants}
          >
            {items.map((item) => (
              <TreeHeader key={item} variants={variants}>
                <TreeIcon>·</TreeIcon>
                <H2SourceCode>{item}</H2SourceCode>
              </TreeHeader>
            ))}
          </TreeBody>
        )}
      </AnimatePresence>
    </>
  );
};

export default AccordionTree;
