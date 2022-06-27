import React, { useRef } from "react";
import { IndexBackground } from "../styles/global";
import Header from "./section/Header";

const Index = () => {
  const ref = useRef(null);

  return (
    <IndexBackground ref={ref}>
      <Header constraintsRef={ref} />
    </IndexBackground>
  );
};

export default Index;
