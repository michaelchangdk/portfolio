import React, { useState } from "react";
import {
  H1,
  WindowWrapper,
  WindowTopBar,
  WindowTopBarLeft,
  WindowTopBarRight,
  WindowContent,
  RaisedWindowButton,
} from "../styles/global";

const Window = (props) => {
  const [close, setClose] = useState(false);
  const [expand, setExpand] = useState(false);
  const [minimize, setMinimize] = useState(false);

  const variants = {
    visible: { scale: 1, opacity: 1 },
    hidden: { scale: 0, opacity: 0 },
  };

  const handleExpand = () => {
    setExpand(!expand);
    setMinimize(false);
  };

  const handleMinimize = () => {
    setMinimize(!minimize);
    setExpand(false);
  };

  return (
    <WindowWrapper
      // exit={close}
      dragConstraints={props.constraintsRef.constraintsRef}
      expand={+expand}
      minimize={+minimize}
      initial="visible"
      variants={variants}
      animate={close ? "hidden" : "visible"}
      layout
      drag
      transition={{ layout: { duration: 0.1 } }}
    >
      <WindowTopBar backgroundcolor={props.navcolor}>
        <WindowTopBarLeft>
          <H1>{props.title}</H1>
        </WindowTopBarLeft>
        <WindowTopBarRight>
          <RaisedWindowButton onClick={handleMinimize} enabled={+minimize}>
            _
          </RaisedWindowButton>
          <RaisedWindowButton onClick={handleExpand} enabled={+expand}>
            O
          </RaisedWindowButton>
          <RaisedWindowButton onClick={() => setClose(!close)}>
            X
          </RaisedWindowButton>
        </WindowTopBarRight>
      </WindowTopBar>
      <WindowContent minimize={minimize} expand={+expand}>
        {props.children}
      </WindowContent>
    </WindowWrapper>
  );
};

export default Window;
