import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styled from "styled-components/macro";
import { H2SourceCode } from "../styles/global";

const AccordionTree = (props) => {
  console.log(props);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (props.defaultOpen) {
      setIsOpen(true);
    }
  }, [props.defaultOpen]);

  return (
    <>
      <TreeHeader onClick={() => setIsOpen(!isOpen)}>
        <TreeIcon>{isOpen ? "-" : "+"}</TreeIcon>
        <H2SourceCode>{props.title}</H2SourceCode>
      </TreeHeader>
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
    </>
  );
};

export default AccordionTree;

const TreeHeader = styled(motion.div)`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
  margin-bottom: 8px;
  cursor: pointer;
`;

const TreeIcon = styled.button`
  border: 1.5px solid black;
  height: 20px;
  width: 20px;
  color: black;
  font-family: "Source Code Pro", monospace;
  font-weight: 600;
`;

const TreeChild = styled(motion.section)`
  display: flex;
  flex-direction: column;
  margin-left: 9px;
  padding-left: 16px;
  border-left: 1.5px dashed black;
`;
