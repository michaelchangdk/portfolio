import React, { useRef } from "react";
import { IndexBackground } from "../styles/global";
import Bio from "./section/Bio";

const Index = () => {
  const ref = useRef(null);

  return (
    <IndexBackground ref={ref}>
      <Bio constraintsRef={ref} />
    </IndexBackground>
  );
};

export default Index;
