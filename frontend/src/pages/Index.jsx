import React, { useRef } from "react";
import { IndexBackground } from "../styles/global";
import Header from "./section/Header";
import Bio from "./section/Bio";

const Index = () => {
  const ref = useRef(null);

  return (
    <IndexBackground ref={ref}>
      <Header constraintsRef={ref} />
      <Bio constraintsRef={ref} />
    </IndexBackground>
  );
};

export default Index;
